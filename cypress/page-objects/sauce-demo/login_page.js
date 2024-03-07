export class SauceDemoLoginPage {
  constructor() {
    this.saucedemoUrl = "https://www.saucedemo.com/v1/";
    this.username = "#user-name";
    this.password = "#password";
    this.loginButton = "#login-button";
  }

  openSauceUrl() {
    cy.visit(this.saucedemoUrl);
    return this;
  }

  typeUsername(username) {
    cy.get(this.username).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.password).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    // to do return new ...;
  }
}
