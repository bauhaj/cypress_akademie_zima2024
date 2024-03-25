import { HwLoginPage } from "../../../page-objects/homework-projects/login_page";
import { faker } from "@faker-js/faker";

describe("Create New Project In Pmtool", () => {
  beforeEach(() => {
    new HwLoginPage().openPmtool();
  });

  it("Add new project in Pmtool, save and logout", () => {
    new HwLoginPage()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .clickProjects()
      .clickAddProjectButton()
      .typeName(faker.commerce.productName())
      .clickSaveButton()
      .clickProfile()
      .clickLogout();
  });
});
