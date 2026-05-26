#!/usr/bin/env node
/**
 * gen-gcc-map.mjs — generates accurate SVG country outlines for the
 * GCC region, projected to the existing Funding Field viewport.
 *
 * Source: world-atlas 50m TopoJSON via jsDelivr CDN.
 *   https://github.com/topojson/world-atlas
 *
 * Match the projection used by enhance.js (lng/lat → x/y in an 800x560
 * box, lng 32→60, lat 14→34). Output is a path-per-country `<path>`
 * snippet for direct paste into platform.html and 404.html.
 *
 * Country IDs (ISO 3166-1 numeric):
 *   682 Saudi Arabia, 784 United Arab Emirates, 634 Qatar,
 *   048 Bahrain,     414 Kuwait,                 512 Oman.
 *
 * Run: `node scripts/gen-gcc-map.mjs > scripts/gcc-paths.svg`
 */
import { feature } from 'topojson-client';

const TOPO_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

const VIEW = { w: 800, h: 560, lng0: 32, lng1: 60, lat0: 14, lat1: 34 };
const project = (lng, lat) => [
  ((lng - VIEW.lng0) / (VIEW.lng1 - VIEW.lng0)) * VIEW.w,
  VIEW.h - ((lat - VIEW.lat0) / (VIEW.lat1 - VIEW.lat0)) * VIEW.h,
];

const GCC = {
  '682': 'saudi-arabia',
  '784': 'uae',
  '634': 'qatar',
  '048': 'bahrain',
  '414': 'kuwait',
  '512': 'oman',
};

const topo = await fetch(TOPO_URL).then((r) => r.json());
const countries = feature(topo, topo.objects.countries).features;

const ringToPath = (ring) => {
  let d = '';
  for (let i = 0; i < ring.length; i++) {
    const [x, y] = project(ring[i][0], ring[i][1]);
    d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1);
  }
  return d + 'Z';
};

const polyToPath = (geom) => {
  const polys =
    geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
  return polys.flatMap((poly) => poly.map(ringToPath)).join(' ');
};

const out = [];
for (const f of countries) {
  // world-atlas IDs are zero-padded strings ("048") or plain ("682").
  const id = String(f.id).padStart(3, '0');
  const slug = GCC[id] || GCC[String(Number(id))];
  if (!slug) continue;
  out.push(
    `<path class="ff-country-shape" data-country="${slug}" d="${polyToPath(
      f.geometry
    )}" />`
  );
}

process.stdout.write(out.join('\n') + '\n');
