class CartPage {
  constructor(page) {
    this.page = page; // Correctly assign the page object to this.page
    this.checkoutButton = '#checkout'; // The selector for the checkout button
  }

  // Checkout action
  async checkout() {
    await this.page.click(this.checkoutButton); // Perform the click on the checkout button
  }
}

module.exports = { CartPage };
