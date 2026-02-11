const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const env = require('../../utils/envConfig');

test('@smoke User can login successfully', async ({ page }) => {
  await page.goto(env.baseURL);

  const loginPage = new LoginPage(page);
  await loginPage.login(env.users.standard, env.password);

  await expect(page).toHaveURL(/inventory/);
});
