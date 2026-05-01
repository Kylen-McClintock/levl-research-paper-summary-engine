import { createServer } from 'vite';
import { chromium } from 'playwright';
import fs from 'fs';

async function exportInfographic() {
  if (!fs.existsSync('./Exports')) {
      fs.mkdirSync('./Exports');
  }

  console.log("Starting Vite dev server...");
  const server = await createServer({
    root: process.cwd(),
    server: { port: 5173 }
  });
  await server.listen();
  server.printUrls();

  console.log("Launching headless Playwright browser...");
  // Launching the browser
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 1600 }, // This matches the w-[1200px] fixed width in React Layout
    deviceScaleFactor: 6 // 6x natively upscale from 1200 to generate ~7200px width
  });

  console.log("Navigating to local React app...");
  await page.goto('http://localhost:5173');
  
  console.log("Waiting for network idle and fonts to load...");
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
  
  // Explicit hard wait to ensure any slow lucide icons or CSS effects are fully mounted
  await page.waitForTimeout(3000);

  console.log("Capturing 8k screenshot to /Exports/methionine_8k.png...");
  const locator = page.locator('#infographic');
  await locator.waitFor({ state: 'visible' });
  await locator.screenshot({ path: './Exports/methionine_8k.png' });

  console.log("Success! Full-fidelity 8K render complete.");
  await browser.close();
  await server.close();
  process.exit(0);
}

exportInfographic().catch((e) => {
  console.error("Error during export:", e);
  process.exit(1);
});
