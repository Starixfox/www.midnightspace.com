// Renders assets/og-source.html to assets/og.png at 1200x630.
// One-shot. Run from any directory; resolves paths relative to repo root.
import puppeteer from 'file:///C:/Users/jordan/AppData/Local/Temp/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const src = 'http://localhost:5174/assets/og-source.html';
const out = resolve(repoRoot, 'assets', 'og.png');

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.goto(src, { waitUntil: 'networkidle0', timeout: 30_000 });
// Wait an extra tick for fonts (Fraunces SOFT axis is a network resource)
await page.evaluate(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 500));
const card = await page.$('#card');
await card.screenshot({ path: out, omitBackground: false });
console.log('wrote', out);
await browser.close();
