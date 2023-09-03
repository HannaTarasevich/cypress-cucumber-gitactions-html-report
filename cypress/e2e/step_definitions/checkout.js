import {
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import { checkoutPage } from '@pages/CheckoutPage'
import '../../support/defineParameterTypes'

/**
 * Click on button on Checkout page.
 *
 * EXAMPLES:
 * When A user clicks on "Cancel" button on checkout page
 *
 * @param text - 'continue shopping', 'continue', 'cancel', 'checkout', 'finish', 'back home'
 */
When('A user clicks on "{text}" button on checkout page', (text) => {
  checkoutPage.clickOnBtn(text.toLowerCase())
})

/**
 * Enter data in Checkout form.
 *
 * EXAMPLES:
 * When A user enters Checkout data:
 * |firstName|lastName|zipCode|
 * |x        |y       |15     |
 *
 * @param table - headers are firstName, lastName, zipCode
 */
When('A user enters Checkout data:', (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.firstName)
    cy.log(row.lastName)
    cy.log(row.zipCode)
    checkoutPage.enterCheckoutData(row.firstName, row.lastName, row.zipCode)
  })
})

/**
 * Check count of items on Checkout page.
 *
 * EXAMPLES:
 * Then The count of displayed products is 2 in the checkout list
 *
 * @param int - integer
 */
Then('The count of displayed products is {int} in the checkout list', (int) => {
  checkoutPage.elements.productItemTitle().should('have.length', int)
  checkoutPage.elements.productItemDescription().should('have.length', int)
  checkoutPage.elements.productItemPrice().should('have.length', int)
  checkoutPage.elements.countField().should('contain.text', int)
})

/**
 * Check details of the product on checkout page
 *
 * EXAMPLES:
 * Then The added product is displayed with the details:
 * |title|description|price|
 * |x    |y          |1    |
 *
 * @param table - headers are title, description, price
 */
Then('The added product is displayed with the details:', (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.title)
    cy.log(row.description)
    cy.log(row.price)
    checkoutPage.elements.productItemTitle().should('contain.text', row.title)
    checkoutPage.elements.productItemDescription().should('contain.text', row.description)
    checkoutPage.elements.productItemPrice().should('contain.text', row.price)
  })
})

/**
 * Check the labels of summary information.
 *
 * EXAMPLES:
 * Then The summary checkout labels are displayed
 */
Then('The summary checkout labels are displayed', () => {
  checkoutPage.elements.summaryLabels().should('contain.text', 'Payment Information')
  checkoutPage.elements.summaryLabels().should('contain.text', 'Shipping Information')
  checkoutPage.elements.summaryLabels().should('contain.text', 'Price Total')
  checkoutPage.elements.summaryLabels().should('contain.text', 'Total:')
})

/**
 * Click on button on Checkout page.
 *
 * EXAMPLES:
 * Then The order checkout summary data is displayed with price "10" and tax "0.8"
 *
 * @param price - number
 * @param tax - number
 */
Then('The order checkout summary data is displayed with price "{text}" and tax "{text}"', (price, tax) => {
  checkoutPage.elements.summaryLabels().should('contain.text', 'Payment Information')
  checkoutPage.elements.summaryLabels().should('contain.text', 'Shipping Information')
  checkoutPage.elements.summaryLabels().should('contain.text', 'Price Total')
  checkoutPage.elements.summaryLabels().should('contain.text', 'Total:')
  checkoutPage.elements.paymentAndShipmentInfo().should('contain.text', 'SauceCard #31337')
  checkoutPage.elements.paymentAndShipmentInfo().should('contain.text', 'Free Pony Express Delivery!')
  checkoutPage.elements.itemPriceSummary().should('contain.text', price)
  checkoutPage.elements.taxSummary().should('contain.text', tax)
  checkoutPage.elements.summaryLabels().should('contain.text', (+price + +tax).toFixed(2))
})

/**
 * Check the buttons on Checkout Page.
 *
 * EXAMPLES:
 * The buttons Remove, Continue shopping and Checkout are displayed on the checkout page
 */
Then('The buttons Remove, Continue shopping and Checkout are displayed on the checkout page', () => {
  checkoutPage.elements.removeBtn().should('be.visible')
  checkoutPage.elements.continueShoppingBtn().should('be.visible')
  checkoutPage.elements.checkoutBtn().should('be.visible')
})

/**
 * Check if Completed order page is displayed with expected attributes.
 *
 * EXAMPLES:
 * Then Completed order page is displayed
 */
Then('Completed order page is displayed', () => {
  checkoutPage.elements.completedOrderImg().should('be.visible')
  checkoutPage.elements.completedOrderThankYouMessage().should('contain.text', 'Thank you for your order!')
  checkoutPage.elements.completedOrderInfoMessage().should('contain.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
  checkoutPage.elements.completedOrderBackHomeBtn().should('be.visible')
})
