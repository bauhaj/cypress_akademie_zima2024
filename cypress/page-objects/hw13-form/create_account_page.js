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
    this.LoginNameInput = "#AccountFrm_loginname";
    this.passwordInput = "#AccountFrm_password";
    this.passwordConfirmInput = "#AccountFrm_confirm";
    this.subscribleRadioButton = '[name="newsletter"]';
    this.privacyPolicyCheckBox = '[name="agree"]';
    this.continueButton = "button[title='Continue']";
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
    return this;
  }

  selectRegionStateSelect(select) {
    cy.get(this.regionStateSelect).select(select);
    return this;
  }
  wait() {
    cy.wait(1000);
  }
}
