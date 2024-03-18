export class HomePageTredgateEshop {
  constructor() {
    this.eshopUrl = "https://tredgate.com/eshop/";
    this.myAccountButton = ".list-inline > .dropdown > .dropdown-toggle";
    this.RegisterButton = ".dropdown-menu > :nth-child(1) > a";
  }

  openEshopUrl() {
    cy.visit(this.eshopUrl);
    return this;
  }

  clickMyAccountButton() {
    cy.get(this.myAccountButton).click();
    return this;
  }

  clickRegisterButton() {
    cy.get(this.RegisterButton).click();
    // return new stránka
  }
}
