import { productsPage } from '@pages/ProductsPage'

class CheckoutPage {
  elements = {
    checkoutBtn: () => cy.get('#checkout'),
    continueShoppingBtn: () => cy.get('#continue-shopping'),
    removeBtn: () => cy.get('.cart_button'),
    productItemTitle: () => productsPage.elements.productItemTitle(),
    productItemDescription: () => productsPage.elements.productItemDescription(),
    productItemPrice: () => productsPage.elements.productItemPrice(),
    firstNameInput: () => cy.get('#first-name'),
    lastNameInput: () => cy.get('#last-name'),
    zipCodeInput: () => cy.get('#postal-code'),
    finishBtn: () => cy.get('#finish'),
    countField: () => cy.get('.cart_quantity'),
    cancelBtn: () => cy.get('#cancel'),
    continueBtn: () => cy.get('#continue')
  }

  clickOnBtn (button = 'continue shopping' || 'continue' || 'cancel' || 'checkout' || 'finish') {
    switch (button) {
      case 'checkout':
        this.elements.checkoutBtn().click()
        break
      case 'cancel':
        this.elements.cancelBtn().click()
        break
      case 'continue':
        this.elements.continueBtn().click()
        break
      case 'continue shopping':
        this.elements.continueShoppingBtn().click()
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
