import { SuccessPage } from "./success_page";

export class CreateAccountPage {
  constructor() {
    this.firstNameInput = "#AccountFrm_firstname";
    this.lastNameInput = "#AccountFrm_lastname";
    this.emailInput = "#AccountFrm_email";
    this.telephoneInput = "#AccountFrm_telephone";
    this.faxInput = "#AccountFrm_fax";
    this.companyInput = "#AccountFrm_company";
    this.addressInput = "#AccountFrm_address_1";
    this.cityInput = "#AccountFrm_city";
    this.regionStateSelect = "#AccountFrm_zone_id";
    this.zipCodeInput = "#AccountFrm_postcode";
    this.countrySelect = "#AccountFrm_country_id";
    this.loginNameInput = "#AccountFrm_loginname";
    this.passwordInput = "#AccountFrm_password";
    this.passwordConfirmInput = "#AccountFrm_confirm";
    this.subscribleRadioButton = '[name="newsletter"]';
    this.privacyPolicyCheckBox = '[name="agree"]';
    this.continueButton = "button[title='Continue']";
    this.alertDiv = "div.alert";
    this.checkBox = "#AccountFrm_agree";
  }

  firstNameInputHaveValue(firstName) {
    cy.get(this.firstNameInput).type(firstName).should("have.value", firstName);
    return this;
  }

  lastNameInputIsVisible() {
    cy.get(this.lastNameInput).should("be.visible");
    return this;
  }

  typeLastNameInput(lastName) {
    cy.get(this.lastNameInput).type(lastName);
    return this;
  }

  emailInputIsExist() {
    cy.get(this.emailInput).should("exist");
    return this;
  }

  typeEmailInput(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  typeTelephoneInput(telephone) {
    cy.get(this.telephoneInput).type(telephone);
    return this;
  }

  faxInputHaveValue(fax) {
    cy.get(this.faxInput).type(fax).should("have.value", fax);
    return this;
  }

  companyHasClass() {
    cy.get(this.companyInput).should("have.class", "form-control");
    return this;
  }

  typeCompanyInput(company) {
    cy.get(this.companyInput).type(company);
    return this;
  }
  typeAddressInput(address) {
    cy.get(this.addressInput).type(address);
    return this;
  }

  typeCityInput(city) {
    cy.get(this.cityInput).type(city);
    return this;
  }

  selectCountry(select) {
    cy.get(this.countrySelect).select(select);
    cy.wait(1000);
    return this;
  }

  selectRegionStateSelect(select) {
    cy.get(this.regionStateSelect).select(select);
    return this;
  }

  typeZipCodeInput(zipCode) {
    cy.get(this.zipCodeInput).type(zipCode);
    return this;
  }

  loginNameInputIsVisible() {
    cy.get(this.loginNameInput).should("be.visible");
    return this;
  }

  typeLoginNameInput(login) {
    cy.get(this.loginNameInput).type(login);
    return this;
  }

  passwordInputIsExist() {
    cy.get(this.passwordInput).should("exist");
    return this;
  }

  typePasswordInput(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  typePasswordConfirmInput(confirmPassword) {
    cy.get(this.passwordConfirmInput).type(confirmPassword);
    return this;
  }
  checkAlert() {
    cy.get(this.alertDiv).should("not.exist");
    return this;
  }

  selectSubscribeRadioButton() {
    cy.get(this.subscribleRadioButton).check();
    return this;
  }

  selectPrivacyPoliciCheckBox() {
    cy.get(this.privacyPolicyCheckBox).check();
    return this;
  }

  checkTheCheckBox() {
    cy.get(this.checkBox).should("be.checked");
    return this;
  }

  clickContinueButton() {
    cy.get(this.continueButton).click();
    return new SuccessPage();
  }
}
