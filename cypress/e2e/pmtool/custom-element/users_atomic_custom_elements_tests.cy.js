import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { UsersPage } from "../../../page-objects/pmtool/user_page";

describe(
  "User Page atomic tests with custom elements",
  { testIsolation: false },
  () => {
    before(() => {
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();

      new LoginPage()
        .openPmtool()
        .typeUsername(Cypress.env("pmtool_username"))
        .typePassword(Cypress.env("pmtool_password"))
        .clickLogin();
      new UsersPage().visit();
    });

    context("Users tittle test", () => {
      it("Users is visible", () => {
        new UsersPage().pageTitle.isVisible();
      });

      it("Users have text", () => {
        new UsersPage().pageTitle.hasText("Users");
      });

      it("Add User Button is visible", () => {
        new UsersPage().addUserButton.isVisible();
      });

      it("Add User Button have text", () => {
        new UsersPage().addUserButton.hasText("Add User");
      });
    });
  }
);
