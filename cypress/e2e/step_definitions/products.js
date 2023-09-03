import {
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import { productsPage } from '@pages/ProductsPage'
import '../../support/defineParameterTypes'
import { helpers } from '@helpers'

/**
 * Click on Add to Card button.
 *
 * EXAMPLES:
 * When A user clicks on 1 "Add to Cart" button
 *
 * @param int - integer
 */
When('A user clicks on {int} "Add to Cart" button', (int) => {
  productsPage.addToCartByItemNumber(int)
})

/**
 * Check count of items in Product List.
 *
 * EXAMPLES:
 * When A user clicks on Sort Option Name (A to Z)
 *
 * @param option - 'Name (A to Z)', 'Name (Z to A)', 'Price (low to high)', 'Price (high to low)'
 */
When('A user clicks on Sort Option {text}', (option) => {
  productsPage.selectSortOption(option)
})

/**
 * Check count of items in Product List.
 *
 * EXAMPLES:
 * Then The count of displayed products is 2 in the product list
 *
 * @param int - integer
 */
Then('The count of displayed products is {int} in the product list', (int) => {
  productsPage.elements.productItemTitle().should('have.length', int)
  productsPage.elements.productItemDescription().should('have.length', int)
  productsPage.elements.productItemImg().should('have.length', int)
  productsPage.elements.productItemPrice().should('have.length', int)
  productsPage.elements.addToCartBtn().should('have.length', int)
})

/**
 * Check products sorting.
 *
 * EXAMPLES:
 * Products are sorted "numerically" in "ascending" order
 *
 * @param alphabeticallyOrNumerically - alphabetically or numerically
 * @param ascOrDesc - ascending or descending
 */
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

/**
 * Check if remove button is displayed.
 *
 * EXAMPLES:
 * The remove button is displayed on the products page
 *
 */
Then('The remove button is displayed on the products page', (text) => {
  productsPage.elements.removeBtn().should('be.visible')
})

/**
 * Check if sorting dropdown is displayed.
 *
 * EXAMPLES:
 * The sorting dropdown is displayed
 *
 */
Then('The sorting dropdown is displayed', (text) => {
  productsPage.elements.sortDropdown().should('be.visible')
})
