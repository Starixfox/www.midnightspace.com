/* Midnight Space — living starfield (Three.js, module)
   A slow-drifting particle space behind the hero: time drift,
   cursor parallax, scroll recession. Bails to the CSS starfield
   on reduced motion, missing WebGL, or any init failure. */
import * as THREE from './vendor/three.module.min.js';

(function () {
  'use strict';

  var host = document.getElementById('gl-hero');
  if (!host) return;
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var isMobile = matchMedia('(max-width: 700px)').matches;

  try {
    var renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' });
  } catch (e) { return; }
  if (!renderer.getContext()) return;

  var DPR = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
  renderer.setPixelRatio(DPR);
  renderer.setSize(host.clientWidth, host.clientHeight);
  renderer.domElement.className = 'gl-canvas';
  host.appendChild(renderer.domElement);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(60, host.clientWidth / host.clientHeight, 0.1, 60);
  camera.position.z = 10;

  /* Star cloud — positions in a deep shell so there is parallax between layers */
  var COUNT = isMobile ? 2600 : 7500;
  var pos = new Float32Array(COUNT * 3);
  var seed = new Float32Array(COUNT);
  for (var i = 0; i < COUNT; i++) {
    var r = 6 + Math.random() * 22;                  // 6..28 units deep
    var theta = Math.random() * Math.PI * 2;
    var phi = Math.acos(2 * Math.random() - 1);
    pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6; // flattened — like a field, not a ball
    pos[i * 3 + 2] = r * Math.cos(phi) - 6;
    seed[i] = Math.random();
  }
  var geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));

  var mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uPixelRatio: { value: DPR } },
    vertexShader: [
      'attribute float aSeed;',
      'uniform float uTime;',
      'uniform float uPixelRatio;',
      'varying float vAlpha;',
      'varying float vTint;',
      'void main() {',
      '  vec3 p = position;',
      '  p.x += sin(uTime * 0.05 + aSeed * 6.2831) * 0.35;',
      '  p.y += cos(uTime * 0.04 + aSeed * 12.566) * 0.25;',
      '  vec4 mv = modelViewMatrix * vec4(p, 1.0);',
      '  gl_Position = projectionMatrix * mv;',
      '  float tw = 0.65 + 0.35 * sin(uTime * (0.6 + aSeed) + aSeed * 40.0);',
      '  vAlpha = tw * (0.25 + aSeed * 0.75);',
      '  vTint = aSeed;',
      '  gl_PointSize = (0.7 + aSeed * 1.9) * uPixelRatio * (18.0 / -mv.z);',
      '}'
    ].join('\n'),
    fragmentShader: [
      'varying float vAlpha;',
      'varying float vTint;',
      'void main() {',
      '  float d = length(gl_PointCoord - 0.5);',
      '  if (d > 0.5) discard;',
      '  float glow = smoothstep(0.5, 0.0, d);',
      '  vec3 cool = vec3(0.486, 0.847, 0.878);', // brand cyan
      '  vec3 warm = vec3(1.0, 1.0, 1.0);',
      '  vec3 col = mix(cool, warm, step(0.35, vTint));',
      '  gl_FragColor = vec4(col, glow * vAlpha);',
      '}'
    ].join('\n')
  });
  var stars = new THREE.Points(geo, mat);
  scene.add(stars);

  /* Interaction state — everything eased, nothing snaps */
  var mouseX = 0, mouseY = 0, curX = 0, curY = 0, scrollP = 0, running = true;

  window.addEventListener('pointermove', function (e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  window.addEventListener('scroll', function () {
    var h = host.getBoundingClientRect();
    scrollP = Math.min(1, Math.max(0, -h.top / (h.height || 1)));
  }, { passive: true });

  var clock = new THREE.Clock();
  function frame() {
    if (!running) return;
    var t = clock.getElapsedTime();
    mat.uniforms.uTime.value = t;
    curX += (mouseX - curX) * 0.03;
    curY += (mouseY - curY) * 0.03;
    stars.rotation.y = t * 0.008 + curX * 0.06;
    stars.rotation.x = curY * 0.04;
    camera.position.z = 10 + scrollP * 6;          // recede as you scroll away
    camera.position.y = -scrollP * 1.2;
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  function setRunning(on) {
    if (on && !running) { running = true; clock.start(); requestAnimationFrame(frame); }
    else if (!on) { running = false; }
  }

  document.addEventListener('visibilitychange', function () { setRunning(!document.hidden); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { setRunning(es[0].isIntersecting && !document.hidden); },
      { rootMargin: '80px' }).observe(host);
  }

  window.addEventListener('resize', function () {
    camera.aspect = host.clientWidth / host.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(host.clientWidth, host.clientHeight);
  }, { passive: true });

  renderer.domElement.addEventListener('webglcontextlost', function () {
    setRunning(false);
    document.documentElement.classList.remove('gl-on');
  });

  /* First frame proven — fade the canvas in over the CSS fallback */
  requestAnimationFrame(frame);
  document.documentElement.classList.add('gl-on');
})();
