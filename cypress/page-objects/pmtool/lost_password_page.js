import { LoginPage } from "./login_page";

export class LostPassword {
  constructor() {
    this.usernameInput = "#username";
    this.email = "#email";
    this.send = "#send";
    this.backButton = "#back-btn";
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typeEmail(email) {
    cy.get(this.email).type(email);
    return this;
  }

  clcikSend(send) {
    cy.get(this.send).click();
  }

  clickBackButton() {
    cy.get(this.backButton).click();
    return new LoginPage();
  }
}
