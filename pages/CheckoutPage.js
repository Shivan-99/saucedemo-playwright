class CheckoutPage {
  constructor(page) {
    this.page = page; // Fix: Assign the page object to this.page
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueBtn = '#continue';
    this.finishBtn = '#finish';
    this.completeHeader = '.complete-header';
  }

  // Complete the checkout process by filling in the details and submitting
  async completeCheckout() {
    await this.page.fill(this.firstName, 'John'); // Interacting with the page
    await this.page.fill(this.lastName, 'Doe');
    await this.page.fill(this.postalCode, '12345');
    await this.page.click(this.continueBtn);
    await this.page.click(this.finishBtn);
  }
}

module.exports = { CheckoutPage };
