Feature: Update a todo

In order to confirm the todo endpoint is operational
As a consumer of the API
I want to be able to update a todo

    Scenario Outline: Update a todo status
        Given the API server is running and has todos
        When I request the server with HttpPut
        Then the reply status parameter should be <status>
        And the reply should contain a status <response>

        Examples:
            | status | response | count |
            | 1      | 200      | 0     |
