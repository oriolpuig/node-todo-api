Feature: Create a todo

In order to confirm the todo endpoint is operational
As a consumer of the API
I want to be able to create a todo

    Scenario Outline: Create a basic todo
        Given the API server is running
        When I request the server with:
            | todo | 'Do a test' |
        Then the reply status parameter should be <status>
        And the reply should contain a status <response>
        Examples:
            | status | response |
            | 1      | 200      |

    Scenario Outline: Create a todo
        Given the API server is running
        When I request the server with <todo>
        Then the reply status parameter should be <status>
        And the reply should contain a status <response>

        Examples:
            | todo        | status | response |
            | "Do a test" | 1      | 200      |
            | null        | 0      | 200      |

