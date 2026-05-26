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

// mobile menu
const sheet = document.getElementById('mobileSheet');
const backdrop = document.getElementById('sheetBackdrop');
const openBtn = document.getElementById('navMobileBtn');
const closeBtn = document.getElementById('sheetClose');
const closeSheet = () => {
  sheet?.classList.remove('open');
  backdrop?.classList.remove('open');
  document.body.style.overflow = '';
};
openBtn?.addEventListener('click', () => {
  sheet?.classList.add('open');
  backdrop?.classList.add('open');
  document.body.style.overflow = 'hidden';
});
closeBtn?.addEventListener('click', closeSheet);
backdrop?.addEventListener('click', closeSheet);

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

// hero tabs — toggle active state AND swap matching [data-tab-pane] panes
document.querySelectorAll('.hero-tabs').forEach(group => {
  const hero = group.closest('.hero') || document;
  const panes = hero.querySelectorAll('[data-tab-pane]');
  group.setAttribute('role', 'tablist');
  const links = [...group.querySelectorAll('a')];
  links.forEach(a => {
    a.setAttribute('role', 'tab');
    a.setAttribute('aria-selected', a.classList.contains('active') ? 'true' : 'false');
  });
  links.forEach(a => {
    a.addEventListener('click', (e) => {
      if (!a.dataset.tab) return;
      e.preventDefault();
      const key = a.dataset.tab;
      links.forEach(x => {
        const is = x === a;
        x.classList.toggle('active', is);
        x.setAttribute('aria-selected', is ? 'true' : 'false');
      });
      panes.forEach(p => {
        const match = p.dataset.tabPane === key;
        p.hidden = !match;
        p.setAttribute('aria-hidden', match ? 'false' : 'true');
      });
    });
  });
});

