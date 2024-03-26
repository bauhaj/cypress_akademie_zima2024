import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login to pmtool using Fluent API test", () => {
    const username = Cypress.env("pmtool_username");
    const password = Cypress.env("pmtool_password");
    new LoginPage()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });

  it("new test s otevřením lost password a z5 na login", () => {
    new LoginPage().clickLostPassword().clickBackButton();
  });
});
