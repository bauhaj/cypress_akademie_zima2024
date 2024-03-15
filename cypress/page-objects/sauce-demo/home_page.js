import { SauceDemoBasket } from "./basket";
import { SauceDemoLoginPage } from "./login_page";

export class SauceDemoHomePage {
  constructor() {
    this.menuButton = ".bm-burger-button > button";
    this.logoutButton = "#logout_sidebar_link";
    this.addBackpackToCartButton = ":nth-child(1) > .pricebar > .btn_primary";
    this.cartButton = "[id='shopping_cart_container']";
  }

  clickmenuButton() {
    cy.get(this.menuButton).click();
    return this;
  }

  clickLogoutButton() {
    cy.get(this.logoutButton).click();
    return new SauceDemoLoginPage();
  }

  clickaddBackpackToCartButton() {
    cy.get(this.addBackpackToCartButton).click();
    return this;
  }

  clickcartButton() {
    cy.get(this.cartButton).click();
    return new SauceDemoBasket();
  }
}
