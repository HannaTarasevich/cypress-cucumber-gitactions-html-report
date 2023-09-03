import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'

Given('A web browser is at the "{path}"', (path) => {
  cy.visit(path)
})

When('A user refreshes page', () => {
  cy.reload()
})

Then('The url contains the "{path}" (sub)directory', (path) => {
  cy.url().should('contains', path)
})
