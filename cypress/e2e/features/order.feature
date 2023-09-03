@smoke
Feature: Make order

    Background:
        Given A web browser is at the "login_page"
        When A user logins as "standard_user"

    @TC-5
    Scenario: Success Order
        Then The url contains the "products_page" subdirectory
            And The count of displayed products is 6 in the product list
            And The page title "Products" is displayed
            And The sorting dropdown is displayed
            And The header is displayed with Logo, Cart and Burger Menu Icon
            And The footer is displayed with Twitter, LinkedIn, Facebook icons and text info
        When A user clicks on 1 "Add to Cart" button
        Then The remove button is displayed on the products page
            And The shopping cart counter is "1" item
        When A user clicks on Cart
        Then The url contains the "cart_page" subdirectory
            And The page title "Your Cart" is displayed
            And The header is displayed with Logo, Cart and Burger Menu Icon
            And The footer is displayed with Twitter, LinkedIn, Facebook icons and text info
            And The count of displayed products is 1 in the checkout list
            And The added product is displayed with the details:
                | title                 | description                                                                                                                                                     | price |
                | Sauce Labs Bike Light | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. | 9.99  |
            And The buttons Remove, Continue shopping and Checkout are displayed on the checkout page
        When A user clicks on "Checkout" button on checkout page
        Then The url contains the "checkout_page" subdirectory
            And The page title "Checkout: Your Information" is displayed
            And The footer is displayed with Twitter, LinkedIn, Facebook icons and text info
            And The header is displayed with Logo, Cart and Burger Menu Icon
        When A user enters Checkout data:
            | firstName | lastName | zipCode |
            | La        | Ka       | 15-206  |
            And A user clicks on "Continue" button on checkout page
        Then The url contains the "checkout_overview" subdirectory
            And The page title "Checkout: Overview" is displayed
            And The added product is displayed with the details:
            | title                 | description                                                                                                                                                     | price |
            | Sauce Labs Bike Light | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. | 9.99  |
            And The footer is displayed with Twitter, LinkedIn, Facebook icons and text info
            And The header is displayed with Logo, Cart and Burger Menu Icon
            And The count of displayed products is 1 in the checkout list
            And The summary checkout labels are displayed
            And The order checkout summary data is displayed with price "9.99" and tax "0.80"
        When A user clicks on "Finish" button on checkout page
        Then The url contains the "checkout_complete" subdirectory
            And The page title "Checkout: Complete!" is displayed
            And The footer is displayed with Twitter, LinkedIn, Facebook icons and text info
            And The header is displayed with Logo, Cart and Burger Menu Icon
            And Completed order page is displayed
        When A user clicks on "Back Home" button on checkout page
        Then The url contains the "products_page" subdirectory
            And The count of displayed products is 6 in the product list

    @TC-13
    Scenario: Click Continue Shopping on Cart
        When A user clicks on 1 "Add to Cart" button
            And A user clicks on Cart
            And A user clicks on "Continue shopping" button on checkout page
        Then The url contains the "products_page" subdirectory
            And The shopping cart counter is "1" item

    @TC-14
    Scenario: Click Cancel on Checkout - Your Information page
        When A user clicks on 1 "Add to Cart" button
            And A user clicks on Cart
            And A user clicks on "Checkout" button on checkout page
            And A user clicks on "Cancel" button on checkout page
        Then The url contains the "cart_page" subdirectory
            And The shopping cart counter is "1" item

    @TC-15
    Scenario: Click Cancel on Checkout - Overview page
        When A user clicks on 1 "Add to Cart" button
            And A user clicks on Cart
            And A user clicks on "Checkout" button on checkout page
            And A user enters Checkout data:
                | firstName | lastName | zipCode |
                | Lal       | Kak      | 15-207  |
            And A user clicks on "Continue" button on checkout page
            And A user clicks on "Cancel" button on checkout page
        Then The url contains the "products_page" subdirectory
            And The shopping cart counter is "1" item