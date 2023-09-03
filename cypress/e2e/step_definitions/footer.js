import {
  Then
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import { footerPage } from '@pages/FooterPage'
import { helpers } from '@helpers'

/**
 * Check if footer is displayed.
 *
 * EXAMPLES:
 * Then The footer is displayed with Twitter, LinkedIn, Facebook icons and text info
 *
 * @param elementCondition - displayed, not displayed, not existing
 */
Then('The footer is {elementCondition} with Twitter, LinkedIn, Facebook icons and text info', (elementCondition) => {
  helpers.verifyElementCondition(footerPage.elements.linkedinIcon(), elementCondition)
  helpers.verifyElementCondition(footerPage.elements.facebookIcon(), elementCondition)
  helpers.verifyElementCondition(footerPage.elements.twitterIcon(), elementCondition)
  helpers.verifyText(footerPage.elements.infoText(), '©')
  helpers.verifyText(footerPage.elements.infoText(), new Date().getFullYear())
  helpers.verifyText(footerPage.elements.infoText(), 'Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
})
