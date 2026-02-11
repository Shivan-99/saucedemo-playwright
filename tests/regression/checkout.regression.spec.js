const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { InventoryPage } = require('../../pages/InventoryPage');
const { CartPage } = require('../../pages/CartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');
const env = require('../../utils/envConfig');

test('@regression User can complete checkout', async ({ page }) => {
  await page.goto(env.baseURL);

  await new LoginPage(page).login(env.users.standard, env.password);

  const inventory = new InventoryPage(page);
  await inventory.addProductToCart('Sauce Labs Backpack');
  await inventory.goToCart();

  await new CartPage(page).checkout();
  await new CheckoutPage(page).completeCheckout();

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
