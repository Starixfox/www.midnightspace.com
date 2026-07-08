import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';

/* A real-time companion object in the spirit of the hero video:
   a single clean wireframe icosahedron with a warm glowing core.
   It travels down the page between section waypoints as the
   visitor scrolls — reversible, damped, cursor-aware.
   Original implementation; degrades to nothing on reduced motion or
   when WebGL is unavailable (the page is complete without it). */

type Anchor = { docY: number; fx: number; fy: number; s: number };

const smooth = (t: number) => t * t * (3 - 2 * t);

export function ScrollObject3D() {
  const hostRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
    } catch {
      return;
    }
    if (!renderer.getContext()) return;

    const isMobile = window.matchMedia('(max-width: 860px)').matches;
    const DPR = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
    renderer.setPixelRatio(DPR);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearAlpha(0);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 60);
    camera.position.z = 9;

    /* ---------- The object ---------- */
    const group = new THREE.Group();   // waypoints drive this
    const spinner = new THREE.Group(); // idle motion drives this
    group.add(spinner);
    scene.add(group);

    // One clean wireframe icosahedron
    const wireMat = new THREE.LineBasicMaterial({ color: 0x2a2a30, transparent: true, opacity: 0 });
    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.05, 1)),
      wireMat,
    );
    spinner.add(wire);

    // Core glow sprite (radial gradient, generated — no external asset)
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = glowCanvas.height = 128;
    const gctx = glowCanvas.getContext('2d')!;
    const grad = gctx.createRadialGradient(64, 64, 4, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 190, 110, 0.9)');
    grad.addColorStop(0.35, 'rgba(255, 140, 50, 0.45)');
    grad.addColorStop(1, 'rgba(255, 120, 40, 0)');
    gctx.fillStyle = grad;
    gctx.fillRect(0, 0, 128, 128);
    const glowTex = new THREE.CanvasTexture(glowCanvas);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.scale.setScalar(1.4);
    spinner.add(glow);

    /* ---------- Waypoints down the page ---------- */
    function worldSize() {
      const h = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * camera.position.z;
      return { w: h * camera.aspect, h };
    }

    let anchors: Anchor[] = [];
    let heroBottom = 0;
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
      anchors = list.sort((a, b) => a.docY - b.docY);
    }

    function targetFor(probe: number) {
      if (!anchors.length) return { x: 0, y: 0, s: 1 };
      const ws = worldSize();
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
      return { x: fx * ws.w, y: fy * ws.h, s };
    }

    /* ---------- Loop ---------- */
    let running = true;
    let raf = 0;
    let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
    let fade = 0;
    let last = performance.now();

    const onPointer = (e: PointerEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    function frame(now: number) {
      if (!running) return;
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = now / 1000;

      const probe = window.scrollY + window.innerHeight * 0.5;
      const target = targetFor(probe);
      const k = 1 - Math.exp(-5 * dt);
      const fadeTarget = probe > heroBottom + window.innerHeight * 0.05 ? 1 : 0;
      fade += (fadeTarget - fade) * (1 - Math.exp(-4 * dt));
      group.position.x += (target.x - group.position.x) * k;
      group.position.y += (target.y - group.position.y) * k;
      const s = group.scale.x + (target.s - group.scale.x) * k;
      group.scale.setScalar(Math.max(0.001, s * (0.55 + 0.45 * fade)));

      curX += (mouseX - curX) * 0.04;
      curY += (mouseY - curY) * 0.04;

      spinner.rotation.y = t * 0.18 + window.scrollY * 0.0004 + curX * 0.08;
      spinner.rotation.x = Math.sin(t * 0.22) * 0.12 + curY * 0.06;
      spinner.position.y = Math.sin(t * 0.6) * 0.05;
      wireMat.opacity = 0.9 * fade;
      glow.material.opacity = (0.75 + Math.sin(t * 1.4) * 0.15) * fade;

      if (fade > 0.01 || fadeTarget === 1) renderer.render(scene, camera);
      else renderer.clear();
    }

    const onVis = () => {
      running = !document.hidden;
      if (running) { last = performance.now(); raf = requestAnimationFrame(frame); }
      else cancelAnimationFrame(raf);
    };
    document.addEventListener('visibilitychange', onVis);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      buildAnchors();
    };
    window.addEventListener('resize', onResize, { passive: true });

    renderer.domElement.addEventListener('webglcontextlost', () => {
      running = false;
      cancelAnimationFrame(raf);
      host.style.display = 'none';
    });

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
      renderer.dispose();
      host.innerHTML = '';
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={hostRef}
      aria-hidden
      style={{ position: 'fixed', inset: 0, zIndex: 5, pointerEvents: 'none' }}
    />
  );
}
