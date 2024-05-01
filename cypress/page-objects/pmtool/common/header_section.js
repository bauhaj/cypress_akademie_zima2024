import { customElement } from "../../../helpers/custom_element";
import { LoginPage } from "../login_page";
import { MyAccountPage } from "../my_account_page";
import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection {
  constructor(path) {
    super(path);
    this.profileButton = customElement("#user_dropdown .username");
    this.logoutButton = customElement("#logout > a");
    this.myAccountButton = customElement(".dropdown-menu > :nth-child(1) > a");
  }

  clickProfile() {
    this.profileButton.get().click();
    return this;
  }

  clickLogout() {
    this.logoutButton.get().click();
    return new LoginPage();
  }

  clickMyAccountButton() {
    this.myAccountButton.get().click();
    return new MyAccountPage();
  }
}
