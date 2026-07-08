/* Midnight Space — site behavior
   One signature moment (De Herbouw wipe), whisper-level everything else.
   All motion honors prefers-reduced-motion.
   Resilience rule: if anything in here cannot run, fall back to the
   no-JS CSS path (remove the `js` class) so content is never hidden. */
(function () {
  'use strict';

  function bailToStatic() {
    document.documentElement.classList.remove('js');
    document.body && document.body.classList.add('static-herbouw');
  }

  /* ---------- Copy e-mail (independent of animation stack) ---------- */
  function initCopyButton() {
    var copyBtn = document.getElementById('copyMail');
    if (!copyBtn) return;
    var status = document.createElement('span');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    status.className = 'sr-only';
    copyBtn.insertAdjacentElement('afterend', status);
    var timer = null;
    function flash(ok) {
      status.textContent = ok ? 'E-mailadres gekopieerd' : 'Kopiëren mislukt';
      if (!ok) return;
      copyBtn.classList.add('copied');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () { copyBtn.classList.remove('copied'); }, 1400);
    }
    copyBtn.addEventListener('click', function () {
      var mail = copyBtn.getAttribute('data-mail');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(mail).then(
          function () { flash(true); },
          function () { flash(false); }
        );
      } else {
        var ta = document.createElement('textarea');
        ta.value = mail; document.body.appendChild(ta);
        ta.select();
        var ok = false;
        try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        document.body.removeChild(ta);
        flash(ok);
      }
    });
  }
  initCopyButton();

  /* ---------- Environment guards ---------- */
  if (!window.gsap || !window.ScrollTrigger || !window.SplitText || !window.Lenis) {
    bailToStatic();
    return;
  }
  if (!window.matchMedia || window.matchMedia('(prefers-reduced-motion)').media === 'not all') {
    bailToStatic();
    return;
  }

  try {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    ScrollTrigger.config({ ignoreMobileResize: true });

    var mm = gsap.matchMedia();
    var activeLenis = null;

    /* Header switches to dark glass while a midnight tile passes under it.
       Stateless: recomputed from geometry every scroll tick, so it can
       never drift. A class toggle, not motion — active for everyone. */
    var headerEl = document.getElementById('siteHeader');
    if (headerEl) {
      var midnightTiles = gsap.utils.toArray('.tile-midnight');
      var updateHeader = function () {
        var line = 52, dark = false;
        for (var i = 0; i < midnightTiles.length; i++) {
          var r = midnightTiles[i].getBoundingClientRect();
          if (r.top <= line && r.bottom >= line) { dark = true; break; }
        }
        headerEl.classList.toggle('header-dark', dark);
      };
      ScrollTrigger.create({ start: 0, end: 'max', onUpdate: updateHeader, onRefresh: updateHeader });
      updateHeader();
    }

    /* Anchor links — registered once; skip link keeps native behavior.
       Focus is moved to the target so keyboard order follows the jump. */
    document.querySelectorAll('a[href^="#"]:not(.skip-link)').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        if (history.pushState) history.pushState(null, '', a.getAttribute('href'));
        if (activeLenis) activeLenis.scrollTo(target, { offset: 0 });
        else target.scrollIntoView({ behavior: 'auto', block: 'start' });
      });
    });

    /* Wait for the hero faces, but never longer than 1.8s — a swapped-in
       fallback face beats a blank hero. SplitText autoSplit re-splits on swap. */
    function fontsSettled() {
      var fontsReady = (document.fonts && document.fonts.ready)
        ? document.fonts.ready
        : Promise.resolve();
      return Promise.race([
        fontsReady,
        new Promise(function (r) { setTimeout(r, 1800); })
      ]);
    }

    /* ---------- Reduced motion: static page ---------- */
    mm.add('(prefers-reduced-motion: reduce)', function () {
      document.documentElement.classList.add('hero-ready');
      document.body.classList.add('static-herbouw');
      gsap.set('.reveal', { clearProps: 'all', opacity: 1, y: 0 });
      return function () { document.body.classList.remove('static-herbouw'); };
    });

    /* ---------- Full motion ---------- */
    mm.add('(prefers-reduced-motion: no-preference)', function (ctx) {

      var reverted = false;
      var heroSplit = null, honestySplit = null;

      var lenis = new Lenis({ lerp: 0.11 });
      activeLenis = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      var tick = function (time) { lenis.raf(time * 1000); };
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      /* Hero entrance — created after fonts settle, registered in the
         context so a motion-preference switch cleans it up properly */
      fontsSettled().then(function () {
        if (reverted) return;
        ctx.add(function () {
          document.documentElement.classList.add('hero-ready');
          heroSplit = SplitText.create('.hero-head .hl', {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit: function (self) {
              return gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.05,
                ease: 'expo.out',
                stagger: 0.09,
                delay: 0.15
              });
            }
          });
          gsap.fromTo('.hero-item',
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.07, delay: 0.55 }
          );
        });
      });

      /* Signature moment: De Herbouw wipe */
      var stage = document.getElementById('stage');
      var mask = document.getElementById('afterMask');
      var content = document.getElementById('afterContent');
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          pin: true,
          start: 'top top',
          end: function () { return '+=' + Math.round(window.innerHeight * 1.6); },
          scrub: true,
          anticipatePin: 1,
          onToggle: function (self) {
            var wc = self.isActive ? 'transform' : 'auto';
            mask.style.willChange = wc;
            content.style.willChange = wc;
          }
        }
      });
      tl.fromTo(mask, { x: 0, xPercent: 101 }, { x: 0, xPercent: 0, ease: 'none', duration: 1 }, 0)
        .fromTo(content, { x: 0, xPercent: -101 }, { x: 0, xPercent: 0, ease: 'none', duration: 1 }, 0)
        .to('.meta-before', { opacity: 0.35, ease: 'none', duration: 0.3 }, 0.35)
        .to('.meta-after', { opacity: 1, ease: 'none', duration: 0.3 }, 0.45);

      /* Whisper reveals — grouped rows/promises batch with a stagger,
         standalone elements reveal individually. Tweens are created in
         onEnter so a later refresh can never revert them to hidden. */
      function showGroup(batch) {
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.08, overwrite: 'auto' });
      }
      gsap.set('.ledger .row, .promise', { y: 12 });
      ScrollTrigger.batch('.ledger .row', { start: 'top 88%', once: true, onEnter: showGroup });
      ScrollTrigger.batch('.promise', { start: 'top 88%', once: true, onEnter: showGroup });

      gsap.utils.toArray('.reveal').forEach(function (el) {
        if (el.matches('.ledger .row, .promise, .frame')) return;
        gsap.set(el, { y: 12 });
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          once: true,
          onEnter: function () {
            gsap.to(el, { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', overwrite: 'auto' });
          }
        });
      });

      /* Portfolio frames rise out of the page in 3D as they enter */
      gsap.utils.toArray('.frame').forEach(function (f) {
        if (f.closest('.hero')) return; // hero frame is choreographed on load
        gsap.fromTo(f,
          { rotationX: 10, y: 80, opacity: 0.3, transformPerspective: 1000, transformOrigin: 'center 80%' },
          {
            rotationX: 0, y: 0, opacity: 1, ease: 'none',
            scrollTrigger: { trigger: f, start: 'top 96%', end: 'top 42%', scrub: 0.6 }
          }
        );
      });

      /* Honesty statement — words light up as you scroll through them */
      var honesty = document.querySelector('#honesty p');
      if (honesty) {
        fontsSettled().then(function () {
          if (reverted) return;
          ctx.add(function () {
            var container = document.getElementById('honesty');
            honestySplit = SplitText.create(honesty, {
              type: 'words',
              wordsClass: 'wr-word',
              aria: 'auto',
              onSplit: function (self) {
                container.classList.add('wr-armed');
                return gsap.to(self.words, {
                  opacity: 1,
                  stagger: 0.06,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: container,
                    start: 'top 78%',
                    end: 'center 42%',
                    scrub: 0.4
                  }
                });
              }
            });
          });
        });
      }

      /* Magnetic primary CTA — fine pointers only */
      if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
        gsap.utils.toArray('.pill-magnet').forEach(function (btn) {
          var xTo = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3' });
          var yTo = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3' });
          btn.addEventListener('mousemove', function (e) {
            var r = btn.getBoundingClientRect();
            xTo((e.clientX - r.left - r.width / 2) * 0.25);
            yTo((e.clientY - r.top - r.height / 2) * 0.3);
          });
          btn.addEventListener('mouseleave', function () {
            gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.45)' });
          });
        });
      }

      return function () {
        reverted = true;
        if (heroSplit) { heroSplit.revert(); heroSplit = null; }
        if (honestySplit) { honestySplit.revert(); honestySplit = null; }
        var hc = document.getElementById('honesty');
        if (hc) hc.classList.remove('wr-armed');
        gsap.ticker.remove(tick);
        lenis.destroy();
        activeLenis = null;
      };
    });

    /* Recalculate positions after late layout shifts */
    window.addEventListener('load', function () { ScrollTrigger.refresh(); });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
  } catch (err) {
    bailToStatic();
  }
})();
