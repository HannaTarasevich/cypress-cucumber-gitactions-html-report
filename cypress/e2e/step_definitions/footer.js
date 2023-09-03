import {
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import { footerPage } from '@pages/FooterPage'

Then('The footer is displayed with Twitter,  LinkedIn, Facebook icons and text info', (text) => {
  footerPage.elements.linkedinIcon().should('be.visible')
  footerPage.elements.facebookIcon().should('be.visible')
  footerPage.elements.twitterIcon().should('be.visible')
  footerPage.elements.infoText().should('include.text', '©')
  footerPage.elements.infoText().should('include.text', new Date().getFullYear())
  footerPage.elements.infoText().should('include.text', 'Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
})
