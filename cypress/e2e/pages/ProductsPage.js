class ProductsPage {
  elements = {
    productItemTitle: () => cy.get('.inventory_item_name'),
    productItemDescription: () => cy.get('.inventory_item_desc'),
    productItemImg: () => cy.get('.inventory_item_img img'),
    productItemPrice: () => cy.get('.inventory_item_price'),
    addToCartBtn: () => cy.get('.pricebar .btn_primary')
  }

  addToCartByItemNumber (itemNumber) {
    this.elements.addToCartBtn().eq(itemNumber).click()
  }
}

export const productsPage = new ProductsPage()
