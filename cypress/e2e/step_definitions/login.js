import {
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import { loginPage } from '@pages/LoginPage'
import '../../support/defineParameterTypes'

When('A user logins as "{user}"', (user) => {
  loginPage.submitLogin(user.username, user.password)
})

Then('The login error message {string} is displayed', (errorMessage) => {
  loginPage.elements.errorMessage().should('have.text', errorMessage)
})
