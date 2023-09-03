import {
  Then, When
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import { headerPage } from '@pages/HeaderPage'
import { helpers } from '@helpers'

When('A user clicks on Cart', () => {
  headerPage.goToCart()
})

/**
 * Click on Burger Menu.
 *
 * EXAMPLES:
 * When A user clicks on Burger Menu
 *
 */
When('A user clicks on Burger Menu', () => {
  headerPage.openBurgerMenu()
})
/**
 * Check the count near Shopping Cart.
 *
 * EXAMPLES:
 * Then The shopping cart counter is displayed
 *
 * @param int - integer
 */
Then('The shopping cart counter is {elementCondition}', (elementCondition) => {
  helpers.verifyElementCondition(headerPage.elements.shoppingCartCount(), elementCondition)
})

/**
 * Check if shopping cart counter.
 *
 * EXAMPLES:
 * Then The shopping cart counter is "2"
 *
 * @param count - integer
 */
Then('The shopping cart counter is "{int}" item(s)', (count) => {
  helpers.verifyCount(headerPage.elements.shoppingCartCount(), count)
})

/**
 * Check if header is displayed.
 *
 * EXAMPLES:
 * Then The header is displayed with Logo, Cart and Burger Menu Icon
 *
 * @param elementCondition - displayed, not displayed, not existing
 */
Then('The header is {elementCondition} with Logo, Cart and Burger Menu Icon', (elementCondition) => {
  helpers.verifyElementCondition(headerPage.elements.burgerMenuIcon(), elementCondition)
  helpers.verifyElementCondition(headerPage.elements.logoText(), elementCondition)
  helpers.verifyText(headerPage.elements.logoText(), 'Swag Labs')
  helpers.verifyElementCondition(headerPage.elements.shoppingCartLink(), elementCondition)
})
