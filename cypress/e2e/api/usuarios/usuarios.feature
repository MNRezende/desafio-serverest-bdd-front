# language: en
Feature: API User Management on ServeRest

  Scenario: Should register a new user successfully via API
    When I send a POST request to register a dynamic user
    Then the user API should respond with status code 201
    And the response body should contain a success message and an ID