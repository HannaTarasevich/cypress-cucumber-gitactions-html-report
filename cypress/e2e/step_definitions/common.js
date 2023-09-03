import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import { productsPage } from '@pages/ProductsPage'

Given('A web browser is at the "{path}"', (path) => {
  cy.visit(path)
})

When('A user refreshes page', () => {
  cy.reload()
})

Then('The page title "{text}" is displayed', (text) => {
  productsPage.elements.pageTitle().should('have.text', text)
})

Then('The url contains the "{path}" (sub)directory', (path) => {
  cy.url().should('contains', path)
})
