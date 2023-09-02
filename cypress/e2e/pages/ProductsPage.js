class ProductsPage {
  elements = {
    usernameInput: () => cy.get('#user-name'),
    passwordInput: () => cy.get('#password'),
    loginBtn: () => cy.get('#login-button'),
    errorMessage: () => cy.get('h3[data-test="error"]')
  }

  submitLogin (username, password) {
    this.elements.usernameInput().type(username)
    this.elements.passwordInput().type(password)
    this.elements.loginBtn().click()
  }
}

export const productsPage = new ProductsPage()
