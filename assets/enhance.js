// Midnight Space — enhancement layer (loaded as a module so we can pull
// live data without bloating main.js). Three jobs:
//
//   1. Choreograph the hero on first paint (staggered entry).
//   2. When the live-stats section scrolls into view, fetch real numbers
//      from Supabase and count them up. Render the sectoral pulse list
//      below it with animated bars.
//   3. Subtle magnetic-cursor polish on primary CTAs.

import {
  getStats, getSectorBreakdown, countUp, formatVerified,
  getFundingField, getCountryGeo, sectorColor, canonicalCountry,
} from './live.js';

// 0) Stat-card dot fields ---------------------------------------------
// Inject a decorative dot-field layer into every .stat-card so they
// echo the Funding Field aesthetic without each HTML page needing to
// know about it.
document.querySelectorAll('.stat-card').forEach(card => {
  if (card.querySelector('.stat-field')) return;
  const field = document.createElement('span');
  field.className = 'stat-field';
  field.setAttribute('aria-hidden', 'true');
  card.prepend(field);
});

// 1) Hero entry --------------------------------------------------------
(() => {
  const hero = document.querySelector('.hero[data-entry]');
  if (!hero) return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => hero.classList.add('entered'));
  });
})();

// 2) Live stats + sectoral pulse --------------------------------------
function paintSectorBars(list, sectors) {
  const max = Math.max(...sectors.map(s => s.count), 1);
  const frag = document.createDocumentFragment();
  const shown = sectors.slice(0, 14);
  shown.forEach((s, i) => {
    const li = document.createElement('li');
    li.className = 'sector-row' + (i < 3 ? ' is-top' : '');
    const label = document.createElement('span');
    label.className = 'sr-label';
    label.textContent = s.label;
    const bar = document.createElement('span');
    bar.className = 'sr-bar';
    const num = document.createElement('span');
    num.className = 'sr-num';
    num.textContent = s.count.toLocaleString('en-US');
    li.append(label, bar, num);
    frag.append(li);
  });
  list.replaceChildren(frag);
  requestAnimationFrame(() => {
    [...list.children].forEach((li, i) => {
      const pct = (shown[i].count / max) * 100;
      const bar = li.querySelector('.sr-bar');
      bar.style.setProperty('--w', pct.toFixed(1) + '%');
      setTimeout(() => li.classList.add('in'), 60 + i * 55);
    });
  });
}

async function hydrateLive() {
  // stats
  const stats = await getStats().catch(() => null);
  if (stats) {
    document.querySelectorAll('[data-stat]').forEach(el => {
      const key = el.dataset.stat;
      const target = stats[key];
      if (typeof target !== 'number') { el.classList.add('awake'); return; }
      // Reset to 0 so the count animates from a believable starting point
      // even on a cached page render.
      el.textContent = '0';
      el.classList.add('awake');
      countUp(el, target);
    });
    // live stamp
    document.querySelectorAll('[data-live-stamp]').forEach(stamp => {
      const text = formatVerified(stats.lastVerified) || 'Verified today';
      const t = stamp.querySelector('.live-text');
      if (t) t.textContent = text;
      if (/days ago/.test(text)) {
        const m = text.match(/(\d+) days/);
        if (m && parseInt(m[1], 10) > 7) stamp.classList.add('stale');
      } else if (/Verified \d/.test(text)) {
        stamp.classList.add('stale');
      }
    });
  } else {
    document.querySelectorAll('[data-stat]').forEach(el => el.classList.add('awake'));
  }

  // sectoral chart
  const list = document.querySelector('[data-sector-list]');
  if (list) {
    const sectors = await getSectorBreakdown().catch(() => null);
    if (sectors && sectors.length) {
      paintSectorBars(list, sectors);
      const openSum = sectors.reduce((a, s) => a + s.count, 0);
      const setMeta = (k, v) => {
        const el = document.querySelector(`[data-sector-meta="${k}"]`);
        if (el) el.textContent = v;
      };
      setMeta('open', openSum.toLocaleString('en-US'));
      setMeta('count', String(sectors.length));
      setMeta('updated', 'live · refreshes every 5 min');
    }
  }
}

// Trigger when the stats section approaches the viewport. One-shot.
(() => {
  const trigger = document.getElementById('liveStats');
  if (!trigger) return;
  let fired = false;
  const fire = () => { if (fired) return; fired = true; hydrateLive(); };
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { fire(); obs.disconnect(); } });
    }, { threshold: .15, rootMargin: '0px 0px -10% 0px' });
    obs.observe(trigger);
  } else {
    fire();
  }
})();

