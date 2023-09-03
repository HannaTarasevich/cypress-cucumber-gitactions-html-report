@smoke
Feature: Login page

    Background:
        Given A web browser is at the "login_page"

    @TC-1
    Scenario: Success Login
        When A user logins as "standard_user"
        Then The url contains the "products_page" subdirectory
            And The page title "Products" is displayed

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