import { HeaderSection } from "../common/header_section";

export class ProjectInfoPage extends HeaderSection {
  /**
   *
   * @param {projectId} projectId used for direct page opening in Atomic Tests
   */
  constructor(projectId = "") {
    super(`module=items/info&path=21-${projectId}`);
    this.projectTitleDiv = ".portlet-title .caption";
    this.dateAddedValue = "tr.form-group-154 td";
    this.createdByValue = "tr.form-group-155 td";
    this.priorityValue = "tr.form-group-156 td div";
    this.statusValue = "tr.form-group-157 td div";
    this.startDateValue = "tr.form-group-159 td";
    this.statusDiv = "tr.form-group-157 td div";
    this.startDateTd = "tr.form-group-159 td";
    this.priorityDiv = "tr.form-group-156 td div";
    this.descriptionDiv = ".portlet-body .content_box_content";
  }

  projectTitleHasText(projectTitle) {
    cy.get(this.projectTitleDiv).should("contain.text", projectTitle);
    return this;
  }

  dateAddedHasText(dateAdded) {
    cy.get(this.dateAddedValue).should("contain.text", dateAdded);
    return this;
  }

  createdByHasText(creator) {
    cy.get(this.createdByValue).should("have.text", creator);
    return this;
  }

  projectHavePriority(priority) {
    cy.get(this.priorityValue).should("have.text", priority);
    return this;
  }

  projectHaveStatus(status) {
    cy.get(this.statusValue).should("have.text", status);
    return this;
  }

  projectHaveStartDate(startDate) {
    cy.get(this.startDateValue).should("have.text", startDate);
    return this;
  }

  startDateHasText(startDateText) {
    cy.get(this.startDateTd).should("have.text", startDateText);
    return this;
  }

  statusHasText(statusText) {
    cy.get(this.statusDiv).should("have.text", statusText);
    return this;
  }

  priorityHasText(priority) {
    cy.get(this.priorityDiv).should("have.text", priority);
    return this;
  }

  descriptionHasText(description) {
    cy.get(this.descriptionDiv).should("have.text", description);
    return this;
  }
}
