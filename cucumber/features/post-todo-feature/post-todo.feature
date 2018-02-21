Feature: Post a todo

In order to confirm the todo endpoint API server is operational
As a consumer of the RESTful API
I want to be able to call the ping API and get a valid back

    Scenario Outline: Post a todo
        Given the API server is running
        When I ping the server with <todo>
        Then the reply status parameter should be <status>
        And the reply should contain a status <response>

        Examples:
            | todo        | status | response |
            | "Do a test" | 1      | 200      |
            | null        | 0      | 200      |
