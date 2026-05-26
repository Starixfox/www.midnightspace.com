// Midnight Space — enhancement layer (loaded as a module so we can pull
// live data without bloating main.js). Three jobs:
//
//   1. Choreograph the hero on first paint (staggered entry).
//   2. When the live-stats section scrolls into view, fetch real numbers
//      from Supabase and count them up. Render the sectoral pulse list
//      below it with animated bars.
//   3. Subtle magnetic-cursor polish on primary CTAs.

import { getStats, getSectorBreakdown, countUp, formatVerified } from './live.js';

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

// 3) Magnetic CTA polish ----------------------------------------------
// Subtle: button drifts toward the cursor by ~18% of the offset inside a
// 90px halo. Reset on leave. No lib, no layout thrash.
document.querySelectorAll('.btn-primary, .nav-cta').forEach(btn => {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  btn.setAttribute('data-magnetic', '');
  let raf = 0;
  btn.addEventListener('pointermove', (e) => {
    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > 90) return;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      btn.style.transform = `translate(${(dx * 0.18).toFixed(2)}px, ${(dy * 0.18).toFixed(2)}px)`;
    });
  });
  btn.addEventListener('pointerleave', () => {
    cancelAnimationFrame(raf);
    btn.style.transform = '';
  });
});
