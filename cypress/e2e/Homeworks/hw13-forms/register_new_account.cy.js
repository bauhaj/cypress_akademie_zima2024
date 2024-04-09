import { HomePage } from "../../../page-objects/hw13-form/home_page";
//import { faker } from "@faker-js/faker";
import { fakerCS_CZ as faker } from "@faker-js/faker";

describe("Register a New Account", () => {
  it("Fill out the form and register a new account", () => {
    const czechPhone = faker.phone.number("+420#########");
    const loginName = `Bramburka_${faker.number.int({
      min: 1000,
      max: 99999,
    })}`;

    new HomePage()
      .openAutomationteststore()
      .loginOrRegisterButtonIsVisible()
      .loginOrRegisterButtonHaveText("Login or register")
      .clickLoginOrRegisterButton()
      .continueButtonIsVisible()
      .continueButtonHaveText("Continue")
      .clickContinueButton()
      .firstNameInputHaveValue("Brambůrka")
      .lastNameInputIsVisible()
      .typeLastNameInput(faker.person.lastName("female"))
      .emailInputIsExist()
      .typeEmailInput(faker.internet.email())
      .typeTelephoneInput(czechPhone)
      .faxInputHaveValue("+420123456789")
      .companyHasClass()
      .typeCompanyInput(faker.company.name())
      .typeAddressInput(faker.location.streetAddress())
      .typeCityInput(faker.location.city())
      .selectCountry("56")
      .selectRegionStateSelect("901")
      .typeZipCodeInput(faker.location.zipCode())
      .loginNameInputIsVisible()
      .typeLoginNameInput(loginName)
      .passwordInputIsExist()
      .typePasswordInput("Testík&3")
      .typePasswordConfirmInput("Testík&3")
      .selectSubscribeRadioButton("0")
      .selectPrivacyPoliciCheckBox("1")
      .checkTheCheckBox()
      .checkAlert()
      .clickContinueButton()
      .checkCreateAlert();
  });
});
