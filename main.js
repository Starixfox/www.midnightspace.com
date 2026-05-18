/* ============================================================
   MIDNIGHT SPACE — main.js
   Spline 3D backdrop · cinematic interactions · premium polish
   ============================================================ */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var coarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  /* ── 1. Scroll progress bar ─────────────────────────── */
  (function scrollProgress() {
    var bar = document.createElement('div');
    bar.className = 'scroll-progress';
    var fill = document.createElement('div');
    fill.className = 'scroll-progress-fill';
    bar.appendChild(fill);
    document.body.appendChild(bar);

    function update() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      fill.style.width = pct + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  })();

  /* ── 2. Custom cursor ──────────────────────────────── */
  if (!coarsePointer) {
    var dot = document.createElement('div');
    var ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    var mx = window.innerWidth / 2, my = window.innerHeight / 2;
    var rx = mx, ry = my;

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = 'translate(' + (mx - 3) + 'px, ' + (my - 3) + 'px)';
    });

    function ringLoop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = 'translate(' + (rx - 18) + 'px, ' + (ry - 18) + 'px)';
      requestAnimationFrame(ringLoop);
    }
    ringLoop();

    document.addEventListener('mousedown', function () { ring.classList.add('click'); });
    document.addEventListener('mouseup',   function () { ring.classList.remove('click'); });

    var hoverSel = 'a, button, .card, .info-card, .sector-tile, .dashboard-row, input, textarea, select, label';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest && e.target.closest(hoverSel)) ring.classList.add('hover');
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest && e.target.closest(hoverSel)) ring.classList.remove('hover');
    });
  }

  /* ── 3. Navbar scroll effect ─────────────────────────── */
  var siteNav = document.querySelector('.site-nav');
  if (siteNav) {
    var navTick = false;
    window.addEventListener('scroll', function () {
      if (!navTick) {
        requestAnimationFrame(function () {
          siteNav.classList.toggle('scrolled', window.scrollY > 10);
          navTick = false;
        });
        navTick = true;
      }
    }, { passive: true });
  }

  /* ── 4. Active nav highlight ─────────────────────────── */
  (function highlightNav() {
    var page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (a) {
      var href = (a.getAttribute('href') || '').toLowerCase();
      var isHome  = (page === '' || page === 'index.html') && (href === 'index.html' || href === './');
      var isMatch = href === page;
      if (isHome || isMatch) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }
    });
  })();

  /* ── 5. Mobile menu ──────────────────────────────────── */
  var hamburger  = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('open', !isOpen);
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
    document.addEventListener('click', function (e) {
      if (mobileMenu.classList.contains('open') &&
          !mobileMenu.contains(e.target) &&
          !hamburger.contains(e.target)) {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── 6. Smooth anchor scroll ─────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id === '#' || !id) return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── 7. IntersectionObserver reveal ──────────────────── */
  var REVEAL_SEL = '.fade-in, .fade-in-left, .fade-in-right, .reveal';

  function runReveal() {
    var elements = document.querySelectorAll(REVEAL_SEL);
    if (!elements.length) return;
    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    elements.forEach(function (el) { observer.observe(el); });
  }

  /* ── 8. Number counter ───────────────────────────────── */
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    if (isNaN(target)) return;
    var duration = parseInt(el.getAttribute('data-duration') || '1800', 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var format = el.getAttribute('data-format') === 'comma';
    var start = performance.now();

    function step(now) {
      var t = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      var value = target * eased;
      var display = format ? Math.round(value).toLocaleString('en-US') : Math.round(value).toString();
      el.textContent = prefix + display + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = prefix + (format ? target.toLocaleString('en-US') : target) + suffix;
    }
    requestAnimationFrame(step);
  }

  function runCounters() {
    var counters = document.querySelectorAll('.counter[data-target]');
    if (!counters.length) return;
    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCounter);
      return;
    }
    var seen = new WeakSet();
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen.has(entry.target)) {
          seen.add(entry.target);
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { obs.observe(c); });
  }

  /* ── 9. Card tilt (subtle 3D) ────────────────────────── */
  function bindTilt() {
    if (coarsePointer || reducedMotion) return;
    var targets = document.querySelectorAll('.card, .info-card, .hero-card, .dashboard-card');
    targets.forEach(function (el) {
      var rx = 0, ry = 0, tx = 0, ty = 0;
      var rect = null;
      var raf = null;

      function onMove(e) {
        if (!rect) rect = el.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var y = (e.clientY - rect.top)  / rect.height;
        ty = (x - 0.5) * 6;
        tx = -(y - 0.5) * 6;
        if (!raf) raf = requestAnimationFrame(apply);
      }
      function apply() {
        rx += (tx - rx) * 0.15;
        ry += (ty - ry) * 0.15;
        el.style.transform = 'perspective(900px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateY(-4px)';
        if (Math.abs(tx - rx) > 0.01 || Math.abs(ty - ry) > 0.01) {
          raf = requestAnimationFrame(apply);
        } else {
          raf = null;
        }
      }
      function onLeave() {
        tx = 0; ty = 0;
        if (!raf) raf = requestAnimationFrame(apply);
        setTimeout(function () { rect = null; }, 100);
      }
      function onEnter() { rect = el.getBoundingClientRect(); }

      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
    });
  }

  /* ── 10. Magnetic buttons ────────────────────────────── */
  function bindMagnetic() {
    if (coarsePointer || reducedMotion) return;
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(function (btn) {
      var rect = null;
      btn.addEventListener('mouseenter', function () { rect = btn.getBoundingClientRect(); });
      btn.addEventListener('mousemove', function (e) {
        if (!rect) rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top  - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.18) + 'px, ' + (y * 0.18 - 2) + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
        rect = null;
      });
    });
  }

  /* ── 11. Sector-tile cursor spotlight ────────────────── */
  function bindSectorSpotlight() {
    document.querySelectorAll('.sector-tile').forEach(function (tile) {
      tile.addEventListener('mousemove', function (e) {
        var r = tile.getBoundingClientRect();
        tile.style.setProperty('--mx', ((e.clientX - r.left) / r.width)  * 100 + '%');
        tile.style.setProperty('--my', ((e.clientY - r.top)  / r.height) * 100 + '%');
      });
    });
  }

  /* ── 12. Hero H1 line-split — wrap each .line's children
          in a <span> using safe DOM ops (no innerHTML) ──── */
  function prepHeroH1() {
    var h1 = document.querySelector('.hero-h1');
    if (!h1) return;
    Array.prototype.forEach.call(h1.querySelectorAll('.line'), function (line) {
      if (line.querySelector(':scope > span')) return;
      var wrap = document.createElement('span');
      while (line.firstChild) wrap.appendChild(line.firstChild);
      line.appendChild(wrap);
    });
  }

  /* ── 13. Spline scene scroll-fade ─────────────────────
     <spline-viewer> owns the 3D rendering. We just dim
     and slightly zoom it as the user scrolls past the
     hero so on-page content stays readable.              */
  function bindSplineScroll() {
    var sv = document.getElementById('scene-spline');
    if (!sv) return;
    var heroEl = document.querySelector('.hero-3d, .page-hero');
    if (!heroEl) return;

    var ticking = false;
    function update() {
      var h = heroEl.offsetHeight || window.innerHeight;
      var p = Math.min(window.scrollY / (h * 1.2), 1);
      sv.style.opacity = String(1 - p * 0.55);
      sv.style.transform = 'scale(' + (1 + p * 0.06) + ')';
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ── 14. Hide Spline watermark logo once loaded ──────── */
  function killSplineLogo() {
    var sv = document.getElementById('scene-spline');
    if (!sv) return;
    function tryRemove() {
      try {
        var sr = sv.shadowRoot;
        if (sr) {
          var logo = sr.querySelector('#logo, a[href*="spline"], .spline-logo');
          if (logo && logo.parentNode) logo.parentNode.removeChild(logo);
        }
      } catch (e) {}
    }
    /* run a few times in case the shadow DOM populates late */
    tryRemove();
    setTimeout(tryRemove, 600);
    setTimeout(tryRemove, 1800);
    setTimeout(tryRemove, 4000);
  }

  /* ── Init ────────────────────────────────────────────── */
  function init() {
    prepHeroH1();
    runReveal();
    runCounters();
    bindTilt();
    bindMagnetic();
    bindSectorSpotlight();
    bindSplineScroll();
    killSplineLogo();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ── Contact form Formspree success ──────────────────── */
  if (/[?&]submitted=1/.test(window.location.search)) {
    document.addEventListener('DOMContentLoaded', function () {
      var formSuccess = document.getElementById('form-success');
      var cf = document.getElementById('contact-form');
      if (formSuccess) {
        formSuccess.classList.add('visible');
        if (cf) cf.style.display = 'none';
        try { formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) {}
      }
    });
  }

})();
