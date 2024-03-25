import { HwLoginPage } from "./login_page";
import { HwProjectsPage } from "./projects_hw_page";

export class HwHomePage {
  constructor() {
    this.projectsButton = "#Projects";
    this.profileButton = "#user_dropdown > .dropdown-toggle";
    this.logoutButton = "#logout > a";
  }

  clickProjects() {
    cy.get(this.projectsButton).click();
    return new HwProjectsPage();
  }

  clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new HwLoginPage();
  }
}
