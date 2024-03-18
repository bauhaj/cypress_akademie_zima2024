export class RegistrationPageTredgateEshop {
  constructor() {
    this.firstNameInput = "#input-firstname";
    this.lastNameInput = "#input-lastname";
    this.emailInput = "#input-email";
    this.telephoneInput = "#input-telephone";
    this.passwordInput = "#input-password";
    this.passwordConfirmInput = "#input-confirm";
    this.continueButton = ".pull-right > .btn";
  }

  typeFirstNameInput(firstName) {
    cy.get(this.firstNameInput).type(firstName);
    return this;
  }

  typeLastNameInput(lastname) {
    cy.get(this.lastNameInput).type(lastname);
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

  typePasswordInput(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  typePasswordConfirmInput(passwordConfirm) {
    cy.get(this.passwordConfirmInput).type(passwordConfirm);
    return this;
  }

  clickContinueButton() {
    cy.get(this.continueButton).click();
    // return new next page
  }
}
