@smoke
Feature: Side menu

    Background:
        Given A web browser is at the "login_page"

    @TC-7
    Scenario: Side menu - Options
        When A user logins as "standard_user"
        Then The url contains the "products_page" subdirectory
        When A user clicks on Burger Menu
        Then The Burger Menu is displayed with all options and close icon

    @TC-8
    Scenario: Side menu - Log out
        When A user logins as "standard_user"
        Then The url contains the "products_page" subdirectory
        When A user clicks on Burger Menu
        Then A user clicks on Logout option in the Burger Menu
            And The login page is displayed

    @TC-9
    Scenario: Side menu - Reset App State
        When A user logins as "standard_user"
        Then The url contains the "products_page" subdirectory
        When A user clicks on 1 "Add to Cart" button
        Then The remove button is displayed on the products page
            And The shopping cart counter is displayed as 1
        When A user clicks on Burger Menu
        Then A user clicks on Reset App State option in the Burger Menu
            And The shopping cart counter is not displayed

    @TC-10
    Scenario: Side menu - All Items option
        When A user logins as "standard_user"
        Then The url contains the "products_page" subdirectory
        When A user clicks on 1 "Add to Cart" button
            And A user clicks on Cart
        Then The url contains the "cart_page" subdirectory
        When A user clicks on Burger Menu
        Then A user clicks on All Items option in the Burger Menu
            And The url contains the "products_page" subdirectory

    @TC-11
    Scenario: Side menu - Close
        When A user logins as "standard_user"
        Then The url contains the "products_page" subdirectory
        When A user clicks on Burger Menu
            And A user clicks on Close option in the Burger Menu
        Then The Burger Menu is not displayed