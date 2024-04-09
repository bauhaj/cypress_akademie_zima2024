import { LoginPage } from "./login_page";

export class HomePage {
  constructor() {
    this.automationteststoreUrl = "https://automationteststore.com/";
    this.loginOrRegisterButton = "#customer_menu_top > li > a";
  }

  openAutomationteststore() {
    cy.visit(this.automationteststoreUrl);
    return this;
  }

  loginOrRegisterButtonIsVisible() {
    cy.get(this.loginOrRegisterButton).should("be.visible");
    return this;
  }

  loginOrRegisterButtonHaveText(text) {
    cy.get(this.loginOrRegisterButton).should("have.text", text);
    return this;
  }

  clickLoginOrRegisterButton() {
    cy.get(this.loginOrRegisterButton).click();
    return new LoginPage();
  }
}
