import {
  Then, When
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import { burgerMenu } from '@pages/BurgerMenuPage'
import { helpers } from '@helpers'

/**
 * Click on option in Burger menu.
 *
 * EXAMPLES:
 * When A user clicks on About option in the Burger Menu
 *
 * @param text - 'all items', 'about', 'logout', 'reset app state', 'close'
 */
When('A user clicks on {text} option in the Burger Menu', (text) => {
  burgerMenu.selectOption(text.toLowerCase())
})

/**
 * Check if Burger menu with all options and close icon is displayed.
 *
 * EXAMPLES:
 * Then The Burger Menu is displayed with all options and close icon
 *
 * @param elementCondition - displayed, not displayed, not existing
 */
Then('The Burger Menu is {elementCondition} with all options and close icon', (elementCondition) => {
  helpers.verifyElementCondition(burgerMenu.elements.menuArea(), elementCondition)
  helpers.verifyElementCondition(burgerMenu.elements.aboutOption(), elementCondition)
  helpers.verifyElementCondition(burgerMenu.elements.resetAppState(), elementCondition)
  helpers.verifyElementCondition(burgerMenu.elements.allItemsOption(), elementCondition)
  helpers.verifyElementCondition(burgerMenu.elements.logoutOption(), elementCondition)
  helpers.verifyElementCondition(burgerMenu.elements.closeIcon(), elementCondition)
})
