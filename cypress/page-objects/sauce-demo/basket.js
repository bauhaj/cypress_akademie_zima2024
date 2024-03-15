export class SauceDemoBasket {
  constructor() {
    this.removeItemButton = ".item_pricebar > .btn_secondary";
  }

  clickRemoveItem() {
    cy.get(this.removeItemButton).click();
    return this;
  }
}
