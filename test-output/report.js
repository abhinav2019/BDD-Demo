$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Workspace/BDDDemo1/src/main/java/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Scenarios related to login functionality",
  "description": "",
  "id": "scenarios-related-to-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify user is login into application",
  "description": "",
  "id": "scenarios-related-to-login-functionality;verify-user-is-login-into-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he enters uesrname \"mngr174320\" and password \"Anysema\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "he should be navigated to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepDefinition.user_launches_site()"
});
formatter.result({
  "duration": 33418373853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr174320",
      "offset": 20
    },
    {
      "val": "Anysema",
      "offset": 46
    }
  ],
  "location": "loginstepDefinition.he_enters_uesrname_and_password(String,String)"
});
formatter.result({
  "duration": 19391224199,
  "status": "passed"
});
formatter.match({
  "location": "loginstepDefinition.he_should_be_navigated_to_homepage()"
});
formatter.result({
  "duration": 4936567467,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user is login into application",
  "description": "",
  "id": "scenarios-related-to-login-functionality;verify-user-is-login-into-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user launches site",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "he enters uesrname \"mngr174320\" and password \"Anysema\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "he should be navigated to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepDefinition.user_launches_site()"
});
formatter.result({
  "duration": 12511066186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr174320",
      "offset": 20
    },
    {
      "val": "Anysema",
      "offset": 46
    }
  ],
  "location": "loginstepDefinition.he_enters_uesrname_and_password(String,String)"
});
formatter.result({
  "duration": 7774789256,
  "status": "passed"
});
formatter.match({
  "location": "loginstepDefinition.he_should_be_navigated_to_homepage()"
});
formatter.result({
  "duration": 2752004407,
  "status": "passed"
});
});