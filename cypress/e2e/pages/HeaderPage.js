class HeaderPage {
  elements = {
    shoppingCartLink: () => cy.get('.shopping_cart_link'),
    shoppingCartCount: () => cy.get('.shopping_cart_badge'),
    burgerMenuIcon: () => cy.get('#react-burger-menu-btn'),
    logoText: () => cy.get('.app_logo')
  }

  goToCart () {
    this.elements.shoppingCartLink().click()
  }

  openBurgerMenu () {
    this.elements.burgerMenuIcon().click()
  }
}

export const headerPage = new HeaderPage()
