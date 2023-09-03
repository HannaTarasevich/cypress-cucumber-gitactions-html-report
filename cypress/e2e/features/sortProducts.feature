@smoke @TC-12
Feature: Sort products

    Scenario: Sort products
        Given A web browser is at the "login_page"
        When A user logins as "standard_user"
        Then The url contains the "products_page" subdirectory
            And The sorting dropdown is displayed
        When A user clicks on Sort Option Name (Z to A)
        Then Products are sorted "alphabetically" in "descending" order
        When A user clicks on Sort Option Name (A to Z)
        Then Products are sorted "alphabetically" in "ascending" order
        When A user clicks on Sort Option Price (low to high)
        Then Products are sorted "numerically" in "ascending" order
        When A user clicks on Sort Option Price (high to low)
        Then Products are sorted "numerically" in "descending" order