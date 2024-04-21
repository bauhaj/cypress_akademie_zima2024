import { ProjectsTasksPage } from "./projects/projects_tasks_page";

export class CreateNewProjectModal {
  constructor() {
    this.prioritySelect = 'div[data-testid="Priority"] select';
    this.statusSelect = 'div[data-testid="Status"] select';
    this.nameInput = 'div[data-testid="Name"] input';
    this.uploadFileInputXpath =
      '//div[@data-testid="Attachments"]//input[contains(@id, "uploadifive_attachments_upload")]';
    this.startDateInput = 'div[data-testid="Start Date"] input';
    this.saveButton = 'button[type="submit"]';
    this.descriptionIframe = "iframe[tabindex]";
  }

  selectPriority(priority) {
    cy.get(this.prioritySelect).select(priority);
    return this;
  }

  selectStatus(status) {
    cy.get(this.statusSelect).select(status);
    return this;
  }

  typeProjectName(projectName) {
    cy.get(this.nameInput).type(projectName);
    return this;
  }

  /**
   *
   * @param {string} startDate musí být ve formátu YYYY-MM-DD
   * @returns this page object
   */
  typeStartDate(startDate) {
    cy.get(this.startDateInput).type(startDate);
    return this;
  }

  /**
   * Je nutné nastavit v testu alias  "projectUploadFile", který se uploaduje.
   */
  insertFile() {
    cy.xpath(this.uploadFileInputXpath).selectFile("@projectUploadFile", {
      force: true,
    });
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new ProjectsTasksPage();
  }

  typeDescription(description) {
    cy.get(this.descriptionIframe).then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });
    cy.get("@iframe").type(description);
    return this;
  }
}
