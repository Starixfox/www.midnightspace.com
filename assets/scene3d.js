/* Midnight Space — persistent 3D scene
   One fixed transparent canvas above the page (pointer-events: none).
   A ringed planet travels through every section on a single scrubbed
   timeline; a starfield lives around the hero and returns at contact.
   Fallback ladder: no WebGL / reduced motion / no GSAP -> no canvas,
   the page is complete without it. */
import * as THREE from './vendor/three.module.min.js';

(function () {
  'use strict';

  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.gsap || !window.ScrollTrigger) return;

  var stage = document.getElementById('gl-stage');
  if (!stage) return;

  var isMobile = matchMedia('(max-width: 700px)').matches;

  try {
    var renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' });
  } catch (e) { return; }
  if (!renderer.getContext()) return;

  var DPR = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
  renderer.setPixelRatio(DPR);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearAlpha(0);
  stage.appendChild(renderer.domElement);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 80);
  camera.position.z = 10;

  /* World size at the object plane (z = 0, depth 10) — for fraction-based waypoints */
  function viewSize() {
    var h = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * camera.position.z;
    return { w: h * camera.aspect, h: h };
  }

  /* ---------- Starfield (hero + finale) ---------- */
  var COUNT = isMobile ? 2200 : 6500;
  var pos = new Float32Array(COUNT * 3);
  var seed = new Float32Array(COUNT);
  for (var i = 0; i < COUNT; i++) {
    var r = 8 + Math.random() * 24;
    var theta = Math.random() * Math.PI * 2;
    var phi = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
    pos[i * 3 + 2] = r * Math.cos(phi) - 10;
    seed[i] = Math.random();
  }
  var starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  starGeo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  var starMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTime: { value: 0 }, uFade: { value: 1 }, uPixelRatio: { value: DPR } },
    vertexShader: [
      'attribute float aSeed;',
      'uniform float uTime; uniform float uPixelRatio;',
      'varying float vA;',
      'void main() {',
      '  vec3 p = position;',
      '  p.x += sin(uTime * 0.05 + aSeed * 6.2831) * 0.35;',
      '  p.y += cos(uTime * 0.04 + aSeed * 12.566) * 0.25;',
      '  vec4 mv = modelViewMatrix * vec4(p, 1.0);',
      '  gl_Position = projectionMatrix * mv;',
      '  float tw = 0.65 + 0.35 * sin(uTime * (0.6 + aSeed) + aSeed * 40.0);',
      '  vA = tw * (0.25 + aSeed * 0.75);',
      '  gl_PointSize = (0.7 + aSeed * 1.9) * uPixelRatio * (16.0 / -mv.z);',
      '}'
    ].join('\n'),
    fragmentShader: [
      'uniform float uFade;',
      'varying float vA;',
      'void main() {',
      '  float d = length(gl_PointCoord - 0.5);',
      '  if (d > 0.5) discard;',
      '  gl_FragColor = vec4(vec3(0.75, 0.92, 0.95), smoothstep(0.5, 0.0, d) * vA * uFade);',
      '}'
    ].join('\n')
  });
  scene.add(new THREE.Points(starGeo, starMat));

  /* ---------- The planet — fresnel body, ring, moon ---------- */
  var fresnelMat = new THREE.ShaderMaterial({
    uniforms: {
      uBase: { value: new THREE.Color('#141f38') },
      uRim: { value: new THREE.Color('#7cd8e0') },
      uPow: { value: 2.4 },
      uBias: { value: 0.06 },
      uIntensity: { value: 1.35 },
      uLightDir: { value: new THREE.Vector3(0.6, 0.7, 0.5).normalize() }
    },
    vertexShader: [
      'varying vec3 vN; varying vec3 vV;',
      'void main() {',
      '  vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;',
      '  vV = normalize(cameraPosition - wp);',
      '  vN = normalize((modelMatrix * vec4(normal, 0.0)).xyz);',
      '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
      '}'
    ].join('\n'),
    fragmentShader: [
      'uniform vec3 uBase; uniform vec3 uRim;',
      'uniform float uPow; uniform float uBias; uniform float uIntensity;',
      'uniform vec3 uLightDir;',
      'varying vec3 vN; varying vec3 vV;',
      'void main() {',
      '  float ndv = clamp(dot(vN, vV), 0.0, 1.0);',
      '  float f = uBias + (1.0 - uBias) * pow(1.0 - ndv, uPow);',
      '  float lit = 0.35 + 0.65 * clamp(dot(vN, uLightDir), 0.0, 1.0);',
      '  vec3 col = mix(uBase * lit, uRim * uIntensity, f);',
      '  gl_FragColor = vec4(col, 1.0);',
      '}'
    ].join('\n')
  });

  var planet = new THREE.Group();   // waypoints drive this
  var spinner = new THREE.Group();  // idle motion drives this — they never fight
  planet.add(spinner);

  var body = new THREE.Mesh(new THREE.SphereGeometry(1, isMobile ? 40 : 64, isMobile ? 40 : 64), fresnelMat);
  spinner.add(body);

  var ringMat = new THREE.MeshBasicMaterial({
    color: 0x9fd8de, transparent: true, opacity: 0.34, side: THREE.DoubleSide, depthWrite: false
  });
  var ring = new THREE.Mesh(new THREE.RingGeometry(1.45, 2.15, isMobile ? 80 : 128), ringMat);
  ring.rotation.x = Math.PI / 2.15;
  ring.rotation.y = 0.22;
  spinner.add(ring);

  var innerRing = new THREE.Mesh(new THREE.RingGeometry(1.32, 1.38, isMobile ? 80 : 128),
    new THREE.MeshBasicMaterial({ color: 0x7cd8e0, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false }));
  innerRing.rotation.copy(ring.rotation);
  spinner.add(innerRing);

  var moon = new THREE.Mesh(new THREE.SphereGeometry(0.14, 24, 24), fresnelMat.clone());
  moon.material.uniforms.uBase.value = new THREE.Color('#26324d');
  spinner.add(moon);

  scene.add(planet);

  /* ---------- Waypoints: fractions of the view at z=0, per section ---------- */
  /* Midnight tiles get the starring planet; light tiles get a small
     satellite parked in the gutter, clear of the content column. */
  var SECTIONS = [
    { sel: '.hero',            fx: isMobile ? 0 : 0.41, fy: isMobile ? 0.32 : 0.28, s: isMobile ? 0.9 : 1.3, ry: 0 },
    { sel: '#werkwijze',       fx: isMobile ? -0.40 : -0.56, fy: -0.06, s: isMobile ? 0.32 : 0.36, ry: 2.2 },
    { sel: '#herbouw',         fx: isMobile ? 0.34 : 0.38, fy: 0.30, s: 0.45, ry: 4.2 },
    { sel: '#werk',            fx: isMobile ? -0.55 : -0.62, fy: -0.38, s: 0.38, ry: 5.6 },
    { sel: '.tile-mist.work-tile', fx: isMobile ? 0.55 : 0.62, fy: -0.34, s: 0.4, ry: 7.2 },
    { sel: '#beloftes',        fx: isMobile ? 0.34 : 0.44, fy: -0.1, s: isMobile ? 0.45 : 0.6, ry: 8.8 },
    { sel: '#contact',         fx: isMobile ? 0 : -0.30, fy: isMobile ? 0.32 : 0.26, s: isMobile ? 0.7 : 0.95, ry: 10.5 }
  ];

  function wp(i, axis) {
    var v = viewSize(), s = SECTIONS[i];
    if (axis === 'x') return s.fx * v.w;
    return s.fy * v.h;
  }

  /* Initial state = hero waypoint */
  planet.position.set(wp(0, 'x'), wp(0, 'y'), 0);
  planet.scale.setScalar(SECTIONS[0].s);

  /* ---------- Master journey timeline — scrubbed over the whole page ---------- */
  function buildJourney() {
    var doc = document.documentElement;
    var total = doc.scrollHeight - window.innerHeight;
    if (total <= 0) return;

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    for (var i = 1; i < SECTIONS.length; i++) {
      (function (i) {
        var el = document.querySelector(SECTIONS[i].sel);
        if (!el) return;
        var at = Math.max(0.001, (el.offsetTop - window.innerHeight * 0.7) / total);
        var dur = Math.min(0.22, Math.max(0.08, el.offsetHeight / total * 0.8));
        tl.to(planet.position, {
          x: function () { return wp(i, 'x'); },
          y: function () { return wp(i, 'y'); },
          ease: 'power1.inOut', duration: dur
        }, at)
        .to(planet.scale, {
          x: SECTIONS[i].s, y: SECTIONS[i].s, z: SECTIONS[i].s,
          ease: 'power1.inOut', duration: dur
        }, at)
        .to(planet.rotation, { y: SECTIONS[i].ry, ease: 'none', duration: dur }, at);
      })(i);
    }

    /* Stars: fade out after the hero, return for the contact finale */
    var werkwijze = document.querySelector('#werkwijze');
    var contact = document.querySelector('#contact');
    if (werkwijze) {
      tl.to(starMat.uniforms.uFade, { value: 0, ease: 'none', duration: 0.1 },
        Math.max(0.001, (werkwijze.offsetTop - window.innerHeight) / total));
    }
    if (contact) {
      tl.to(starMat.uniforms.uFade, { value: 1, ease: 'none', duration: 0.12 },
        Math.max(0.001, (contact.offsetTop - window.innerHeight * 0.8) / total));
    }

    /* Rim reads brighter on the dark tiles, calmer on light ones */
    if (werkwijze) {
      tl.to(fresnelMat.uniforms.uIntensity, { value: 1.0, ease: 'none', duration: 0.1 },
        Math.max(0.001, (werkwijze.offsetTop - window.innerHeight) / total));
    }
    if (contact) {
      tl.to(fresnelMat.uniforms.uIntensity, { value: 1.45, ease: 'none', duration: 0.12 },
        Math.max(0.001, (contact.offsetTop - window.innerHeight * 0.8) / total));
    }
    return tl;
  }

  /* Build after full layout (pin spacers included) */
  var journey = null;
  window.addEventListener('load', function () {
    requestAnimationFrame(function () { journey = buildJourney(); ScrollTrigger.refresh(); });
  });
  if (document.readyState === 'complete') { journey = buildJourney(); }

  /* ---------- Idle motion + pointer parallax + render (GSAP ticker) ---------- */
  var mouseX = 0, mouseY = 0, curX = 0, curY = 0, running = true, elapsed = 0;
  window.addEventListener('pointermove', function (e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  function render(time, deltaMS) {
    if (!running) return;
    elapsed += (deltaMS || 16.7) / 1000;
    var t = elapsed;
    starMat.uniforms.uTime.value = t;
    curX += (mouseX - curX) * 0.035;
    curY += (mouseY - curY) * 0.035;

    spinner.rotation.y += 0.0022;
    spinner.position.y = Math.sin(t * 0.6) * 0.06;
    spinner.rotation.x = curY * 0.05;
    spinner.rotation.z = curX * 0.03;
    moon.position.set(Math.cos(t * 0.5) * 1.9, Math.sin(t * 0.9) * 0.28, Math.sin(t * 0.5) * 1.9);

    camera.position.x = curX * 0.25;
    camera.position.y = -curY * 0.18;
    camera.lookAt(0, 0, 0);
    /* keep the camera pointed at the scene, not the planet — the planet
       moving through the frame IS the choreography */
    renderer.render(scene, camera);
  }
  gsap.ticker.add(render);

  document.addEventListener('visibilitychange', function () { running = !document.hidden; });

  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
  }, { passive: true });

  renderer.domElement.addEventListener('webglcontextlost', function () {
    running = false;
    gsap.ticker.remove(render);
    document.documentElement.classList.remove('gl-on');
  });

  document.documentElement.classList.add('gl-on');
})();
