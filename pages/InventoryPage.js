class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartBadge = '.shopping_cart_badge';
  }

  async addProductToCart(productName) {
    await this.page.click(`text=${productName} >> xpath=../../..//button`);
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}

module.exports = { InventoryPage };
