Feature: As an API I can create posts

  @smoke
  @regression
  Scenario: As an API I can create a post
    Given I create a new "posts" with "new post"
    And the response was successful
    Then the response status code is 201
    And the response data contains the attributes:
      | userId | 1                  |
      | id     | 101                |
      | title  | New Post           |
      | body   | This is a new post |