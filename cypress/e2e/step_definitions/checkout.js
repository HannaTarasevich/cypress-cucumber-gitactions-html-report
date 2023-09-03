import {
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import { checkoutPage } from '@pages/CheckoutPage'
import '../../support/defineParameterTypes'
import { helpers } from '@helpers'

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
  helpers.verifyCount(checkoutPage.elements.productItemTitle(), int)
  helpers.verifyCount(checkoutPage.elements.productItemDescription(), int)
  helpers.verifyCount(checkoutPage.elements.productItemPrice(), int)
  helpers.verifyCount(checkoutPage.elements.countField(), int)
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
    helpers.verifyText(checkoutPage.elements.productItemTitle(), row.title)
    helpers.verifyText(checkoutPage.elements.productItemDescription(), row.description)
    helpers.verifyText(checkoutPage.elements.productItemPrice(), row.price)
  })
})

/**
 * Check the labels of summary information.
 *
 * EXAMPLES:
 * Then The summary checkout labels are displayed
 */
Then('The summary checkout labels are displayed', () => {
  helpers.verifyText(checkoutPage.elements.summaryLabels(), 'Payment Information')
  helpers.verifyText(checkoutPage.elements.summaryLabels(), 'Shipping Information')
  helpers.verifyText(checkoutPage.elements.summaryLabels(), 'Price Total')
  helpers.verifyText(checkoutPage.elements.summaryLabels(), 'Total:')
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
  helpers.verifyText(checkoutPage.elements.paymentAndShipmentInfo(), 'SauceCard #31337')
  helpers.verifyText(checkoutPage.elements.paymentAndShipmentInfo(), 'Free Pony Express Delivery!')
  helpers.verifyText(checkoutPage.elements.itemPriceSummary(), price)
  helpers.verifyText(checkoutPage.elements.taxSummary(), tax)
  helpers.verifyText(checkoutPage.elements.summaryLabels(), (+price + +tax).toFixed(2))
})

/**
 * Check the buttons on Checkout Page.
 *
 * EXAMPLES:
 * The buttons Remove, Continue shopping and Checkout are displayed on the checkout page
 *
 * @param elementCondition - displayed, not displayed, not existing
 */
Then('The buttons Remove, Continue shopping and Checkout are {elementCondition} on the checkout page', (elementCondition) => {
  helpers.verifyElementCondition(checkoutPage.elements.removeBtn(), elementCondition)
  helpers.verifyElementCondition(checkoutPage.elements.continueShoppingBtn(), elementCondition)
  helpers.verifyElementCondition(checkoutPage.elements.checkoutBtn(), elementCondition)
})

/**
 * Check if Completed order page is displayed with expected attributes.
 *
 * EXAMPLES:
 * Then Completed order page is displayed
 *
 * @param elementCondition - displayed, not displayed, not existing
 */
Then('Completed order page is {elementCondition}', (elementCondition) => {
  helpers.verifyElementCondition(checkoutPage.elements.completedOrderImg(), elementCondition)
  helpers.verifyElementCondition(checkoutPage.elements.completedOrderBackHomeBtn(), elementCondition)
  helpers.verifyText(checkoutPage.elements.completedOrderThankYouMessage(), 'Thank you for your order!')
  helpers.verifyText(checkoutPage.elements.completedOrderInfoMessage(), 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
})
