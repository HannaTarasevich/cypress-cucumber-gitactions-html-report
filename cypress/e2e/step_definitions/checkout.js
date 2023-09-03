import {
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import { checkoutPage } from '@pages/CheckoutPage'
import '../../support/defineParameterTypes'

When('A user clicks on {text} button', (text) => {
  checkoutPage.clickOnBtn(text.toLowerCase())
})

When('A user enters Checkout data:', (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.firstName)
    cy.log(row.lastName)
    cy.log(row.zipCode)
    checkoutPage.enterCheckoutData(row.firstName, row.lastName, row.zipCode)
  })
})

Then('The count of displayed products is {int} in the checkout list', (int) => {
  checkoutPage.elements.productItemTitle().should('have.length', int)
  checkoutPage.elements.productItemDescription().should('have.length', int)
  checkoutPage.elements.productItemPrice().should('have.length', int)
})

Then('The remove button is displayed on the checkout page', (text) => {
  checkoutPage.elements.removeBtn().should('be.visible')
})
