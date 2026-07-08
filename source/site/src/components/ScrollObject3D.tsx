import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';

/* A real-time companion object in the spirit of the hero video:
   a fractured dark wireframe sphere, torn open, with a glowing ember
   core. It travels down the page between section waypoints as the
   visitor scrolls — reversible, damped, cursor-aware.
   Original implementation; degrades to nothing on reduced motion or
   when WebGL is unavailable (the page is complete without it). */

type Anchor = { docY: number; fx: number; fy: number; s: number };

const smooth = (t: number) => t * t * (3 - 2 * t);

/* Compact 3D value noise (own implementation) — smooth trilinear
   interpolation over hashed lattice values, two octaves. Sampled from
   the ORIGINAL vertex position so duplicated line endpoints displace
   identically and the cage never tears. */
const NOISE_GLSL = [
  'float hash3(vec3 p) {',
  '  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));',
  '  p *= 17.0;',
  '  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));',
  '}',
  'float vnoise(vec3 p) {',
  '  vec3 i = floor(p);',
  '  vec3 f = fract(p);',
  '  vec3 u = f * f * (3.0 - 2.0 * f);',
  '  float a = hash3(i);',
  '  float b = hash3(i + vec3(1.0, 0.0, 0.0));',
  '  float c = hash3(i + vec3(0.0, 1.0, 0.0));',
  '  float d = hash3(i + vec3(1.0, 1.0, 0.0));',
  '  float e = hash3(i + vec3(0.0, 0.0, 1.0));',
  '  float f1 = hash3(i + vec3(1.0, 0.0, 1.0));',
  '  float g = hash3(i + vec3(0.0, 1.0, 1.0));',
  '  float h = hash3(i + vec3(1.0, 1.0, 1.0));',
  '  return mix(mix(mix(a, b, u.x), mix(c, d, u.x), u.y),',
  '             mix(mix(e, f1, u.x), mix(g, h, u.x), u.y), u.z) * 2.0 - 1.0;',
  '}',
].join('\n');

