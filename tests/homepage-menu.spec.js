const { test, expect } = require('@playwright/test');

test('menu główne jest widoczne', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const menu = page.locator('nav');
  await expect(menu).toBeVisible();
});
