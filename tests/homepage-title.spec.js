const { test, expect } = require('@playwright/test');

test('tytuł strony jest poprawny', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});