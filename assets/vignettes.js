// Midnight Space — service vignettes + hero media (index page only).
//
// Each signature module gets a small working demonstration instead of a
// static screenshot tile. The rules from BRAND.md apply in code:
//
//   - LIVE vignettes (database, dashboards) render real rows and real
//     counts from the platform's Supabase endpoint via live.js. Cyan and
//     the word "live" appear only when the fetch actually succeeded.
//   - PLANNED vignettes (global view, API) never use cyan and carry the
//     dimmer planned treatment. Their motion is illustrative, and the
//     markup says "planned" right next to it.
//   - Every loop pauses off-screen, and prefers-reduced-motion collapses
//     all of it to a calm static frame (handled in CSS; JS checks too).
//
// No innerHTML with remote strings anywhere in this file — DB titles and
// sponsors are untrusted text and only ever land via textContent.

import { getStats, getFundingField, countUp } from './live.js';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Pause/resume vignette CSS animations when off-screen. Each vignette
// host gets data-vig-state="running|paused"; CSS keys animation-play-state
// off it so we never burn compositor time below the fold.
const vigIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    e.target.dataset.vigState = e.isIntersecting ? 'running' : 'paused';
  });
}, { threshold: 0.15 });
document.querySelectorAll('[data-vig]').forEach(host => {
  host.dataset.vigState = 'paused';
  vigIO.observe(host);
});

// 1) Hero media — generated orbital footage with a crossfade loop -------
//
// The stage declares the sources:
//   <div data-hero-video data-src="…mp4" data-poster="…jpg">
// If data-src is empty, or the user prefers reduced motion / data saving,
// the poster (or the pure-CSS cosmos beneath it) simply stays. Two video
// elements play the same clip offset by a ~0.8s opacity crossfade so the
// short generated loop never shows a hard cut.
(() => {
  const stage = document.querySelector('[data-hero-video]');
  if (!stage) return;
  const src = stage.dataset.src;
  const saveData = navigator.connection && navigator.connection.saveData;
  const smallScreen = window.matchMedia('(max-width: 720px)').matches;
  if (!src || reduced || saveData) return;

  const FADE = 0.85;            // seconds of overlap between the two players
  const make = () => {
    const v = document.createElement('video');
    v.muted = true;
    v.playsInline = true;
    v.setAttribute('muted', '');
    v.setAttribute('playsinline', '');
    v.preload = 'auto';
    v.src = src;
    v.className = 'hero-video';
    v.setAttribute('aria-hidden', 'true');
    v.tabIndex = -1;
    return v;
  };

  const a = make();
  const b = make();
  b.style.opacity = '0';
  let active = a;
  let failed = false;

  const onFail = () => {
    if (failed) return;
    failed = true;
    a.remove(); b.remove();
    stage.dataset.state = 'static';   // poster / cosmos carries the hero
  };
  a.addEventListener('error', onFail);
  b.addEventListener('error', onFail);

  a.addEventListener('loadeddata', () => {
    if (failed) return;
    stage.dataset.state = 'video';
    a.play().catch(onFail);
  }, { once: true });

  // Crossfade scheduler — checked on a light interval rather than
  // timeupdate (which only fires ~4×/s and can miss the window).
  const tick = () => {
    if (failed || !active.duration) return;
    const remaining = active.duration - active.currentTime;
    if (remaining <= FADE) {
      const next = active === a ? b : a;
      next.currentTime = 0;
      const p = next.play();
      if (p) p.catch(() => {});
      next.style.opacity = '1';
      active.style.opacity = '0';
      const prev = active;
      active = next;
      // Park the old player just after its fade completes.
      setTimeout(() => { prev.pause(); }, FADE * 1000 + 80);
    }
  };
  // On phones one player looping plainly is kinder to the battery.
  if (smallScreen) {
    a.loop = true;
    stage.insertBefore(a, stage.querySelector('.hero-scrim'));
  } else {
    stage.insertBefore(a, stage.querySelector('.hero-scrim'));
    stage.insertBefore(b, stage.querySelector('.hero-scrim'));
    setInterval(tick, 120);
  }

  // Don't decode video the user never sees — pause when hero is gone.
  const heroIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (failed) return;
      if (e.isIntersecting) { active.play().catch(() => {}); }
      else { a.pause(); b.pause(); }
    });
  }, { threshold: 0.05 });
  heroIO.observe(stage);
})();

// 2) Hero readout — real platform numbers under the hero copy ----------
// Uses the same 5-minute getStats cache as the stats section, so this
// costs one request per visitor at most. Static markup keeps honest
// fallback values; we only overwrite on success.
(() => {
  const readout = document.querySelector('[data-hero-readout]');
  if (!readout) return;
  getStats().then(stats => {
    readout.querySelectorAll('[data-readout]').forEach(el => {
      const v = stats[el.dataset.readout];
      if (typeof v === 'number') {
        if (reduced) el.textContent = v.toLocaleString('en-US');
        else countUp(el, v, { duration: 900 });
      }
    });
    readout.dataset.state = 'live';
  }).catch(() => { /* static numbers stay */ });
})();

