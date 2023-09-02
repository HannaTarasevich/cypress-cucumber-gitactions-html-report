class HeaderPage {
  elements = {
    shoppingCartLink: () => cy.get('.shopping_cart_link'),
    shoppingCartCount: () => cy.get('.shopping_cart_badge')
  }

  goToCart () {
    this.elements.shoppingCartLink().click()
  }
}

export const headerPage = new HeaderPage()
