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

Then('The page title "{text}" is displayed', (text) => {
  productsPage.elements.pageTitle().should('have.text', text)
})

Then('The remove button is displayed on the products page', (text) => {
  productsPage.elements.removeBtn().should('be.visible')
})
Then('The sorting dropdown is displayed', (text) => {
  productsPage.elements.sortDropdown().should('be.visible')
})
