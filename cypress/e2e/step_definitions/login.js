import {
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import { loginPage } from '@pages/LoginPage'
import '../../support/defineParameterTypes'
import { helpers } from '@helpers'

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
 * @param elementCondition - displayed, not displayed, not existing
 */
Then('The login error message {string} is {elementCondition}', (errorMessage, elementCondition) => {
  helpers.verifyElementCondition(loginPage.elements.errorMessage(), elementCondition)
  helpers.verifyText(loginPage.elements.errorMessage(), errorMessage)
})

/**
 * Check if login page is displayed.
 *
 * EXAMPLES:
 * Then The login page is displayed
 *
 */
Then('The login page is {elementCondition}', (elementCondition) => {
  helpers.verifyElementCondition(loginPage.elements.usernameInput(), elementCondition)
  helpers.verifyElementCondition(loginPage.elements.passwordInput(), elementCondition)
})
