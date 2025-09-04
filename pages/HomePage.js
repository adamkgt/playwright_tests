// pages/HomePage.js
class HomePage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://playwright.dev/');
  }

  async titleIsCorrect() {
    await expect(this.page).toHaveTitle(/Playwright/);
  }

  async menuIsVisible() {
    const menu = this.page.locator('nav');
    await expect(menu).toBeVisible();
  }
}

module.exports = { HomePage };

const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('strona główna', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();
  await home.titleIsCorrect();
  await home.menuIsVisible();
});