// Collect candidate photo URLs from Pexels search pages (Pexels license:
// free for commercial use, no attribution required).
// Usage: node scripts/pexels.mjs "query" [count]
import { chromium } from "playwright";

const [, , query, countArg] = process.argv;
const count = Number(countArg || 8);

const browser = await chromium.launch();
const page = await browser.newPage({
  viewportSize: { width: 1440, height: 2400 },
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36",
});

await page.goto(`https://www.pexels.com/search/${encodeURIComponent(query)}/`, {
  waitUntil: "commit",
  timeout: 60000,
});
await page.waitForTimeout(9000);
await page.mouse.wheel(0, 1200);
await page.waitForTimeout(2500);

const urls = await page.evaluate(() => {
  const out = [];
  for (const img of document.querySelectorAll("img")) {
    const src = img.currentSrc || img.src || "";
    const m = src.match(/images\.pexels\.com\/photos\/(\d+)\//);
    if (m) out.push({ id: m[1], alt: (img.alt || "").slice(0, 80) });
  }
  return out;
});

const seen = new Set();
const unique = urls.filter((u) => !seen.has(u.id) && seen.add(u.id));
for (const u of unique.slice(0, count)) {
  console.log(`${u.id}\t${u.alt}`);
}
await browser.close();
