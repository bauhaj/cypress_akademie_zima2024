import { HomePageTredgateEshop } from "../../page-objects/eshop/home_page";
import { RegistrationPageTredgateEshop } from "../../page-objects/eshop/registration_page";
import { faker } from "@faker-js/faker";

describe("Hw Page Objects", () => {
  it("Open and Fill Register with Pega Objects", () => {
    const homePageTredgateEshop = new HomePageTredgateEshop();
    const registrationPageTredgateEshop = new RegistrationPageTredgateEshop();
    homePageTredgateEshop.openEshopUrl();
    homePageTredgateEshop.clickMyAccountButton();
    homePageTredgateEshop.clickRegisterButton();
    registrationPageTredgateEshop.typeFirstNameInput(faker.person.firstName());
    registrationPageTredgateEshop.typeLastNameInput(faker.person.lastName());
    registrationPageTredgateEshop.typeEmailInput(faker.internet.email());
    registrationPageTredgateEshop.typeTelephoneInput(faker.phone.number());
    registrationPageTredgateEshop.typePasswordInput("Heslo123");
    registrationPageTredgateEshop.typePasswordConfirmInput("Heslo123");
    registrationPageTredgateEshop.clickContinueButton();
  });
});
