import {
  Then, When
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import { burgerMenu } from '@pages/BurgerMenuPage'

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
 */
Then('The Burger Menu is displayed with all options and close icon', () => {
  burgerMenu.elements.menuArea().should('be.visible')
  burgerMenu.elements.aboutOption().should('be.visible')
  burgerMenu.elements.resetAppState().should('be.visible')
  burgerMenu.elements.allItemsOption().should('be.visible')
  burgerMenu.elements.logoutOption().should('be.visible')
  burgerMenu.elements.closeIcon().should('be.visible')
})

/**
 * Check if Burger menu is not displayed.
 *
 * EXAMPLES:
 * Then The Burger Menu is not displayed
 *
 */
Then('The Burger Menu is not displayed', () => {
  burgerMenu.elements.menuArea().should('not.be.visible')
})
