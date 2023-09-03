import {
  Then, When
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import { headerPage } from '@pages/HeaderPage'

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
 * Then The shopping cart counter is displayed as 2
 *
 * @param int - integer
 */
Then('The shopping cart counter is displayed as {int}', (int) => {
  headerPage.elements.shoppingCartCount().should('have.text', int)
})

/**
 * Check if shopping cart counter is not displayed.
 *
 * EXAMPLES:
 * Then The shopping cart counter is not displayed
 *
 */
Then('The shopping cart counter is not displayed', () => {
  headerPage.elements.shoppingCartCount().should('not.exist')
})

/**
 * Check if header is displayed.
 *
 * EXAMPLES:
 * Then The header is displayed with Logo, Cart and Burger Menu Icon
 *
 */
Then('The header is displayed with Logo, Cart and Burger Menu Icon', () => {
  headerPage.elements.burgerMenuIcon().should('be.visible')
  headerPage.elements.logoText().should('include.text', 'Swag Labs')
  headerPage.elements.shoppingCartLink().should('be.visible')
})
