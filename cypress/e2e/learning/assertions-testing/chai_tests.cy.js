import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Chai Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login header has text 'Login'", () => {
    cy.get("h3.form-title")
      .should("have.text", "Login")
      .should("contain.text", "Login");
  });

  it.skip('Failing: Login header has test "Login2"', () => {
    cy.get("h3.form-title").should("have.text", "Login2");
  });

  it("Lost password anchor has text", () => {
    cy.get("#forget_password")
      .should("have.text", "Password forgotten?")
      .should("contain.text", "Password forgotten?");
  });

  it("User name have value", () => {
    cy.get("#username").type("Test").should("have.value", "Test");
  });

  it("E-mail in Lost Password page has text", () => {
    new LoginPage().clickForgetButton();
    const validationText = "TestEmail";
    cy.get('[name="email"]')
      .type(validationText)
      .should("have.value", validationText);
  });

  it("Password input has form-control class", () => {
    cy.get("#password").should("have.class", "form-control");
  });

  it("Login button has btn-info class", () => {
    cy.get("[type='submit']").should("have.class", "btn-info");
  });

  it("Login button is visible and exist", () => {
    cy.get(".btn").should("be.visible").should("exist");
  });

  it("Login and check nadpis text", () => {
    new LoginPage()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
    cy.get(".navbar-brand").should("be.visible");
  });

  it("check button for lost password", () => {
    cy.get("#forget_password").should("exist");
  });

  it("Username has placeholder 'Username", () => {
    cy.get("#username").should("have.attr", "placeholder", "Username");
  });

  it("password has placeholder", () => {
    cy.get("#password").should("have.attr", "placeholder", "Password");
  });
});
