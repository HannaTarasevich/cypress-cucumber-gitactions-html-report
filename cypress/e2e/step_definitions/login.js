import {
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import { loginPage } from '@pages/LoginPage'
import '../../support/defineParameterTypes'

/**
 * Login with specified user.
 *
 * EXAMPLES:
 * When A user logins as "standard_user"
 *
 * @param user - options can be found in e2e/data/Users.js
 */
When('A user logins as "{user}"', (user) => {
  loginPage.submitLogin(user.username, user.password)
})

/**
 * Check if error message is displayed.
 *
 * EXAMPLES:
 * Then The login error message Error is displayed
 *
 * @param errorMessage - string
 */
Then('The login error message {string} is displayed', (errorMessage) => {
  loginPage.elements.errorMessage().should('have.text', errorMessage)
})

/**
 * Check if login page is displayed.
 *
 * EXAMPLES:
 * Then The login page is displayed
 *
 */
Then('The login page is displayed', (errorMessage) => {
  loginPage.elements.usernameInput().should('be.visible')
  loginPage.elements.passwordInput().should('be.visible')
})
