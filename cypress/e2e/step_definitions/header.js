import {
  Then, When
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import { headerPage } from '@pages/HeaderPage'

When('A user clicks on Cart', () => {
  headerPage.goToCart()
})
Then('The shopping cart counter is displayed as {int}', (int) => {
  headerPage.elements.shoppingCartCount().should('have.text', int)
})
