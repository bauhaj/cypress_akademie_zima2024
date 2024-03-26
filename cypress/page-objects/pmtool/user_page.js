export class UsersPage extends HeaderSection {
  constructor() {
    super();
    this.pageTitle = "h3.page-title";
    cy.get(this.pageTitle).should("contain.text", "Users");
  }
}
