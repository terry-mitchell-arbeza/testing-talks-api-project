Feature: As an API I can delete posts

  @smoke
  @regression
  Scenario: As an API I can delete a specific post
    Given I delete the 1st "posts"
    And the response was successful
    Then the response status code is 200
    And the response data contains the attributes:
      | {} |