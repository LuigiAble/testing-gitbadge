import { Selector, t } from "testcafe";

export default class LoginPageModel {
  constructor() {
    this.emailVariable = Selector("#session_email");
    this.passwordVariable = Selector("#session_password");
    this.logInBoton = Selector("input").withAttribute("name", "commit");
  }

  async login(userInformation) {
    await t
      .typeText(this.emailInputText, userInformation.email, { paste: true })
      .typeText(this.passwordInputText, userInformation.password)
      .click(this.logInButton);
  }
}
