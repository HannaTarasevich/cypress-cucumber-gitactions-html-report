class BurgerMenu {
  elements = {
    menuArea: () => cy.get('.bm-menu'),
    allItemsOption: () => cy.get('#inventory_sidebar_link'),
    aboutOption: () => cy.get('[href=\'https://saucelabs.com/\']'),
    logoutOption: () => cy.get('#logout_sidebar_link'),
    resetAppState: () => cy.get('#reset_sidebar_link'),
    closeIcon: () => cy.get('#react-burger-cross-btn')
  }

  selectOption (option = 'all items' || 'about' || 'logout' || 'reset app state' || 'close') {
    switch (option) {
      case 'all items':
        this.elements.allItemsOption().click()
        break
      case 'about':
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
