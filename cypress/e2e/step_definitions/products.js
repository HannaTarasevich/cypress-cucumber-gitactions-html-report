import {
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import { productsPage } from '@pages/ProductsPage'
import '../../support/defineParameterTypes'

When('A user clicks on {int} "Add to Cart" button', (int) => {
  productsPage.addToCartByItemNumber(int)
})

Then('The count of displayed products is {int} in the product list', (int) => {
  productsPage.elements.productItemTitle().should('have.length', int)
  productsPage.elements.productItemDescription().should('have.length', int)
  productsPage.elements.productItemImg().should('have.length', int)
  productsPage.elements.productItemPrice().should('have.length', int)
  productsPage.elements.addToCartBtn().should('have.length', int)
})
