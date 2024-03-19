describe("Hw6 Simply Cypress Test", () => {
  it("Open and Fill Register", () => {
    cy.visit("http://tredgate.com/eshop/index.php?route=account/register");

    const firstName = "Brambůrka";
    const lastName = "Zemiaková";
    const email = "bramburka@test.cz";
    const telephone = "+420123456789";
    const password = "Heslo123";
    const passwordConfirm = "Heslo123";

    cy.get("#input-firstname").type(firstName);
    cy.get("#input-lastname").type(lastName);
    cy.get("#input-email").type(email);
    cy.get("#input-telephone").type(telephone);
    cy.get("#input-password").type(password);
    cy.get("#input-confirm").type(passwordConfirm);
    cy.get(".pull-right > .btn").click();
  });
});
