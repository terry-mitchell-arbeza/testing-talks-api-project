Feature: As an API I can edit posts

  @smoke
  @regression
  Scenario: As an API I can edit a post
    Given I patch the 1st "posts" with a "new title"
    And the response was successful
    Then the response status code is 200
    And the response data contains the attributes:
      | userId | 1                    |
      | id     | 1                    |
      | title  | Just an edited title |