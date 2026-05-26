// Midnight Space — live data layer.
// Pulls counts directly from the platform's Supabase REST endpoint so the
// marketing site is its own pilot demo. If anything fails, the static
// numbers in the HTML stay put — never blank.
//
// The anon key is the same one published in the platform's own /api page
// (read-only, RLS-enforced). Safe in client-side code.

const SB = {
  url: 'https://dshrbbnjahjcwxzvzygh.supabase.co/rest/v1',
  key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzaHJiYm5qYWhqY3d4enZ6eWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0ODE3OTgsImV4cCI6MjA5NDA1Nzc5OH0.OpUGgfL91m7STsZpE6fnX281KN_Ge8oytR-2lM-3qTo',
};

const CACHE_KEY = 'ms:livestats:v1';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

const headers = {
  apikey: SB.key,
  Authorization: 'Bearer ' + SB.key,
  Accept: 'application/json',
};

// Use the PostgREST `Prefer: count=exact` trick to read row counts without
// streaming any rows. The total comes back in the Content-Range header.
async function countWhere(query = '') {
  const url = `${SB.url}/opportunities?select=id&limit=1${query ? '&' + query : ''}`;
  const r = await fetch(url, { headers: { ...headers, Prefer: 'count=exact' } });
  if (!r.ok) throw new Error('count ' + r.status);
  const range = r.headers.get('content-range') || '';
  const total = parseInt(range.split('/')[1], 10);
  return Number.isFinite(total) ? total : 0;
}

async function maxLastVerified() {
  const url = `${SB.url}/opportunities?select=last_verified&order=last_verified.desc&limit=1`;
  const r = await fetch(url, { headers });
  if (!r.ok) throw new Error('verified ' + r.status);
  const rows = await r.json();
  return rows[0]?.last_verified || null;
}

async function fetchAll() {
  const [total, open, gccCountries, lastVerified] = await Promise.all([
    countWhere(),
    countWhere('status=eq.open'),
    countWhere('country=in.(Saudi Arabia,United Arab Emirates,Qatar,Kuwait,Bahrain,Oman)'),
    maxLastVerified(),
  ]);
  return { total, open, gccCountries, lastVerified, fetchedAt: Date.now() };
}

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (!cached.fetchedAt || Date.now() - cached.fetchedAt > CACHE_TTL) return null;
    return cached;
  } catch { return null; }
}

function writeCache(data) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch {}
}

// Public API ------------------------------------------------------------
export async function getStats() {
  const cached = readCache();
  if (cached) return cached;
  const fresh = await fetchAll();
  writeCache(fresh);
  return fresh;
}

// Animated count-up: ease-out cubic, ~1.1s, lerp from current displayed
// value to target. Keeps the number readable throughout.
export function countUp(el, target, opts = {}) {
  const duration = opts.duration ?? 1100;
  const decimals = opts.decimals ?? 0;
  const format = opts.format ?? ((n) => n.toLocaleString('en-US', {
    minimumFractionDigits: decimals, maximumFractionDigits: decimals,
  }));
  // Read the starting value from whatever's already in the DOM, stripping
  // commas/plus signs so we don't restart from 0 if SSR'd numbers are present.
  const startText = (el.textContent || '0').replace(/[^0-9.\-]/g, '');
  const start = parseFloat(startText) || 0;
  const t0 = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - t0) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = start + (target - start) * eased;
    el.textContent = format(value);
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = format(target);
  };
  requestAnimationFrame(tick);
}

// "Verified today" → "Verified yesterday" → "Verified Nd ago" → "Verified DD MMM"
export function formatVerified(iso) {
  if (!iso) return '';
  const then = new Date(iso + (iso.length === 10 ? 'T00:00:00Z' : ''));
  const now = new Date();
  const days = Math.floor((Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
                         - Date.UTC(then.getUTCFullYear(), then.getUTCMonth(), then.getUTCDate())) / 86400000);
  if (days <= 0) return 'Verified today';
  if (days === 1) return 'Verified yesterday';
  if (days < 14) return `Verified ${days} days ago`;
  return 'Verified ' + then.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
}

// Country centroids — approximate, hand-picked so the dots cluster
// where the country actually is on the SVG without us needing a real
// map projection. Lng east, lat north, projected by the renderer.
const COUNTRY_GEO = {
  'Saudi Arabia':         { lng: 45.0, lat: 24.7, region: 'gcc' },
  'UAE':                  { lng: 54.5, lat: 24.4, region: 'gcc' },
  'United Arab Emirates': { lng: 54.5, lat: 24.4, region: 'gcc' },
  'Qatar':                { lng: 51.2, lat: 25.3, region: 'gcc' },
  'Bahrain':              { lng: 50.6, lat: 26.0, region: 'gcc' },
  'Kuwait':               { lng: 47.6, lat: 29.3, region: 'gcc' },
  'Oman':                 { lng: 57.0, lat: 21.5, region: 'gcc' },
  // Adjacent / regional — drawn at the edges of the field
  'Jordan':               { lng: 38.5, lat: 31.0, region: 'adjacent' },
  'Egypt':                { lng: 32.0, lat: 28.0, region: 'adjacent' },
  'Lebanon':              { lng: 36.0, lat: 33.8, region: 'adjacent' },
  'Saudi Arabia / MENA':  { lng: 45.0, lat: 24.7, region: 'gcc' },
  'GCC':                  { lng: 49.0, lat: 25.5, region: 'gcc' },
  // Global — these accumulate into the "elsewhere" counter
};

