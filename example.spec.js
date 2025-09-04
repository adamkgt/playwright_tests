const { test, expect } = require('@playwright/test');

test('strona główna działa', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
