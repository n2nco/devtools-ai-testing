
const base = require('@playwright/test');
const devtools = require('@devtools-ai/playwright-sdk');

// Extend basic test by registering the plugin
const test = base.test.extend({
  page: async ({ page }, use, testInfo) => {
    await devtools.register_devtools(page, testInfo.title);
    await use(page);
  },
});


test('Search github', async ({ page }) => {
  await page.goto('https://github.com/');
  var element = await page.findByAI("searchBox")
  await element.type('Hello World');
  await page.screenshot({ path: `example.png`, fullPage: true });
  await new Promise((r) => setTimeout(r, 10000));
});


// test('Click on navbar link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   var element = await page.$("//a[@class='navbar__item navbar__link'][3]")
//   await element.click();
//   await new Promise((r) => setTimeout(r, 10000));
// });

