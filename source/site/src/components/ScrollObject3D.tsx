import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/* A real-time companion object that travels down the page between
   section waypoints as the visitor scrolls — reversible, damped,
   cursor-aware. The object itself is a Spline scene (a self-contained
   WebGL canvas), so instead of moving a mesh inside a shared Three.js
   scene we drive the DOM container that holds <spline-viewer>: the
   same waypoint maths now feed translate / scale / opacity on that
   element. Degrades to nothing on reduced motion or if the Spline
   runtime fails to load (the page is complete without it). */

const SPLINE_SCENE = 'https://prod.spline.design/aS95Ao7UpuJOJi6b/scene.splinecode';
// @1 lets unpkg resolve the latest 1.x build (no brittle pinned patch).
const VIEWER_SRC = 'https://unpkg.com/@splinetool/viewer@1/build/spline-viewer.js';

type Anchor = { docY: number; fx: number; fy: number; s: number };

const smooth = (t: number) => t * t * (3 - 2 * t);

/* Load the <spline-viewer> custom element once, on demand.
   Shared with FooterObject3D (the static scene at the page bottom). */
let viewerPromise: Promise<void> | null = null;
export function loadSplineViewer(): Promise<void> {
  if (window.customElements?.get('spline-viewer')) return Promise.resolve();
  if (viewerPromise) return viewerPromise;
  viewerPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement('script');
    s.type = 'module';
    s.src = VIEWER_SRC;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('spline-viewer failed to load'));
    document.head.appendChild(s);
  });
  return viewerPromise;
}

