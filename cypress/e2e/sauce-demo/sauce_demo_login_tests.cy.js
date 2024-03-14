import { SauceDemoLoginPage } from "../../page-objects/sauce-demo/login_page";

describe("Sauce demo test login", () => {
  it("login to saucedemo page fluet", () => {
    new SauceDemoLoginPage()
      .openSauceUrl()
      .typeUsername("standard_user")
      .typePassword("secret_sauce")
      .clickLogin();
  });

  it.only("Sauce demo logout test", () => {
    new SauceDemoLoginPage()
      .openSauceUrl()
      .typeUsername("standard_user")
      .typePassword("secret_sauce")
      .clickLogin()
      .clickmenuButton()
      .clickLogoutButton();
  });
});
