import { customElement } from "../../helpers/custom_element";

export class MyAccountPage {
  constructor() {
    this.firstNameInput = customElement("#fields_7");
    this.lastNameInput = customElement("#fields_8");
    this.profileButton = customElement("#user_dropdown .username");
  }

  firstNameInputHasValue(firstName) {
    this.firstNameInput.get().should("have.value", firstName);
    return this;
  }

  lastNameInputHasValue(lastName) {
    this.lastNameInput.get().should("have.value", lastName);
    return this;
  }

  clickProfile() {
    this.profileButton.get().click();
    return this;
  }

  profileButtonHasText(text1, text2) {
    this.profileButton
      .get()
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal(`${text1} ${text2}`);
      });
  }
}
