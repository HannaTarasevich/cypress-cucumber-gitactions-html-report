import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import { loginPage } from '@pages/LoginPage'
import '../../support/defineParameterTypes'

Given('A web browser is at the saucelabs login page', () => {
  cy.visit('/')
})

When('A user logins as "{user}"', (user) => {
  loginPage.submitLogin(user.username, user.password)
})

Then('the url will contains the inventory subdirectory', () => {
  cy.url().should('contains', '/inventory.html')
})
Then('The error message {string} is displayed', (errorMessage) => {
  loginPage.elements.errorMessage().should('have.text', errorMessage)
})
