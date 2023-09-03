import {
  Then, When
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import { burgerMenu } from '@pages/BurgerMenuPage'

When('A user clicks on {text} option in the Burger Menu', (text) => {
  burgerMenu.selectOption(text.toLowerCase())
})
Then('The Burger Menu is displayed with all options and close icon', () => {
  burgerMenu.elements.menuArea().should('be.visible')
  burgerMenu.elements.aboutOption().should('be.visible')
  burgerMenu.elements.resetAppState().should('be.visible')
  burgerMenu.elements.allItemsOption().should('be.visible')
  burgerMenu.elements.logoutOption().should('be.visible')
  burgerMenu.elements.closeIcon().should('be.visible')
})
