Feature: Authentication and Registration on ServeRest
  As a system user
  I want to be able to register and log in
  In order to access the application dashboard

  Background:
    Given I navigate to the registration page

  Scenario: 1 - Should register a new administrator user successfully
    When I register a new user with valid data
    Then I should be redirected to the dashboard with a welcome message

  Scenario: 2 - Should log in successfully with an existing account
    Given I navigate to the login page
    When I enter credentials of a registered user
    Then I should see the logout button available on the dashboard

  Scenario: 3 - Should display an error message when attempting log in with invalid password
    Given I navigate to the login page
    When I attempt to log in with an incorrect password
    Then the system should display the error message "Email e/ou senha inválidos"