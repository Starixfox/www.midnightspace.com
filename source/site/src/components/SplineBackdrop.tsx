import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { loadSplineViewer } from './ScrollObject3D';

/* Full-bleed Spline scene used as a section BACKGROUND (currently the
   Connect section closing the page). Sits at z1 inside the section so
   all content (z3) — and even the drifting companion (z2) — stays on
   top. Lazy-mounts near the viewport; a watchdog hides it again if the
   scene never initialises (e.g. a broken/over-new export), leaving the
   section's own background in place. Decorative only: pointer-events
   none so forms and links above stay fully usable. */

const SCENE = 'https://prod.spline.design/BxuuwVyb499aLxP6/scene.splinecode';

export function SplineBackdrop() {
  const hostRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const host = hostRef.current;
    if (!host) return;

    let mounted = false;
    let watchdog = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (mounted || !entries.some((e) => e.isIntersecting)) return;
        mounted = true;
        io.disconnect();
        loadSplineViewer()
          .then(() => {
            const viewer = document.createElement('spline-viewer');
            viewer.setAttribute('url', SCENE);
            viewer.setAttribute('background', 'rgba(0,0,0,0)');
            Object.assign(viewer.style, {
              width: '100%',
              height: '100%',
              display: 'block',
              background: 'transparent',
              pointerEvents: 'none',
            });
            host.appendChild(viewer);
            window.setTimeout(() => {
              try {
                (viewer as HTMLElement & { shadowRoot?: ShadowRoot }).shadowRoot
                  ?.querySelector('#logo')
                  ?.remove();
              } catch {
                /* ignore */
              }
            }, 600);
            // If the runtime never initialises the scene (canvas stays at
            // its 300×150 default backing store), hide the backdrop again.
            watchdog = window.setTimeout(() => {
              const canvas =
                (viewer as HTMLElement & { shadowRoot?: ShadowRoot }).shadowRoot?.querySelector('canvas') ??
                viewer.querySelector('canvas');
              const ok =
                canvas instanceof HTMLCanvasElement &&
                !(canvas.width === 300 && canvas.height === 150);
              if (!ok) host.style.display = 'none';
            }, 10000);
          })
          .catch(() => {
            host.style.display = 'none';
          });
      },
      { rootMargin: '600px 0px' },
    );
    io.observe(host);

    return () => {
      io.disconnect();
      window.clearTimeout(watchdog);
      host.replaceChildren();
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={hostRef}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1, // below the section's z3 content and the z2 companion
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
