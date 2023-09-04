import { helpers } from '@helpers'

class BurgerMenu {
  elements = {
    aboutOption: () => cy.get('#about_sidebar_link'),
    allItemsOption: () => cy.get('#inventory_sidebar_link'),
    closeIcon: () => cy.get('#react-burger-cross-btn'),
    logoutOption: () => cy.get('#logout_sidebar_link'),
    menuArea: () => cy.get('.bm-menu'),
    resetAppState: () => cy.get('#reset_sidebar_link')
  }

  selectOption (option = 'all items' || 'about' || 'logout' || 'reset app state' || 'close') {
    switch (option) {
      case 'all items':
        this.elements.allItemsOption().click()
        break
      case 'about':
        helpers.disableLoadErrorForRedirect()
        this.elements.aboutOption().click()
        break
      case 'logout':
        this.elements.logoutOption().click()
        break
      case 'reset app state':
        this.elements.resetAppState().click()
        break
      case 'close':
        this.elements.closeIcon().click()
        break
      default:
        throw new Error(`Option ${option} is not added to the list of the burger menu items`)
    }
  }
}

export const burgerMenu = new BurgerMenu()
