// Frame-by-frame screenshot tool: captures a page at successive viewport
// scroll positions so the design can be reviewed section by section.
import { chromium } from "playwright";
import { mkdirSync } from "fs";

const [, , url, prefix, framesArg] = process.argv;
const frames = Number(framesArg || 8);
const dir = "screens";
mkdirSync(dir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewportSize: { width: 1600, height: 900 } });
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 }).catch(() => {});
await page.waitForTimeout(2500);

// dismiss likely cookie banners
for (const sel of ["#onetrust-accept-btn-handler", "text=Accept", ".cookie-accept", "[id*=cookie] button"]) {
  try { await page.locator(sel).first().click({ timeout: 1200 }); break; } catch {}
}
await page.waitForTimeout(800);

const total = await page.evaluate(() => document.body.scrollHeight);
const vh = 900;
const steps = Math.min(frames, Math.ceil(total / vh));
for (let i = 0; i < steps; i++) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), i * vh);
  await page.waitForTimeout(1400); // allow scroll-triggered animation to settle
  await page.screenshot({ path: `${dir}/${prefix}-${String(i).padStart(2, "0")}.png` });
}
console.log(`captured ${steps} frames of ${url} (total height ${total}px)`);
await browser.close();