// 2b) Live Funding Field ----------------------------------------------
// The signature visualization. For each open program in a GCC country,
// render a dot at the country centroid (with a deterministic micro-offset
// inside the country so the cluster reads as a population, not a stack).
// Sector → color. Hover reveals title + sponsor + funding type.
//
// SECURITY: Titles and sponsors come from Supabase as user-supplied text.
// We build the SVG body via innerHTML for speed (700+ <circle> nodes,
// constructing each via createElementNS visibly stalls). Every interpolated
// value goes through xmlEscape() — non-negotiable.

const FIELD_VIEW = { w: 800, h: 560, lng0: 32, lng1: 60, lat0: 14, lat1: 34 };

// XML escape — covers SVG attribute values + element text content.
const xmlEscape = (s) => String(s ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const project = (lng, lat) => ({
  x: ((lng - FIELD_VIEW.lng0) / (FIELD_VIEW.lng1 - FIELD_VIEW.lng0)) * FIELD_VIEW.w,
  y: FIELD_VIEW.h - ((lat - FIELD_VIEW.lat0) / (FIELD_VIEW.lat1 - FIELD_VIEW.lat0)) * FIELD_VIEW.h,
});

// Deterministic [0,1) pseudo-random from a string — keeps each program
// in the same spot across reloads, which matters when the user re-visits.
function hashUnit(s, salt = 0) {
  let h = 2166136261 ^ salt;
  for (let i = 0; i < s.length; i++) { h = Math.imul(h ^ s.charCodeAt(i), 16777619); }
  return ((h >>> 0) % 1000) / 1000;
}

function clusterOffset(seed, salt) {
  const r = Math.sqrt(hashUnit(seed, salt));     // sqrt → uniform by area
  const a = hashUnit(seed, salt + 1) * Math.PI * 2;
  return { ux: Math.cos(a) * r, uy: Math.sin(a) * r };
}

// Country cluster radii — wider for Saudi (lots of programs), tight for
// small states. Pure aesthetic; no semantic meaning.
const COUNTRY_R = {
  'Saudi Arabia': 110,
  'UAE': 38, 'United Arab Emirates': 38,
  'Qatar': 20, 'Bahrain': 14, 'Kuwait': 22, 'Oman': 36,
  'Jordan': 18, 'Egypt': 22, 'Lebanon': 14,
  'GCC': 60, 'Saudi Arabia / MENA': 90,
};

function buildFieldSvg(rows, sectorIndex) {
  const buckets = new Map();
  let elsewhere = 0;
  for (const r of rows) {
    const canon = canonicalCountry(r.country);
    const geo = getCountryGeo(r.country);
    if (!geo || !canon) { elsewhere++; continue; }
    if (!buckets.has(canon)) buckets.set(canon, []);
    buckets.get(canon).push(r);
  }

  // Concentric stagger anchor — dots ripple outward from Saudi's centroid.
  // distance is normalized so the longest reach maps to a 1.2s spread.
  const saudiGeo = getCountryGeo('Saudi Arabia');
  const saudiC = project(saudiGeo.lng, saudiGeo.lat);
  const maxDist = Math.hypot(FIELD_VIEW.w, FIELD_VIEW.h);

  const dotsSvg = [];
  const labelsSvg = [];
  let total = 0;
  for (const [country, list] of buckets) {
    const geo = getCountryGeo(country);
    const c = project(geo.lng, geo.lat);
    const radius = COUNTRY_R[country] ?? 28;
    list.forEach((row, i) => {
      const seed = (row.id ?? '') + ':' + country + ':' + i;
      const o = clusterOffset(seed, 0);
      const cx = c.x + o.ux * radius;
      const cy = c.y + o.uy * radius;
      const firstSector = Array.isArray(row.sectors) && row.sectors.length
        ? String(row.sectors[0]).trim().toLowerCase() : '';
      const idx = sectorIndex.get(firstSector);
      const fill = sectorColor(firstSector, idx ?? 0);
      const isFav = ['grant', 'tender', 'accelerator'].includes(
        String(row.funding_type || '').trim().toLowerCase()
      );
      const rDot = isFav ? 2.6 : 2.0;

      // Stagger: ring distance from Saudi, normalized to 0..280 frames.
      const ringDist = Math.hypot(cx - saudiC.x, cy - saudiC.y);
      const ringFrame = Math.round((ringDist / maxDist) * 280);

      const title = xmlEscape(row.title);
      const sponsor = xmlEscape(row.sponsor_institution);
      const type = xmlEscape(row.funding_type);
      const ctry = xmlEscape(country);
      const fillS = xmlEscape(fill);
      const sectorAttr = xmlEscape(firstSector);
      dotsSvg.push(
        `<circle class="ff-dot" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${rDot}" fill="${fillS}"` +
        ` style="--d:${ringFrame}"` +
        ` data-title="${title}" data-country="${ctry}" data-sponsor="${sponsor}"` +
        ` data-type="${type}" data-sector="${sectorAttr}">` +
        `<title>${title}</title></circle>`
      );
      total++;
    });

    // Country label — manual layout per country so labels don't collide.
    // Format: { dx, dy, anchor }. Defaults are centred under the cluster.
    const labelLayout = {
      'Saudi Arabia':         { dx: 0,   dy: 138, anchor: 'middle' },
      'Oman':                 { dx: 8,   dy: 56,  anchor: 'start'  },
      'UAE':                  { dx: 50,  dy: 12,  anchor: 'start'  },
      'United Arab Emirates': { dx: 50,  dy: 12,  anchor: 'start'  },
      'Kuwait':               { dx: 0,   dy: -32, anchor: 'middle' },
      'Bahrain':              { dx: -22, dy: -10, anchor: 'end'    },
      'Qatar':                { dx: 32,  dy: 28,  anchor: 'start'  },
      'Jordan':               { dx: 0,   dy: -28, anchor: 'middle' },
      'Egypt':                { dx: 0,   dy: 36,  anchor: 'middle' },
      'Lebanon':              { dx: 0,   dy: -28, anchor: 'middle' },
      'GCC':                  { dx: 0,   dy: 36,  anchor: 'middle' },
      'Saudi Arabia / MENA':  { dx: 0,   dy: 120, anchor: 'middle' },
    };
    const layout = labelLayout[country] ?? { dx: 0, dy: 36, anchor: 'middle' };
    const lx = (c.x + layout.dx).toFixed(0);
    const ly = (c.y + layout.dy).toFixed(0);
    labelsSvg.push(
      `<text class="ff-country" x="${lx}" y="${ly}" text-anchor="${layout.anchor}">${xmlEscape(country)} <tspan class="ff-country-n">${list.length}</tspan></text>`
    );
  }

  return { dots: dotsSvg.join(''), labels: labelsSvg.join(''), elsewhere, total };
}

// Canonical labels for the sector keys we render in the legend.
const SECTOR_LABELS = {
  'innovation': 'Innovation', 'innovation & entrepreneurship': 'Innovation',
  'ict': 'ICT',
  'financial': 'Financial', 'financial services': 'Financial',
  'industrial': 'Industrial', 'industrial & manufacturing': 'Industrial',
  'healthcare': 'Healthcare', 'healthcare & life sciences': 'Healthcare',
  'environment': 'Environment', 'environment services': 'Environment',
  'energy': 'Energy',
  'education': 'Education',
  'realestate': 'Real Estate', 'real estate': 'Real Estate',
  'pharma': 'Pharma', 'pharma & biotech': 'Pharma',
  'tourism': 'Tourism', 'tourism & quality of life': 'Tourism',
  'chemicals': 'Chemicals',
  'agriculture': 'Agriculture', 'agriculture & food processing': 'Agriculture',
  'transport': 'Transport', 'transport & logistics': 'Transport',
  'mining': 'Mining', 'mining & metals': 'Mining',
  'private_sector': 'Private', 'private sector': 'Private',
  'humanitarian': 'Humanitarian',
};

function buildLegend(host, sectorIndex, tally) {
  const legend = host.querySelector('[data-ff-legend]');
  if (!legend) return;
  // Top 8 sectors by count — keeps the strip tight + glanceable.
  const top = [...tally.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
  legend.replaceChildren();
  top.forEach(([key, count]) => {
    const idx = sectorIndex.get(key) ?? 0;
    const color = sectorColor(key, idx);
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'ff-legend-chip';
    chip.dataset.sector = key;
    chip.style.setProperty('--sw-color', color);
    chip.setAttribute('aria-label', `Filter to ${SECTOR_LABELS[key] || key} sector, ${count} programs`);
    const sw = document.createElement('span'); sw.className = 'sw';
    const lbl = document.createElement('span'); lbl.textContent = SECTOR_LABELS[key] || key;
    const n = document.createElement('span'); n.className = 'n'; n.textContent = count.toLocaleString('en-US');
    chip.append(sw, lbl, n);
    legend.append(chip);
  });

  // Hover / focus → filter the field by sector. Leave → restore.
  const apply = (sector) => {
    if (!sector) {
      host.dataset.filterActive = 'false';
      host.querySelectorAll('.ff-dot.ff-match').forEach(d => d.classList.remove('ff-match'));
      return;
    }
    host.dataset.filterActive = 'true';
    host.querySelectorAll('.ff-dot').forEach(d => {
      d.classList.toggle('ff-match', d.dataset.sector === sector);
    });
  };
  legend.addEventListener('pointerover', (e) => {
    const chip = e.target.closest('.ff-legend-chip');
    if (chip) apply(chip.dataset.sector);
  });
  legend.addEventListener('pointerleave', () => apply(null));
  legend.addEventListener('focusin', (e) => {
    const chip = e.target.closest('.ff-legend-chip');
    if (chip) apply(chip.dataset.sector);
  });
  legend.addEventListener('focusout', () => apply(null));
}

async function hydrateField() {
  const host = document.querySelector('[data-funding-field]');
  if (!host) return;
  const rows = await getFundingField().catch(() => null);
  if (!rows || !rows.length) {
    host.dataset.state = 'empty';
    return;
  }

  // Sector index for stable color mapping (top sectors → earliest palette slots).
  const tally = new Map();
  for (const r of rows) {
    if (!Array.isArray(r.sectors)) continue;
    for (const s of r.sectors) {
      const k = String(s).trim().toLowerCase();
      if (!k) continue;
      tally.set(k, (tally.get(k) || 0) + 1);
    }
  }
  const sectorOrder = new Map();
  [...tally.entries()].sort((a, b) => b[1] - a[1]).forEach(([k], i) => sectorOrder.set(k, i));

  const { dots, labels, elsewhere, total } = buildFieldSvg(rows, sectorOrder);

  // All interpolated strings above pass through xmlEscape().
  host.querySelector('[data-ff-dots]').innerHTML = dots;
  host.querySelector('[data-ff-labels]').innerHTML = labels;
  host.querySelector('[data-ff-total]').textContent = total.toLocaleString('en-US');
  host.querySelector('[data-ff-elsewhere]').textContent = elsewhere.toLocaleString('en-US');
  host.dataset.state = 'ready';

  buildLegend(host, sectorOrder, tally);

  requestAnimationFrame(() => host.classList.add('ff-lit'));

  // Mouse-tracking spotlight — updates a CSS var on the host so the
  // ::before radial follows the cursor. rAF-throttled to avoid layout churn.
  const stage = host.querySelector('.ff-stage');
  if (stage && !window.matchMedia('(pointer: coarse)').matches) {
    let raf = 0;
    stage.addEventListener('pointermove', (e) => {
      cancelAnimationFrame(raf);
      const r = stage.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;
      raf = requestAnimationFrame(() => {
        host.style.setProperty('--ff-mx', mx.toFixed(1) + '%');
        host.style.setProperty('--ff-my', my.toFixed(1) + '%');
      });
    });
  }

  // Floating tooltip — one node, repositioned on dot hover.
  const tip = host.querySelector('[data-ff-tooltip]');
  if (!tip) return;
  const tipTitle = tip.querySelector('[data-tip-title]');
  const tipMeta = tip.querySelector('[data-tip-meta]');
  const svgEl = host.querySelector('svg');
  const move = (e) => {
    const t = e.target.closest('.ff-dot');
    if (!t) { tip.dataset.visible = 'false'; return; }
    tipTitle.textContent = t.dataset.title || '';
    const type = (t.dataset.type || '').replace(/^\w/, c => c.toUpperCase());
    tipMeta.textContent = [t.dataset.country, type, t.dataset.sponsor].filter(Boolean).join(' · ');
    const r = host.getBoundingClientRect();
    // Flip the tooltip if it would clip the right edge (320px width buffer).
    const rawX = e.clientX - r.left;
    const useLeft = rawX + 340 > r.width;
    const x = useLeft ? rawX - 320 : rawX + 14;
    const y = e.clientY - r.top - 12;
    tip.style.transform = `translate(${x}px, ${y}px)`;
    tip.dataset.visible = 'true';
  };
  svgEl?.addEventListener('pointermove', move);
  svgEl?.addEventListener('pointerleave', () => { tip.dataset.visible = 'false'; });
}

(() => {
  const trigger = document.querySelector('[data-funding-field]');
  if (!trigger) return;
  let fired = false;
  const fire = () => { if (fired) return; fired = true; hydrateField(); };
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { fire(); obs.disconnect(); } });
    }, { threshold: 0.05, rootMargin: '0px 0px -10% 0px' });
    obs.observe(trigger);
  } else {
    fire();
  }
})();

