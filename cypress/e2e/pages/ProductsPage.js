class ProductsPage {
  elements = {
    productItemTitle: () => cy.get('.inventory_item_name'),
    productItemDescription: () => cy.get('.inventory_item_desc'),
    productItemImg: () => cy.get('.inventory_item_img img'),
    productItemPrice: () => cy.get('.inventory_item_price'),
    addToCartBtn: () => cy.get('.pricebar .btn_primary'),
    removeBtn: () => cy.get('.btn_secondary'),
    pageTitle: () => cy.get('.title'),
    sortDropdown: () => cy.get('.product_sort_container'),
    sortDropdownValues: () => cy.get('option[value]')
  }

  addToCartByItemNumber (itemNumber) {
    this.elements.addToCartBtn().eq(itemNumber).click()
  }
}

export const productsPage = new ProductsPage()
