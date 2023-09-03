@smoke1
Feature: Login1 page

    Scenario: Incorrect Password Login1
        When A user logins as "non_existing_user"
        Then The login error message "Epic sadface: Username and password do not match any user in this service" is displayed