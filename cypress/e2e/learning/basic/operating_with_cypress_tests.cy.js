describe("Operating with Cypress Tests", () => {
  it("Login test", () => {
    cy.visit("https://tredgate.com/pmtool/");
    cy.get("#username").type("Brambůrka");
    cy.get("#password").type("Heslo");
    cy.get(".btn").click();
    // ! tento get spadne protože selector neexistuje
    //cy.get("#username2");
  });
});

it.only("Login test", () => {
  cy.visit("https://tredgate.com/pmtool/");
  cy.get("#username").type("cypress_zima_2024");
  cy.get("#password").type("Zima2024Cypress");
  cy.get(".btn").click();
});
