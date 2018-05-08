$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/resources/com/cucmber..feature");
formatter.feature({
  "line": 1,
  "name": "remaining cucumbers",
  "description": "",
  "id": "remaining-cucumbers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16978854,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "eat 5 out of 12",
  "description": "",
  "id": "remaining-cucumbers;eat-5-out-of-12",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "there are 12 cucumbers",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I eat 5 cucumbers",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should have 7 cucumbers",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 10
    }
  ],
  "location": "GlueCode.there_are_cucumbers(int)"
});
formatter.result({
  "duration": 408078720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 6
    }
  ],
  "location": "GlueCode.i_eat_cucumbers(int)"
});
formatter.result({
  "duration": 339528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 14
    }
  ],
  "location": "GlueCode.i_should_have_cucumbers(int)"
});
formatter.result({
  "duration": 323895,
  "status": "passed"
});
formatter.after({
  "duration": 322918,
  "status": "passed"
});
formatter.before({
  "duration": 8411017,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "eat 5 out of 20",
  "description": "",
  "id": "remaining-cucumbers;eat-5-out-of-20",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "there are 20 cucumbers",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I eat 5 cucumbers",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should have 15 cucumbers",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 10
    }
  ],
  "location": "GlueCode.there_are_cucumbers(int)"
});
formatter.result({
  "duration": 705437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 6
    }
  ],
  "location": "GlueCode.i_eat_cucumbers(int)"
});
formatter.result({
  "duration": 276508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 14
    }
  ],
  "location": "GlueCode.i_should_have_cucumbers(int)"
});
formatter.result({
  "duration": 306308,
  "status": "passed"
});
formatter.after({
  "duration": 617990,
  "status": "passed"
});
});