Feature: Scenarios related to login functionality

@smokeTest
Scenario: Verify user is login into application
Given user launches site
When he enters uesrname "mngr174320" and password "Anysema"
Then he should be navigated to homepage

@e2eTest
Scenario Outline: Verify user is login into application
Given user launches site
When he enters uesrname "<u_name>" and password "<passwd>"
Then he should be navigated to homepage
Examples:
|u_name|passwd|
|mngr174320|Anysema|
|test123|345|
|test123|test123|

@smokeTest
Scenario: Verify user is login into application
Given user launches site
When he enters uesrname "mngr174320" and password "Anysema"
Then he should be navigated to homepage

