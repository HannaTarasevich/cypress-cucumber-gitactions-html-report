@smoke
Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the "login_page"

    @TC-1
    Scenario: Success Login
        When A user logins as "standard_user"
        Then The url contains the "products_page" subdirectory
            And The count of displayed products is 6 in the product list
        When A user clicks on 1 "Add to Cart" button
        Then The shopping cart counter is displayed as 1
        When A user clicks on Cart
        Then The url contains the "cart_page" subdirectory
            And The count of displayed products is 1 in the checkout list
        When A user clicks on Checkout button
        Then The url contains the "checkout_page" subdirectory
        When A user enters Checkout data:
            | firstName | lastName | zipCode |
            | La        | Ka       | 15-206  |
            And A user clicks on Continue button
            And A user clicks on Finish button

    @TC-2
    Scenario: Blocked Login
        When A user logins as "locked_out_user"
        Then The login error message "Epic sadface: Sorry, this user has been locked out." is displayed

    @TC-3
    Scenario: Incorrect Username Login
        When A user logins as "standard_user_with_wrong_password"
        Then The login error message "Epic sadface: Username and password do not match any user in this service" is displayed

    @TC-4
    Scenario: Incorrect Password Login
        When A user logins as "non_existing_user"
        Then The login error message "Epic sadface: Username and password do not match any user in this service" is displayed