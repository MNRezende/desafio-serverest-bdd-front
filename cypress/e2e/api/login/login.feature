# language: en
Feature: API Authentication on ServeRest

    Scenario: Should log in successfully with a newly created account
        Given an existing user registered for authentication
        When I send a POST request to log in with these credentials
        Then the login API should respond with status code 200
        And the response should return a valid authorization token