import { customElement } from "../../helpers/custom_element";

export class AccountsPage {
  constructor() {
    this.titleAccount = customElement('[data-testid="title"]');
  }

  titleAccounHasText(titleText) {
    this.titleAccount.hasText(titleText);
    return this;
  }
}
