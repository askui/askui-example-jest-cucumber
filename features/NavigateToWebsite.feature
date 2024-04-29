Feature: Navigate to a website

Scenario: Entering the correct URL into the browser address bar
    Given I am on the Google search page
    When I type in the URL for AskUI practice page
    Then I will land on the webpage