import { HomePage } from "./home_page";
import { LostPassword } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.forgetButton = "#forget_password";
    this.pageHeader = "h3.form-title";
    this.logoImg = ".login-page-logo img";
    this.rememberMeCheckbox = ".checkbox";
  }

  usernameHavePlacelhoder(placeholderValue) {
    cy.get(this.usernameInput).should(
      "have.attr",
      "placeholder",
      placeholderValue
    );
    return this;
  }

  rememberMeHaveText(text) {
    cy.get(this.rememberMeCheckbox).should("contain.text", text);
    return this;
  }

  loginButtonHaveText(text) {
    cy.get(this.loginButton).should("have.text", text);
    return this;
  }
  passwordForgottenHaveText(text) {
    cy.get(this.forgetButton).should("have.text", text);
    return this;
  }

  logoIsVisible() {
    cy.get(this.logoImg).should("be.visible");
    return this;
  }

  passwordHavePlacelhoder(placeholderValue) {
    cy.get(this.passwordInput).should(
      "have.attr",
      "placeholder",
      placeholderValue
    );
    return this;
  }
  openPmtool() {
    cy.visit(this.pmtoolUrl);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new HomePage();
  }

  clickLostPassword() {
    cy.get(this.forgetButton).click();
    return new LostPasswordPage();
  }
}