// 2c) Variable-font hero choreography ---------------------------------
// As the user scrolls past the hero, Fraunces' SOFT axis on .hero-title
// morphs from sharp (30) to soft (100). Restrained — happens once on the
// hero, only on the home and platform pages. Reduced-motion: snap to 70.
(() => {
  const titles = document.querySelectorAll('.hero .hero-title');
  if (!titles.length) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    titles.forEach(t => t.style.setProperty('--soft-roman', '70'));
    return;
  }
  let raf = 0;
  const update = () => {
    raf = 0;
    titles.forEach(t => {
      const hero = t.closest('.hero');
      if (!hero) return;
      const r = hero.getBoundingClientRect();
      // 0 at top of viewport, 1 once hero has fully scrolled past.
      const progress = Math.min(1, Math.max(0, -r.top / (r.height || 1)));
      const eased = Math.pow(progress, 0.85);
      const soft = (30 + eased * 70).toFixed(1);   // 30 → 100
      const opsz = (144 - eased * 50).toFixed(1);  // 144 → 94 (slight tightening too)
      t.style.fontVariationSettings = `"opsz" ${opsz}, "SOFT" ${soft}`;
      const em = t.querySelector('em');
      if (em) {
        // The italic stays soft, but its weight pulses up subtly
        const softEm = (100 - eased * 20).toFixed(1);  // 100 → 80
        em.style.fontVariationSettings = `"opsz" 144, "SOFT" ${softEm}`;
      }
    });
  };
  window.addEventListener('scroll', () => {
    if (raf) return;
    raf = requestAnimationFrame(update);
  }, { passive: true });
  update();
})();

