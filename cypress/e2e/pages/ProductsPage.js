class ProductsPage {
  elements = {
    productItemTitle: () => cy.get('.inventory_item_name'),
    productItemDescription: () => cy.get('.inventory_item_desc'),
    productItemImg: () => cy.get('.inventory_item_img img'),
    productItemPrice: () => cy.get('.inventory_item_price'),
    addToCartBtn: () => cy.get('.pricebar .btn_primary'),
    removeBtn: () => cy.get('.btn_secondary'),
    pageTitle: () => cy.get('.title'),
    sortDropdown: () => cy.get('.product_sort_container')
  }

  addToCartByItemNumber (itemNumber) {
    this.elements.addToCartBtn().eq(itemNumber).click()
  }

  selectSortOption (option = 'Name (A to Z)' || 'Name (Z to A)' || 'Price (low to high)' || 'Price (high to low') {
    this.elements.sortDropdown().select(option)
  }
}

export const productsPage = new ProductsPage()
