const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { InventoryPage } = require('../../pages/InventoryPage');
const env = require('../../utils/envConfig');
const products = require('../../test-data/products.json');

test('@sanity User can add products to cart', async ({ page }) => {
  await page.goto(env.baseURL);

  await new LoginPage(page).login(env.users.standard, env.password);

  const inventory = new InventoryPage(page);
  for (const product of products.products) {
    await inventory.addProductToCart(product);
  }

  await expect(page.locator(inventory.cartBadge)).toHaveText('2');
});
