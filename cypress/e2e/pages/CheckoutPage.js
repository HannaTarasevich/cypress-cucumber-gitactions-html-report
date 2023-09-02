import { productsPage } from '@pages/ProductsPage'

class CheckoutPage {
  elements = {
    checkoutBtn: () => cy.get('#checkout'),
    productItemTitle: () => productsPage.elements.productItemTitle(),
    productItemDescription: () => productsPage.elements.productItemDescription(),
    productItemPrice: () => productsPage.elements.productItemPrice(),
    firstNameInput: () => cy.get('#first-name'),
    lastNameInput: () => cy.get('#last-name'),
    zipCodeInput: () => cy.get('#postal-code'),
    continueBtn: () => cy.get('#continue'),
    finishBtn: () => cy.get('#finish')
  }

  clickOnBtn (button = 'continue' || 'checkout' || 'finish') {
    switch (button) {
      case 'checkout':
        this.elements.checkoutBtn().click()
        break
      case 'continue':
        this.elements.continueBtn().click()
        break
      case 'finish':
        this.elements.finishBtn().click()
        break
      default:
        throw new Error(`Button type ${button} is not added to the list of the checkout page locators`)
    }
  }

  enterCheckoutData (firstName, lastName, zipCode) {
    this.elements.firstNameInput().type(firstName)
    this.elements.lastNameInput().type(lastName)
    this.elements.zipCodeInput().type(zipCode)
  }
}

export const checkoutPage = new CheckoutPage()
