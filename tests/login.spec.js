require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Użytkownik może się zalogować', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  const username = process.env.USERNAME1;
  const password = process.env.PASSWORD;
  console.log('username:', username);
  console.log('password:', password);

  await loginPage.login(username, password);
  await expect(loginPage.successMessage).toBeVisible({ timeout: 10000 });
  await expect(page).toHaveURL('https://adamkgt.github.io/QAApp/app.html');

});