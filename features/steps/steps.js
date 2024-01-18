const {
  Given,
  When,
  Then,
  Before,
  After,
  JsonFormatter,
} = require("@cucumber/cucumber");
const pactum = require("pactum");
const { request, settings } = require("pactum");
const reporter = require("cucumber-html-reporter");
let startTime = "";
let endTime = "";

let spec = pactum.spec();
let body
Before(() => {
  spec = pactum.spec();
  startTime = performance.now();
  body = {};
});

Given(/^Deseo hacer un post a (.*) con json (.*)$/, (path, json) => {
  let jsonBody = require("../datos/" + json + ".json");
  spec.post(path).withJson(jsonBody);
});


Given(/^Deseo agregar al body key: (.*), value: (.*)$/,function (key, value) {
  body[key] = value;
  }
);

Given(/^Deseo hacer un post con el body creado a (.*)$/,function (path) {
  let jsonBody = body;
  spec.post(path).withJson(jsonBody);
});

When("Recibimos el response", async function () {
  request.setDefaultTimeout(20000);
  await spec.toss();
});

Then("Espero un response con el status {int}", function (code) {
  spec.response().should.have.status(code);
});

Then(
  /^Valido el response con json (.*) escenario (.*)$/,
  function (json, escenario) {
    let jsonBody = require("../datos/" + json + ".json");
    spec.response().should.have.jsonMatch(jsonBody[escenario]);
  }
);

Then(  /^Valido response con key (.*) y con valor (.*)$/,
  function (field, value) {
    const jsonData = spec._request.body;
    spec.response().should.have.jsonMatch(field, value);
  }
);

After(() => {
  endTime = performance.now();
  console.log(">------REQUEST----------");
  console.log("Request Method: " + spec._request.method);
  console.log("Request URL: " + spec._request.url);
  console.log("Request Path: " + spec._request.path);
  console.log("Request Body: " + JSON.stringify(spec._request.body));
  console.log(
    "Request Time: " + ((endTime - startTime) / 1000).toFixed(2) + "s"
  );
  console.log("------REQUEST---------->");

  console.log("<------RESPONSE--------");
  console.log("Response Status: " + spec._response.statusCode);
  console.log("Response Body: " + JSON.stringify(spec._response.body));

  console.log("------RESPONSE--------<");
  spec.end();
});