// 3) Database vignette — a real slice of the live feed -----------------
// Renders up to 14 actual open programs into a slow vertical ticker.
// The track is duplicated once for a seamless loop (CSS animation).
// On failure: skeleton rows, no cyan, no "live" chip — never fake it.
(() => {
  const host = document.querySelector('[data-vig="db"]');
  if (!host) return;
  const track = host.querySelector('[data-vdb-track]');
  if (!track) return;

  const skeleton = () => {
    host.dataset.state = 'offline';
    track.classList.add('vdb-skeleton');
    for (let i = 0; i < 8; i++) {
      const li = document.createElement('li');
      li.className = 'vdb-row';
      const bar = document.createElement('span');
      bar.className = 'vdb-bar';
      bar.style.width = (52 + ((i * 17) % 38)) + '%';
      const meta = document.createElement('span');
      meta.className = 'vdb-bar vdb-bar--meta';
      meta.style.width = (18 + ((i * 11) % 16)) + '%';
      li.append(bar, meta);
      track.append(li);
    }
  };

  getFundingField(14).then(rows => {
    if (!rows || !rows.length) { skeleton(); return; }
    const cap = (s) => String(s || '').replace(/^\w/, c => c.toUpperCase());
    const build = (row) => {
      const li = document.createElement('li');
      li.className = 'vdb-row';
      const dot = document.createElement('span');
      dot.className = 'vdb-dot';
      dot.setAttribute('aria-hidden', 'true');
      const title = document.createElement('span');
      title.className = 'vdb-title';
      title.textContent = row.title || 'Untitled program';
      const meta = document.createElement('span');
      meta.className = 'vdb-meta';
      meta.textContent = [row.country, cap(row.funding_type)].filter(Boolean).join(' · ');
      li.append(dot, title, meta);
      return li;
    };
    const frag = document.createDocumentFragment();
    rows.forEach(r => frag.append(build(r)));
    // Second pass duplicates the rows so the -50% translateY loop is seamless.
    rows.forEach(r => {
      const copy = build(r);
      copy.setAttribute('aria-hidden', 'true');
      frag.append(copy);
    });
    track.replaceChildren(frag);
    track.style.setProperty('--vdb-rows', String(rows.length));
    host.dataset.state = 'live';
  }).catch(skeleton);
})();

// 4) Dashboard vignette — real KPIs, drawn once on first view ----------
// Counts come from getStats(); bars and sparkline are unlabeled texture
// (they claim no values). The count-up runs once when the panel first
// scrolls into view — repeating it would look synthetic.
(() => {
  const host = document.querySelector('[data-vig="dash"]');
  if (!host) return;
  let fired = false;
  const fire = () => {
    if (fired) return;
    fired = true;
    getStats().then(stats => {
      host.querySelectorAll('[data-vdash]').forEach(el => {
        const v = stats[el.dataset.vdash];
        if (typeof v === 'number') {
          if (reduced) el.textContent = v.toLocaleString('en-US');
          else countUp(el, v, { duration: 1200 });
        }
      });
      host.dataset.state = 'live';
    }).catch(() => { /* static fallback numbers stay */ });
    host.classList.add('vdash-drawn');
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { fire(); io.disconnect(); } });
  }, { threshold: 0.3 });
  io.observe(host);
})();

// 5) API vignette — a request that types itself (planned module) -------
// Pure illustration of the planned surface: types the request line,
// reveals a schema-shaped response, holds, clears, repeats. No cyan,
// no "live" language — the chip in the markup says planned.
(() => {
  const host = document.querySelector('[data-vig="api"]');
  if (!host) return;
  const cmdEl = host.querySelector('[data-vapi-cmd]');
  const lines = [...host.querySelectorAll('.vapi-line')];
  if (!cmdEl) return;
  const CMD = 'GET /v1/programs?country=SA&status=open';

  if (reduced) {
    cmdEl.textContent = CMD;
    lines.forEach(l => l.classList.add('shown'));
    host.classList.add('vapi-done');
    return;
  }

  let timer = 0;
  const schedule = (fn, ms) => { timer = setTimeout(fn, ms); };

  const cycle = () => {
    cmdEl.textContent = '';
    lines.forEach(l => l.classList.remove('shown'));
    host.classList.remove('vapi-done');
    let i = 0;
    const type = () => {
      if (host.dataset.vigState !== 'running') { schedule(type, 600); return; }
      cmdEl.textContent = CMD.slice(0, ++i);
      if (i < CMD.length) schedule(type, 26 + Math.random() * 38);
      else schedule(respond, 420);
    };
    const respond = () => {
      lines.forEach((l, n) => setTimeout(() => l.classList.add('shown'), n * 130));
      schedule(() => {
        host.classList.add('vapi-done');
        schedule(cycle, 5200);
      }, lines.length * 130 + 300);
    };
    schedule(type, 700);
  };

  // Start the first cycle when visible; the running check above keeps the
  // typing from advancing while scrolled away.
  let started = false;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !started) { started = true; cycle(); io.disconnect(); }
    });
  }, { threshold: 0.3 });
  io.observe(host);
})();

// 6) Sector pulse — collapsed to the top rows, expandable ---------------
// The full 17-sector list is two screens tall. Keep the first eight,
// fold the rest behind an honest count. The button label fills in once
// live.js reports how many sectors actually rendered.
(() => {
  const figure = document.querySelector('.sector-figure[data-collapsible]');
  if (!figure) return;
  const list = figure.querySelector('[data-sector-list]');
  const btn = figure.querySelector('[data-sector-toggle]');
  if (!list || !btn) return;

  const sync = () => {
    const rows = list.children.length;
    const hidden = Math.max(0, rows - 8);
    if (hidden === 0) { btn.hidden = true; return; }
    btn.hidden = false;
    const expanded = figure.dataset.expanded === 'true';
    btn.textContent = expanded ? 'Show fewer sectors' : `Show all ${rows} sectors`;
    btn.setAttribute('aria-expanded', String(expanded));
  };

  btn.addEventListener('click', () => {
    figure.dataset.expanded = figure.dataset.expanded === 'true' ? 'false' : 'true';
    sync();
  });

  // enhance.js replaces the list children after its live fetch — watch for it.
  new MutationObserver(sync).observe(list, { childList: true });
  sync();
})();
