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

// signature tabs (visual only — content stays)
document.querySelectorAll('.signature-tabs').forEach(group => {
  group.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
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
  group.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', (e) => {
      if (!a.dataset.tab) return;
      e.preventDefault();
      const key = a.dataset.tab;
      group.querySelectorAll('a').forEach(x => x.classList.toggle('active', x === a));
      panes.forEach(p => {
        const match = p.dataset.tabPane === key;
        p.hidden = !match;
        p.setAttribute('aria-hidden', match ? 'false' : 'true');
      });
    });
  });
});