export function ScrollObject3D() {
  const hostRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const host = hostRef.current;
    if (!host) return;

    const isMobile = window.matchMedia('(max-width: 860px)').matches;

    /* ---------- The drifting box (holds the Spline canvas) ---------- */
    const box = document.createElement('div');
    box.setAttribute('aria-hidden', 'true');
    Object.assign(box.style, {
      position: 'absolute',
      left: '50%',
      // On mobile the object lives in the bottom band of the screen so it
      // never blocks the content the visitor is reading.
      top: isMobile ? '84%' : '50%',
      width: isMobile ? 'min(68vh, 116vw)' : 'min(93vh, 87vw)',
      height: isMobile ? 'min(68vh, 116vw)' : 'min(93vh, 87vw)',
      transform: 'translate(-50%, -50%)',
      transformOrigin: 'center center',
      opacity: '0',
      willChange: 'transform, opacity',
      pointerEvents: 'none',
    });
    host.appendChild(box);

    let viewerRequested = false;
    let failed = false;
    const mountViewer = () => {
      if (viewerRequested) return;
      viewerRequested = true;
      loadSplineViewer()
        .then(() => {
          const viewer = document.createElement('spline-viewer');
          viewer.setAttribute('url', SPLINE_SCENE);
          // Override the scene's baked (black) background with full
          // transparency so only the object itself shows on the page.
          viewer.setAttribute('background', 'rgba(0,0,0,0)');
          Object.assign(viewer.style, {
            width: '100%',
            height: '100%',
            background: 'transparent',
            pointerEvents: 'none',
          });
          box.appendChild(viewer);
          // Best-effort: drop the corner "Built with Spline" badge if the
          // shadow root is open (no-op on closed roots / newer builds).
          window.setTimeout(() => {
            try {
              (viewer as HTMLElement & { shadowRoot?: ShadowRoot }).shadowRoot
                ?.querySelector('#logo')
                ?.remove();
            } catch {
              /* ignore */
            }
          }, 600);
        })
        .catch(() => {
          failed = true;
          host.style.display = 'none';
        });
    };

    /* ---------- Waypoints down the page ---------- */
    let anchors: Anchor[] = [];
    let heroBottom = 0;
    let maxProbeY = 0; // probe value when fully scrolled to the bottom
    function buildAnchors() {
      const vh = window.innerHeight;
      const get = (id: string) => document.getElementById(id);
      const hero = get('main');
      heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 0;
      const statement = hero ? (hero.nextElementSibling as HTMLElement | null) : null;
      const offering = get('offering');
      const offeringWrap = offering ? (offering.parentElement as HTMLElement) : null;
      const kase = get('case');
      const rates = get('rates');
      const crew = get('crew');
      const connect = get('connect');
      const centerOf = (el: HTMLElement | null, frac = 0.5) =>
        el ? el.offsetTop + el.offsetHeight * frac : 0;
      const m = isMobile;
      const list: Anchor[] = [];
      if (statement) list.push({ docY: centerOf(statement), fx: m ? -0.24 : -0.36, fy: 0.02, s: m ? 0.5 : 0.72 });
      if (offeringWrap) {
        list.push({ docY: offeringWrap.offsetTop + vh * 0.5, fx: m ? 0.3 : 0.44, fy: -0.37, s: 0.3 });
        list.push({ docY: offeringWrap.offsetTop + offeringWrap.offsetHeight - vh * 0.5, fx: m ? 0.3 : 0.44, fy: -0.37, s: 0.3 });
      }
      if (kase) list.push({ docY: centerOf(kase), fx: m ? 0.26 : 0.37, fy: 0.02, s: m ? 0.45 : 0.62 });
      if (rates) list.push({ docY: centerOf(rates), fx: m ? -0.26 : -0.4, fy: -0.04, s: m ? 0.42 : 0.52 });
      if (crew) list.push({ docY: centerOf(crew), fx: m ? 0.26 : 0.4, fy: 0.0, s: m ? 0.45 : 0.56 });
      if (connect) list.push({ docY: centerOf(connect), fx: m ? 0 : -0.34, fy: 0.04, s: m ? 0.55 : 0.72 });
      // Continue past the contact section through the legal bands…
      const privacy = get('privacy');
      const terms = get('terms');
      if (privacy) list.push({ docY: centerOf(privacy), fx: m ? -0.18 : -0.3, fy: 0.03, s: m ? 0.5 : 0.6 });
      if (terms) list.push({ docY: centerOf(terms), fx: m ? 0.18 : 0.28, fy: 0, s: m ? 0.52 : 0.62 });
      // …and finish fully in view, centred, at the very bottom of the page.
      const docEnd = document.documentElement.scrollHeight - vh * 0.5;
      list.push({ docY: docEnd, fx: 0, fy: 0.02, s: m ? 0.78 : 0.9 });
      maxProbeY = docEnd;
      anchors = list.sort((a, b) => a.docY - b.docY);
    }

    /* Screen-space target: fx/fy are fractions of the viewport, mapped
       to pixel offsets from centre; s is the container scale. */
    function targetFor(probe: number) {
      if (!anchors.length) return { x: 0, y: 0, s: 0.5 };
      let a = anchors[0], b = anchors[0];
      for (let i = 0; i < anchors.length; i++) {
        if (anchors[i].docY <= probe) { a = anchors[i]; b = anchors[Math.min(i + 1, anchors.length - 1)]; }
      }
      if (probe < anchors[0].docY) { a = anchors[0]; b = anchors[0]; }
      const span = Math.max(1, b.docY - a.docY);
      const t = smooth(Math.min(1, Math.max(0, (probe - a.docY) / span)));
      const fx = a.fx + (b.fx - a.fx) * t;
      const fy = a.fy + (b.fy - a.fy) * t;
      const s = a.s + (b.s - a.s) * t;
      // Mobile: keep the object pinned to its bottom band — only drift
      // horizontally; vertical waypoint offsets are a desktop luxury.
      return { x: fx * window.innerWidth, y: (isMobile ? 0 : fy) * window.innerHeight, s };
    }

    /* ---------- Loop ---------- */
    let running = true;
    let raf = 0;
    let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
    let fade = 0;
    let posX = 0, posY = 0, scl = 0.5;
    let rot = 0; // scroll-driven spin (degrees), damped + reversible
    let last = performance.now();

    const onPointer = (e: PointerEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    function frame(now: number) {
      if (!running) return;
      raf = requestAnimationFrame(frame);
      if (failed) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = now / 1000;

      const probe = window.scrollY + window.innerHeight * 0.5;

      // Lazy-load the Spline runtime only once the visitor approaches the
      // hero's end (keeps the hero's LCP clean).
      if (!viewerRequested && probe > heroBottom - window.innerHeight * 0.75) mountViewer();

      const target = targetFor(probe);
      const k = 1 - Math.exp(-5 * dt);
      let fadeTarget = probe > heroBottom + window.innerHeight * 0.05 ? 1 : 0;
      // Fade back out over the last stretch of scroll, so the object has
      // fully dissolved by the time the visitor reaches the very bottom.
      if (maxProbeY > 0) {
        const endFade = Math.min(1, Math.max(0, (maxProbeY - probe) / (window.innerHeight * 0.6)));
        fadeTarget *= endFade;
      }
      fade += (fadeTarget - fade) * (1 - Math.exp(-4 * dt));

      posX += (target.x - posX) * k;
      posY += (target.y - posY) * k;
      scl += (target.s - scl) * k;

      // Spin with scroll: ~one full turn per ~3000px, damped so it eases
      // in/out and runs backwards when scrolling up.
      rot += (window.scrollY * 0.12 - rot) * k;

      curX += (mouseX - curX) * 0.04;
      curY += (mouseY - curY) * 0.04;

      const floatY = Math.sin(t * 0.6) * 6;
      const s = Math.max(0.001, scl * (0.55 + 0.45 * fade));

      // Clamp so the whole object always stays in view: never clipped by
      // the viewport edges and never hidden under the fixed navbar.
      const half = ((box.offsetWidth || 1) * s) / 2;
      const anchorX = window.innerWidth / 2;
      const anchorY = window.innerHeight * (isMobile ? 0.84 : 0.5);
      const clampTo = (v: number, lo: number, hi: number) =>
        lo > hi ? (lo + hi) / 2 : Math.min(hi, Math.max(lo, v));
      const px = clampTo(posX + curX * 18, 12 + half - anchorX, window.innerWidth - 12 - half - anchorX);
      const py = clampTo(posY + curY * 14 + floatY, 74 + half - anchorY, window.innerHeight - 12 - half - anchorY);

      box.style.transform = `translate(-50%, -50%) translate(${px.toFixed(1)}px, ${py.toFixed(1)}px) rotate(${rot.toFixed(2)}deg) scale(${s.toFixed(3)})`;
      box.style.opacity = Math.min(1, Math.max(0, fade)).toFixed(3);
    }

    const onVis = () => {
      running = !document.hidden;
      if (running) { last = performance.now(); raf = requestAnimationFrame(frame); }
      else cancelAnimationFrame(raf);
    };
    document.addEventListener('visibilitychange', onVis);

    const onResize = () => { buildAnchors(); };
    window.addEventListener('resize', onResize, { passive: true });

    /* Anchors depend on final layout (videos/images) */
    buildAnchors();
    const settle = window.setTimeout(buildAnchors, 1200);
    window.addEventListener('load', buildAnchors);

    raf = requestAnimationFrame(frame);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.clearTimeout(settle);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', buildAnchors);
      document.removeEventListener('visibilitychange', onVis);
      host.replaceChildren();
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={hostRef}
      aria-hidden
      style={{ position: 'fixed', inset: 0, zIndex: 2, pointerEvents: 'none' }}
    />
  );
}
