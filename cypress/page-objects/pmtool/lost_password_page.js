export class LostPassword {
  constructor() {
    this.pmtoolLostUrl =
      "https://tredgate.com/pmtool/index.php?module=users/restore_password";
    this.pmtoolUrl = "https://tredgate.com/pmtool";
    this.forgetButton = "#forget_password";
    this.usernameInput = "#username";
    this.email = "#email";
    this.send = "#send";
    this.back.Button = "#back";
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
    return this;
  }

  clickForgetButton() {
    cy.get(this.forgetButton).click();
    return new LostPassword();
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
}
