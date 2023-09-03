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
    continueBtn: () => cy.get('#continue'),
    summaryLabels: () => cy.get('.summary_info_label'),
    paymentAndShipmentInfo: () => cy.get('.summary_value_label'),
    itemPriceSummary: () => cy.get('.summary_subtotal_label'),
    taxSummary: () => cy.get('.summary_tax_label'),
    completedOrderImg: () => cy.get('img.pony_express'),
    completedOrderThankYouMessage: () => cy.get('.complete-header'),
    completedOrderInfoMessage: () => cy.get('.complete-text'),
    completedOrderBackHomeBtn: () => cy.get('#back-to-products')
  }

  clickOnBtn (button = 'continue shopping' || 'continue' || 'cancel' || 'checkout' || 'finish' || 'back home') {
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
      case 'back home':
        this.elements.completedOrderBackHomeBtn().click()
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
