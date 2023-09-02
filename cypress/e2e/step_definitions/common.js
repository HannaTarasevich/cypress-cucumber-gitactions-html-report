import {
  Given,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'

Given('A web browser is at the "{path}"', (path) => {
  cy.visit(path)
})
Then('The url contains the "{path}" subdirectory', (path) => {
  cy.url().should('contains', path)
})