// Distinct color band — each sector gets a hue slot around the cyan/teal
// brand spectrum. Generated deterministically from the canonical list so
// the same sector always maps to the same dot color.
const SECTOR_PALETTE = [
  '#7cd8e0', // 1  cyan (the LIVE accent)
  '#5cc6cf', // 2  cyan deeper
  '#3bb3bd', // 3  teal
  '#2a8e98', // 4  teal deeper
  '#1d6b73', // 5  ocean
  '#0e5560', // 6  ocean deeper
  '#9ed5d4', // 7  pale teal
  '#b8c7c4', // 8  silver-teal
  '#c8a87c', // 9  warm gold
  '#b8895a', // 10 warm gold deeper
  '#7da5b3', // 11 slate
  '#5a8a99', // 12 slate deeper
  '#a4dfd7', // 13 mint
  '#84c7be', // 14 mint deeper
  '#d4b58e', // 15 sand
  '#8a93a8', // 16 fog
  '#c5d5d3', // 17 silver
];

export function sectorColor(sectorLabel, sectorIndex) {
  const i = ((sectorIndex ?? 0) % SECTOR_PALETTE.length + SECTOR_PALETTE.length) % SECTOR_PALETTE.length;
  return SECTOR_PALETTE[i];
}

export function getCountryGeo(country) {
  if (!country) return null;
  return COUNTRY_GEO[country] || null;
}

// Pull the open programs we need to render dots — minimal columns only so
// the payload stays small. Returns up to `limit` rows.
export async function getFundingField(limit = 1500) {
  const url = `${SB.url}/opportunities?select=id,title,country,sectors,funding_type,sponsor_institution&status=eq.open&limit=${limit}`;
  const r = await fetch(url, { headers });
  if (!r.ok) throw new Error('field ' + r.status);
  return r.json();
}

// Fetch one extra slice for the sectoral chart. We pull the sector arrays
// from opportunities and tally client-side — keeps the live.js footprint
// small without needing a server-side view.
export async function getSectorBreakdown() {
  const url = `${SB.url}/opportunities?select=sectors&status=eq.open&limit=2000`;
  const r = await fetch(url, { headers });
  if (!r.ok) throw new Error('sectors ' + r.status);
  const rows = await r.json();
  const tally = new Map();
  for (const row of rows) {
    if (!Array.isArray(row.sectors)) continue;
    for (const raw of row.sectors) {
      const s = String(raw).trim().toLowerCase();
      if (!s) continue;
      tally.set(s, (tally.get(s) || 0) + 1);
    }
  }
  // Canonical 17 sectors — verified against the platform's own taxonomy.
  // Every raw label found in the database maps into exactly one bucket.
  const canon = {
    'innovation': 'Innovation & Entrepreneurship',
    'innovation & entrepreneurship': 'Innovation & Entrepreneurship',
    'ict': 'ICT',
    'financial': 'Financial Services',
    'financial services': 'Financial Services',
    'industrial': 'Industrial & Manufacturing',
    'industrial & manufacturing': 'Industrial & Manufacturing',
    'healthcare': 'Healthcare & Life Sciences',
    'healthcare & life sciences': 'Healthcare & Life Sciences',
    'environment': 'Environment',
    'environment services': 'Environment',
    'energy': 'Energy',
    'education': 'Education',
    'realestate': 'Real Estate',
    'real estate': 'Real Estate',
    'pharma': 'Pharma & Biotech',
    'pharma & biotech': 'Pharma & Biotech',
    'tourism': 'Tourism & Quality of Life',
    'tourism & quality of life': 'Tourism & Quality of Life',
    'chemicals': 'Chemicals',
    'agriculture': 'Agriculture & Food',
    'agriculture & food processing': 'Agriculture & Food',
    'transport': 'Transport & Logistics',
    'transport & logistics': 'Transport & Logistics',
    'mining': 'Mining & Metals',
    'mining & metals': 'Mining & Metals',
    'private_sector': 'Private Sector',
    'private sector': 'Private Sector',
    'humanitarian': 'Humanitarian',
  };
  const buckets = new Map();
  for (const [raw, n] of tally) {
    const label = canon[raw] || (raw[0].toUpperCase() + raw.slice(1));
    buckets.set(label, (buckets.get(label) || 0) + n);
  }
  return [...buckets.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);
}
