import hwUsersDdt from "../../../fixtures/hw_users_ddt.json";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { CreateNewUserModal } from "../../../page-objects/pmtool/create_new_user_modal";

describe("DDT For Create And Check New User", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickProjects()
      .clickUsers()
      .clickAddUserButton();
  });

  hwUsersDdt.forEach((usersData) => {
    it(`DDT project: ${usersData.description}`, () => {
      const projectName =
        usersData.username_prefix + faker.number.int({ max: 99999 });
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      cy.log(projectName);

      new CreateNewUserModal()
        .selectAccessGroupSelect(usersData.access_group)
        .usernameInputExist()
        .typeUsernameInput(projectName)
        .typePasswordInput(usersData.password)
        .typeFirstNameInput(firstName)
        .typeLastNameInput(lastName)
        .typeUserEmailInput(
          faker.internet.exampleEmail({
            firstName: firstName,
            lastName: lastName,
          })
        )
        .saveButtonHaveText("Save")
        .clickSaveButton()
        .clickProfile()
        .clickLogout()
        .typeUsername(projectName)
        .typePassword(usersData.password)
        .clickLogin()
        .clickProfile()
        .clickMyAccountButton()
        .firstNameInputHasValue(firstName)
        .lastNameInputHasValue(lastName)
        .clickProfile()
        .profileButtonHasText(firstName, lastName);
    });
  });
});
