import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3300/fr', { waitUntil: 'networkidle' });
const result = await page.evaluate(() => new Promise((resolve) => {
  const el = document.querySelector('section h1');
  if (!el) return resolve('no h1 found');
  const io = new IntersectionObserver((entries) => {
    resolve(entries.map(e => ({ isIntersecting: e.isIntersecting, ratio: e.intersectionRatio })));
    io.disconnect();
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  io.observe(el);
  setTimeout(() => resolve('timeout, no callback fired'), 3000);
}));
console.log(JSON.stringify(result));
await browser.close();
