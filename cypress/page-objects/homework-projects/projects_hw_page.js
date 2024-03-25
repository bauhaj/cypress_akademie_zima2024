import { HwHomePage } from "./home_page";

export class HwProjectsPage {
  constructor() {
    this.addProjectButton = "button[test_id='Add Project']";
    this.nameInput = "#fields_158";
    this.saveButton =
      "button[class='btn btn-primary btn-primary-modal-action']";
  }

  clickAddProjectButton() {
    cy.get(this.addProjectButton).click();
    return this;
  }

  typeName(name) {
    cy.get(this.nameInput).type(name);
    return this;
  }

  clickSaveButton() {
    cy.get(this.saveButton).click();
    return new HwHomePage();
  }
}
