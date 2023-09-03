import {
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import { productsPage } from '@pages/ProductsPage'
import '../../support/defineParameterTypes'
import { helpers } from '@helpers'

When('A user clicks on {int} "Add to Cart" button', (int) => {
  productsPage.addToCartByItemNumber(int)
})

When('A user clicks on Sort Option {text}', (option) => {
  productsPage.selectSortOption(option)
})

Then('The count of displayed products is {int} in the product list', (int) => {
  productsPage.elements.productItemTitle().should('have.length', int)
  productsPage.elements.productItemDescription().should('have.length', int)
  productsPage.elements.productItemImg().should('have.length', int)
  productsPage.elements.productItemPrice().should('have.length', int)
  productsPage.elements.addToCartBtn().should('have.length', int)
})

Then('Products are sorted "{text}" in "{text}" order', (alphabeticallyOrNumerically, ascOrDesc) => {
  const possibleOrders = ['ascending', 'descending']
  const possibleFormats = ['alphabetically', 'numerically']

  if (!possibleOrders.includes(ascOrDesc.toLowerCase()) || !possibleFormats.includes(alphabeticallyOrNumerically.toLowerCase())) {
    throw new Error(`Only ${possibleFormats.join(' or ')} and ${possibleOrders.join(' or ')} can be used`)
  }

  productsPage.elements.productItemTitle().then($elements => {
    const strings = [...$elements].map(el => el.innerText)
    expect(strings).to.deep.equal(helpers.arraySorting([...strings], alphabeticallyOrNumerically, ascOrDesc))
  })
})

Then('The remove button is displayed on the products page', (text) => {
  productsPage.elements.removeBtn().should('be.visible')
})
Then('The sorting dropdown is displayed', (text) => {
  productsPage.elements.sortDropdown().should('be.visible')
})
