class LoginPage {
  elements = {
    errorMessage: () => cy.get('h3[data-test="error"]'),
    loginBtn: () => cy.get('#login-button'),
    passwordInput: () => cy.get('#password'),
    usernameInput: () => cy.get('#user-name')
  }

  submitLogin (username, password) {
    this.elements.usernameInput().type(username)
    this.elements.passwordInput().type(password)
    this.elements.loginBtn().click()
  }
}

export const loginPage = new LoginPage()
