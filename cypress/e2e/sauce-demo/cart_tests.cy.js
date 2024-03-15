import { SauceDemoLoginPage } from "../../page-objects/sauce-demo/login_page";

describe("Sauce Demo Cart Tests", () => {
  it("Add item and remote it from a cart test", () => {
    new SauceDemoLoginPage()
      .openSauceUrl()
      .typeUsername("standard_user")
      .typePassword("secret_sauce")
      .clickLogin()
      .clickaddBackpackToCartButton()
      .clickcartButton()
      .clickRemoveItem();
  });
});
