import newProjectData from "../../fixtures/new_project_data.json";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { CreateNewProjectModal } from "../../page-objects/pmtool/create_new_project_modal";

describe("Data Driven Tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickProjects()
      .clickAddProject();
  });

  newProjectData.forEach((projectData) => {
    it(`DDT Project: ${projectData.description}`, () => {
      let startDate;
      const projectName =
        projectData.name_prefix + faker.number.int({ max: 99999 });
      cy.log(projectName);
      startDate = generateStartDate(projectData.start_date, "YYYY-MM-DD");
      cy.log(startDate);

      new CreateNewProjectModal()
        .selectPriority(projectData.priority)
        .selectStatus(projectData.status)
        .typeProjectName(projectName)
        .typeStartDate(startDate)
        .typeDescription(projectData.description)
        .clickSave()
        .clickProjectInfo()
        .projectTitleHasText(projectName)
        .projectHaveStartDate(
          generateStartDate(projectData.start_date, "DD/MM/YYYY")
        )
        .projectHaveStatus(projectData.status)
        .projectHavePriority(projectData.priority);
    });
  });
});

function generateStartDate(startDate, format) {
  switch (startDate) {
    case "today":
      startDate = moment().format(format);
      break;
    case "tomorrow":
      startDate = moment().add(1, "days").format(format);
      break;
    case "yesterday":
      startDate = moment().subtract(1, "days").format(format);
      break;
    default:
      throw new Error("Invalid start date");
  }
  return startDate;
}
