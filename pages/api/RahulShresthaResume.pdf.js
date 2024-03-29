import * as playwright from "playwright-aws-lambda";

module.exports = async (req, res) => {
  // for (const font of fonts) {
  //   await playwright.loadFont(font);
  //   console.log("loaded font", font);
  // }

  console.log("fonts loaded. launching browser");
  const browser = await playwright.launchChromium({ headless: true });
  console.log("browser launched. creating context");
  const context = await browser.newContext({
    viewport: {
      width: 1200,
      height: 630,
    },
  });
  const page = await context.newPage();
  console.log("context created. navigating to page");
  await page.goto("https://shres.dev/resume?print");
  console.log("page loaded. waiting for 1000 ms");
  await sleep(1000);
  console.log("taking pdf");
  const pdf = await page.pdf();
  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=RahulShresthaResume.pdf");
  res.status(200).send(pdf);
  console.log("pdf sent. closing.");
  await browser.close();
};

const sleep = (n) => new Promise((r) => setTimeout(r, n));