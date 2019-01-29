$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Workspace/BDDDemo1/src/main/java/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Scenarios related to login on application",
  "description": "",
  "id": "scenarios-related-to-login-on-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify user is login into application",
  "description": "",
  "id": "scenarios-related-to-login-on-application;verify-user-is-login-into-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user launches site",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#When he enters uesrname and password"
    }
  ],
  "line": 6,
  "name": "he should be navigated to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepDefinition.user_launches_site()"
});
formatter.result({
  "duration": 15622475787,
  "status": "passed"
});
formatter.match({
  "location": "loginstepDefinition.he_should_be_navigated_to_homepage()"
});
formatter.result({
  "duration": 38444030,
  "status": "passed"
});
});