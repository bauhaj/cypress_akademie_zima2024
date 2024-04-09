import { CreateAccountPage } from "./create_account_page";

export class LoginPage {
  constructor() {
    this.continueButton = "button[title='Continue']";
  }

  continueButtonIsVisible() {
    cy.get(this.continueButton).should("be.visible");
    return this;
  }

  continueButtonHaveText(text) {
    cy.get(this.continueButton).should("contain.text", text);
    return this;
  }

  clickContinueButton() {
    cy.get(this.continueButton).click();
    return new CreateAccountPage();
  }
}
