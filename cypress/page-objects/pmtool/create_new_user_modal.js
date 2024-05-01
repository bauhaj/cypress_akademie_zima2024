import { customElement } from "../../helpers/custom_element";
import { UsersPage } from "./user_page";

export class CreateNewUserModal {
  constructor() {
    this.accessGroupSelect = customElement(
      'div[data-testid="Access Group"] select'
    );
    this.usernameInput = customElement('div[data-testid="Username"]');
    this.passwordInput = customElement("#password");
    this.firstNameInput = customElement('div[data-testid="First Name"]');
    this.lastNameInput = customElement('div[data-testid="Last Name"]');
    this.userEmainlInput = customElement('div[data-testid="User Email"]');
    this.saveButton = customElement("button[type='submit']");
  }

  selectAccessGroupSelect(accessGroup) {
    this.accessGroupSelect.get().select(accessGroup);
    return this;
  }

  usernameInputExist() {
    this.usernameInput.get().should("exist");
    return this;
  }

  typeUsernameInput(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typePasswordInput(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  typeFirstNameInput(firstName) {
    this.firstNameInput.get().type(firstName);
    return this;
  }

  typeLastNameInput(lastName) {
    this.lastNameInput.get().type(lastName);
    return this;
  }

  typeUserEmailInput(email) {
    this.userEmainlInput.get().type(email);
    return this;
  }

  clickSaveButton() {
    this.saveButton.get().click();
    return new UsersPage();
  }

  saveButtonHaveText(saveButtonHaveText) {
    this.saveButton.get().should("have.text", saveButtonHaveText);
    return this;
  }
}
