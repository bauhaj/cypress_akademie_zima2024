describe("Login tests with XPath selectors", () => {
  it("Login with Xpath Selectors", () => {
    cy.visit("https://tredgate.com/pmtool/");
    cy.xpath("//input[@id='username']").type("cypress_zima_2024");
    cy.xpath("//input[@id='password']").type("Zima2024Cypress");
    cy.xpath("//button[@class='btn btn-info pull-right']").click();
    cy.xpath("//i[@class='fa fa-angle-down']").click(); // ("//li[@id='user_dropdown']")
    cy.xpath("//a[normalize-space()='Logoff']").click(); // ( //li[@id="logout"] )
  });
});
