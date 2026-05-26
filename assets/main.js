// Midnight Space — shared client behaviour

// reveal-on-scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.r').forEach(el => io.observe(el));

// mobile menu — open / close + focus trap + Escape-to-close
const sheet = document.getElementById('mobileSheet');
const backdrop = document.getElementById('sheetBackdrop');
const openBtn = document.getElementById('navMobileBtn');
const closeBtn = document.getElementById('sheetClose');

let lastFocusBeforeSheet = null;
const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const closeSheet = () => {
  if (!sheet?.classList.contains('open')) return;
  sheet.classList.remove('open');
  backdrop?.classList.remove('open');
  document.body.style.overflow = '';
  // Return focus to whatever opened the sheet so keyboard users
  // don't end up at the top of the page.
  if (lastFocusBeforeSheet && typeof lastFocusBeforeSheet.focus === 'function') {
    lastFocusBeforeSheet.focus();
  }
};

const openSheet = () => {
  if (!sheet) return;
  lastFocusBeforeSheet = document.activeElement;
  sheet.classList.add('open');
  backdrop?.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Focus the close button so Escape / Tab have a sensible start.
  requestAnimationFrame(() => closeBtn?.focus());
};

openBtn?.addEventListener('click', openSheet);
closeBtn?.addEventListener('click', closeSheet);
backdrop?.addEventListener('click', closeSheet);

// Global key handlers — Escape closes, Tab is trapped.
document.addEventListener('keydown', (e) => {
  if (!sheet?.classList.contains('open')) return;
  if (e.key === 'Escape') {
    e.preventDefault();
    closeSheet();
    return;
  }
  if (e.key !== 'Tab') return;
  const items = sheet.querySelectorAll(FOCUSABLE);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

// signature tabs — swap the section's eyebrow / headline / body / CTA / image / caption.
// Each button carries: data-eyebrow, data-title (top line) + data-title-em (italic line),
// data-body, data-cta-label, data-cta-href, data-img, data-cap.
// Headline is rebuilt with safe DOM nodes (no innerHTML on untrusted-looking text).
document.querySelectorAll('.signature').forEach(section => {
  const group = section.querySelector('.signature-tabs');
  if (!group) return;
  // ARIA wiring — give the strip tablist semantics, and mark each button.
  group.setAttribute('role', 'tablist');
  const els = {
    eyebrow: section.querySelector('.eyebrow'),
    h2: section.querySelector('h2'),
    body: section.querySelector('h2 ~ p'),
    cta: section.querySelector('.btn'),
    img: section.querySelector('.sc-img'),
    cap: section.querySelector('.sc-label'),
  };
  const setTitle = (top, italic) => {
    if (!els.h2) return;
    els.h2.replaceChildren();
    els.h2.append(document.createTextNode(top));
    if (italic) {
      els.h2.append(document.createElement('br'));
      const em = document.createElement('em');
      em.textContent = italic;
      els.h2.append(em);
    }
  };
  const buttons = [...group.querySelectorAll('button')];
  buttons.forEach(b => {
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', b.classList.contains('active') ? 'true' : 'false');
  });
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        const is = b === btn;
        b.classList.toggle('active', is);
        b.setAttribute('aria-selected', is ? 'true' : 'false');
      });
      const d = btn.dataset;
      if (d.eyebrow && els.eyebrow) els.eyebrow.textContent = d.eyebrow;
      if (d.title) setTitle(d.title, d.titleEm || '');
      if (d.body && els.body) els.body.textContent = d.body;
      if (d.ctaLabel && els.cta) {
        const label = els.cta.querySelector('span') || els.cta;
        label.textContent = d.ctaLabel;
      }
      if (d.ctaHref && els.cta) els.cta.setAttribute('href', d.ctaHref);
      if (d.img && els.img) els.img.style.backgroundImage = `url('${d.img}')`;
      if (d.cap && els.cap) els.cap.textContent = d.cap;
    });
  });
});

// stats horizontal scroll arrows
document.querySelectorAll('[data-scroll-target]').forEach(group => {
  const target = document.querySelector(group.dataset.scrollTarget);
  if (!target) return;
  group.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.dir === 'next' ? 1 : -1;
      target.scrollBy({ left: dir * target.clientWidth * 0.6, behavior: 'smooth' });
    });
  });
});

// hero tabs — toggle active state AND swap matching [data-tab-pane] panes.
// Accepts either <a data-tab="..."> or <button data-tab="..."> children.
// Sets tablist / tab / tabpanel ARIA so screen-readers can navigate the strip.
document.querySelectorAll('.hero-tabs').forEach(group => {
  const hero = group.closest('.hero') || document;
  const panes = hero.querySelectorAll('[data-tab-pane]');
  group.setAttribute('role', 'tablist');
  const items = [...group.querySelectorAll('a[data-tab], button[data-tab]')];
  if (!items.length) return;

  // Assign tab + tabpanel IDs so aria-controls / aria-labelledby resolve.
  items.forEach((el, i) => {
    el.setAttribute('role', 'tab');
    if (!el.id) el.id = `heroTab-${i}-${Math.random().toString(36).slice(2, 7)}`;
    el.setAttribute('aria-selected', el.classList.contains('active') ? 'true' : 'false');
    el.setAttribute('tabindex', el.classList.contains('active') ? '0' : '-1');
    const target = [...panes].find(p => p.dataset.tabPane === el.dataset.tab);
    if (target) {
      if (!target.id) target.id = `heroPane-${i}-${Math.random().toString(36).slice(2, 7)}`;
      target.setAttribute('role', 'tabpanel');
      target.setAttribute('aria-labelledby', el.id);
      el.setAttribute('aria-controls', target.id);
    }
  });

  const activate = (el) => {
    items.forEach(x => {
      const is = x === el;
      x.classList.toggle('active', is);
      x.setAttribute('aria-selected', is ? 'true' : 'false');
      x.setAttribute('tabindex', is ? '0' : '-1');
    });
    panes.forEach(p => {
      const match = p.dataset.tabPane === el.dataset.tab;
      p.hidden = !match;
      p.setAttribute('aria-hidden', match ? 'false' : 'true');
    });
  };

  items.forEach(el => {
    el.addEventListener('click', (e) => {
      if (el.tagName === 'A') e.preventDefault();
      activate(el);
    });
    // Arrow-key navigation between tabs (WAI-ARIA pattern).
    el.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      const idx = items.indexOf(el);
      const next = e.key === 'ArrowRight'
        ? items[(idx + 1) % items.length]
        : items[(idx - 1 + items.length) % items.length];
      activate(next);
      next.focus();
    });
  });
});
