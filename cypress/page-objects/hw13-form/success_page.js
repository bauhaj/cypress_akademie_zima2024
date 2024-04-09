export class SuccessPage {
  constructor() {
    this.createdAlert = "span.maintext";
  }

  checkCreateAlert() {
    cy.get(this.createdAlert).should("exist");
    return this;
  }
}
