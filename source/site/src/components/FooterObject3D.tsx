import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { loadSplineViewer } from './ScrollObject3D';

/* Static Spline scene closing the page, directly above the footer.
   Lazy-mounts when the visitor approaches the bottom; degrades to an
   empty band on reduced motion or if the runtime fails to load. */

const SCENE = 'https://prod.spline.design/BxuuwVyb499aLxP6/scene.splinecode';

export function FooterObject3D() {
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
            // Transparent override so the band's own background shows.
            viewer.setAttribute('background', 'rgba(0,0,0,0)');
            Object.assign(viewer.style, {
              width: '100%',
              height: '100%',
              display: 'block',
              background: 'transparent',
            });
            host.appendChild(viewer);
            // Best-effort badge removal (no-op on closed shadow roots).
            window.setTimeout(() => {
              try {
                (viewer as HTMLElement & { shadowRoot?: ShadowRoot }).shadowRoot
                  ?.querySelector('#logo')
                  ?.remove();
              } catch {
                /* ignore */
              }
            }, 600);
            // Watchdog: if the runtime never initialises the scene (canvas
            // backing store stays at the 300×150 default — e.g. a scene
            // exported for a newer runtime than the published viewer),
            // collapse the band instead of showing an empty void.
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
        position: 'relative',
        zIndex: 3, // above the drifting companion, like all page content
        background: '#b8b8b8', // continues the terms band into the footer
        height: 'clamp(260px, 52vh, 560px)',
        overflow: 'hidden',
        touchAction: 'pan-y', // never trap mobile scrolling
      }}
    />
  );
}
