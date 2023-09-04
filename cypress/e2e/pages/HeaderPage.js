class HeaderPage {
  elements = {
    burgerMenuIcon: () => cy.get('#react-burger-menu-btn'),
    logoText: () => cy.get('.app_logo'),
    shoppingCartCount: () => cy.get('.shopping_cart_badge'),
    shoppingCartLink: () => cy.get('.shopping_cart_link')
  }

  goToCart () {
    this.elements.shoppingCartLink().click()
  }

  openBurgerMenu () {
    this.elements.burgerMenuIcon().click()
  }
}

export const headerPage = new HeaderPage()
