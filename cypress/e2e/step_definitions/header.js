import {
  Then, When
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import { headerPage } from '@pages/HeaderPage'

When('A user clicks on Cart', () => {
  headerPage.goToCart()
})

When('A user clicks on Burger Menu', () => {
  headerPage.openBurgerMenu()
})
Then('The shopping cart counter is displayed as {int}', (int) => {
  headerPage.elements.shoppingCartCount().should('have.text', int)
})

Then('The shopping cart counter is not displayed', () => {
  headerPage.elements.shoppingCartCount().should('not.exist')
})

Then('The header is displayed with Logo, Cart and Burger Menu Icon', () => {
  headerPage.elements.burgerMenuIcon().should('be.visible')
  headerPage.elements.logoText().should('include.text', 'Swag Labs')
  headerPage.elements.shoppingCartLink().should('be.visible')
})
