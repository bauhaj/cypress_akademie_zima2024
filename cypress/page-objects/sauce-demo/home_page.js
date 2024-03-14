import { SauceDemoLoginPage } from "./login_page";

export class SauceDemoHomePage {
  constructor() {
    this.menuButton = ".bm-burger-button > button";
    this.logoutButton = "#logout_sidebar_link";
  }

  clickmenuButton() {
    cy.get(this.menuButton).click();
    return this;
  }

  clickLogoutButton() {
    cy.get(this.logoutButton).click();
    return new SauceDemoLoginPage();
  }
}