// 2d) Live-now persistent pulse in the header ------------------------
// Replace the static "GCC · Live" pill's content with the actual current
// open-call count, refreshing every 60s with a count-up animation when
// the number changes. The pill keeps its glass styling; only the text
// and the cyan dot now mean something.
(async () => {
  // Find every header GCC·Live pill across the site
  const pills = [...document.querySelectorAll('.util-pill[href*="#coverage"]')];
  if (!pills.length) return;
  let lastOpen = null;
  const render = (n) => {
    pills.forEach(pill => {
      const label = pill.querySelector('.util-label');
      if (!label) return;
      label.classList.add('is-live');
      // Add the cyan pulse dot once
      if (!pill.querySelector('.live-dot-pill')) {
        const dot = document.createElement('span');
        dot.className = 'live-dot-pill';
        dot.setAttribute('aria-hidden', 'true');
        pill.insertBefore(dot, pill.firstChild);
      }
      const prev = lastOpen ?? n;
      label.dataset.live = 'true';
      if (prev !== n) {
        countUp({ textContent: prev }, n, { decimals: 0, format: (v) => Math.round(v).toLocaleString('en-US') + ' open now' });
        let start = prev, t0 = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - t0) / 800);
          const eased = 1 - Math.pow(1 - t, 3);
          const v = Math.round(start + (n - start) * eased);
          label.textContent = v.toLocaleString('en-US') + ' open now';
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      } else {
        label.textContent = n.toLocaleString('en-US') + ' open now';
      }
    });
    lastOpen = n;
  };
  const tick = async () => {
    try {
      const s = await getStats();
      if (typeof s.open === 'number') render(s.open);
    } catch {}
  };
  tick();
  setInterval(tick, 60_000);
})();

// 3) Magnetic CTA polish ----------------------------------------------
// Subtle: button drifts toward the cursor by ~18% of the offset inside a
// 90px halo. Writes CSS variables (--mx / --my) instead of a full
// transform string so the button's :active scale + hover :lift don't
// stomp each other. The base .btn rule composes them.
document.querySelectorAll('.btn-primary, .nav-cta').forEach(btn => {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  btn.setAttribute('data-magnetic', '');
  let raf = 0;
  const reset = () => {
    cancelAnimationFrame(raf);
    btn.style.setProperty('--mx', '0px');
    btn.style.setProperty('--my', '0px');
  };
  btn.addEventListener('pointermove', (e) => {
    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > 90) { reset(); return; }
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      btn.style.setProperty('--mx', (dx * 0.18).toFixed(2) + 'px');
      btn.style.setProperty('--my', (dy * 0.18).toFixed(2) + 'px');
    });
  });
  btn.addEventListener('pointerleave', reset);
  btn.addEventListener('blur', reset);
});
