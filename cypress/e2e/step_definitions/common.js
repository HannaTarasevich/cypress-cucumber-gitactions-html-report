import {
  Given,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import { productsPage } from '@pages/ProductsPage'
import { helpers } from '@helpers'

/**
 * Open browser with specified path.
 *
 * EXAMPLES:
 * When A web browser is at the "products_page"
 *
 * @param path - options can be found in e2e/data/urls.js
 */
Given('A web browser is at the "{path}"', (path) => {
  cy.visit(path)
})

/**
 * Check page title.
 *
 * EXAMPLES:
 * Then The page title "Products" is displayed
 *
 * @param title - string
 * @param elementCondition - displayed, not displayed, not existing
 */
Then('The page title "{text}" is {elementCondition}', (title, elementCondition) => {
  helpers.verifyElementCondition(productsPage.elements.pageTitle(), elementCondition)
  helpers.verifyText(productsPage.elements.pageTitle(), title)
})

/**
 * Check URL.
 *
 * EXAMPLES:
 * Then The url contains the "products_page" directory
 *
 * @param path - options can be found in e2e/data/urls.js
 */
Then('The url contains the "{path}" (sub)directory', (path) => {
  cy.url().should('contains', path)
})
