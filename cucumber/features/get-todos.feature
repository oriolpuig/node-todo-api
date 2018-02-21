Feature: Get all todos

In order to confirm the todo endpoint is operational
As a consumer of the API
I want to be able to get all todos

    Scenario Outline: Get todos
        Given the API server is running
        When I request the server with HttpGet
        Then the reply status parameter should be <status>
        And the reply should contain a status <response>
        Examples:
            | status | response |
            | 1      | 200      |