function livingLineMaterial(color: number, opacity: number, amp: number, freq: number, speed: number) {
  return new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
      uFade: { value: 0 },
      uColor: { value: new THREE.Color(color) },
      uOpacity: { value: opacity },
      uAmp: { value: amp },
      uFreq: { value: freq },
      uSpeed: { value: speed },
    },
    vertexShader: [
      'uniform float uTime; uniform float uAmp; uniform float uFreq; uniform float uSpeed;',
      NOISE_GLSL,
      'void main() {',
      '  vec3 dir = normalize(position);',
      '  vec3 q = position * uFreq + vec3(0.0, 0.0, uTime * uSpeed);',
      '  float n = vnoise(q) + 0.5 * vnoise(q * 2.1 + 7.3);',
      '  vec3 displaced = position + dir * (n * uAmp);',
      '  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);',
      '}',
    ].join('\n'),
    fragmentShader: [
      'uniform vec3 uColor; uniform float uOpacity; uniform float uFade;',
      'void main() { gl_FragColor = vec4(uColor, uOpacity * uFade); }',
    ].join('\n'),
  });
}


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

    // Inner strut cage — complete, fine wireframe
    const cageMat = livingLineMaterial(0x26262b, 0.85, 0.09, 1.7, 0.32);
    const cage = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.94, 1)),
      cageMat,
    );
    spinner.add(cage);

    // Outer shell — torn open: keep only part of the triangles
    const shellSource = new THREE.IcosahedronGeometry(1.12, 2).toNonIndexed();
    const pos = shellSource.getAttribute('position') as THREE.BufferAttribute;
    const keep: number[] = [];
    const debris: THREE.Vector3[][] = [];
    const tearDir = new THREE.Vector3(0.55, 0.62, 0.56).normalize();
    for (let i = 0; i < pos.count; i += 3) {
      const a = new THREE.Vector3().fromBufferAttribute(pos, i);
      const b = new THREE.Vector3().fromBufferAttribute(pos, i + 1);
      const c = new THREE.Vector3().fromBufferAttribute(pos, i + 2);
      const centroid = a.clone().add(b).add(c).divideScalar(3).normalize();
      const facing = centroid.dot(tearDir);
      const jitter = Math.sin(centroid.x * 12.9898 + centroid.y * 78.233 + centroid.z * 37.719) * 0.5 + 0.5;
      if (facing < 0.25 + jitter * 0.3) {
        keep.push(i, i + 1, i + 2);
      } else if (jitter > 0.55 && debris.length < 14) {
        debris.push([a, b, c]);
      }
    }
    const shellGeo = new THREE.BufferGeometry();
    const shellArr = new Float32Array(keep.length * 3);
    keep.forEach((idx, k) => {
      shellArr[k * 3] = pos.getX(idx);
      shellArr[k * 3 + 1] = pos.getY(idx);
      shellArr[k * 3 + 2] = pos.getZ(idx);
    });
    shellGeo.setAttribute('position', new THREE.BufferAttribute(shellArr, 3));
    shellGeo.computeVertexNormals();
    const shellMat = livingLineMaterial(0x1e1e23, 0.95, 0.12, 1.2, 0.24);
    const shellWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(shellGeo),
      shellMat,
    );
    spinner.add(shellWire);

    // Debris plates drifting just outside the tear
    const plateMat = new THREE.MeshBasicMaterial({ color: 0x232328, side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
    const plates: THREE.Mesh[] = [];
    debris.forEach((tri, i) => {
      const g = new THREE.BufferGeometry();
      const arr = new Float32Array(9);
      tri.forEach((v, k) => {
        const out = v.clone().multiplyScalar(1.18 + (i % 4) * 0.09);
        arr[k * 3] = out.x; arr[k * 3 + 1] = out.y; arr[k * 3 + 2] = out.z;
      });
      g.setAttribute('position', new THREE.BufferAttribute(arr, 3));
      g.computeVertexNormals();
      const m = new THREE.Mesh(g, plateMat);
      (m as any).seed = Math.random() * Math.PI * 2;
      plates.push(m);
      spinner.add(m);
    });

    // Ember core — warm particles clustered at the centre
    const EMBERS = isMobile ? 220 : 420;
    const ePos = new Float32Array(EMBERS * 3);
    const eSeed = new Float32Array(EMBERS);
    for (let i = 0; i < EMBERS; i++) {
      const r = Math.pow(Math.random(), 1.8) * 0.62;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      ePos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      ePos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
      ePos[i * 3 + 2] = r * Math.cos(ph);
      eSeed[i] = Math.random();
    }
    const emberGeo = new THREE.BufferGeometry();
    emberGeo.setAttribute('position', new THREE.BufferAttribute(ePos, 3));
    emberGeo.setAttribute('aSeed', new THREE.BufferAttribute(eSeed, 1));
    const emberMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uFade: { value: 0 }, uPixelRatio: { value: DPR } },
      vertexShader: [
        'attribute float aSeed;',
        'uniform float uTime; uniform float uPixelRatio;',
        'varying float vA; varying float vHot;',
        'void main() {',
        '  vec3 p = position;',
        '  p += normalize(position + 0.0001) * sin(uTime * (0.5 + aSeed) + aSeed * 20.0) * 0.05;',
        '  p.y += sin(uTime * 0.7 + aSeed * 6.28) * 0.04;',
        '  vec4 mv = modelViewMatrix * vec4(p, 1.0);',
        '  gl_Position = projectionMatrix * mv;',
        '  float tw = 0.55 + 0.45 * sin(uTime * (1.2 + aSeed * 2.0) + aSeed * 40.0);',
        '  vA = tw * (0.3 + aSeed * 0.7);',
        '  vHot = aSeed;',
        '  gl_PointSize = (0.9 + aSeed * 2.4) * uPixelRatio * (30.0 / -mv.z);',
        '}',
      ].join('\n'),
      fragmentShader: [
        'varying float vA; varying float vHot;',
        'uniform float uFade;',
        'void main() {',
        '  float d = length(gl_PointCoord - 0.5);',
        '  if (d > 0.5) discard;',
        '  vec3 amber = vec3(1.0, 0.62, 0.22);',
        '  vec3 gold  = vec3(1.0, 0.85, 0.55);',
        '  vec3 col = mix(amber, gold, step(0.6, vHot));',
        '  gl_FragColor = vec4(col, smoothstep(0.5, 0.0, d) * vA * uFade);',
        '}',
      ].join('\n'),
    });
    spinner.add(new THREE.Points(emberGeo, emberMat));

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
    glow.scale.setScalar(1.5);
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

      spinner.rotation.y = t * 0.16 + window.scrollY * 0.0004 + curX * 0.08;
      spinner.rotation.x = Math.sin(t * 0.22) * 0.12 + curY * 0.06;
      spinner.position.y = Math.sin(t * 0.6) * 0.05;
      plates.forEach((m, i) => {
        const seed = (m as any).seed as number;
        m.position.setScalar(0);
        m.position.y = Math.sin(t * 0.5 + seed) * 0.03;
        m.rotation.z = Math.sin(t * 0.3 + seed) * 0.06 * ((i % 2) ? 1 : -1);
      });
      cageMat.uniforms.uTime.value = t;
      cageMat.uniforms.uFade.value = fade;
      shellMat.uniforms.uTime.value = t * 0.9 + 3.1;
      shellMat.uniforms.uFade.value = fade;
      plateMat.opacity = 0.9 * fade;
      emberMat.uniforms.uTime.value = t;
      emberMat.uniforms.uFade.value = fade;
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
