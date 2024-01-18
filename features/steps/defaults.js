const { request, settings, response } = require('pactum');
const { Before, After, BeforeAll } = require('@cucumber/cucumber');
const dotenv = require('dotenv');
dotenv.config();


BeforeAll(() => {
  request.setBaseUrl(process.env.ENVIRONMENT);
  settings.setReporterAutoRun(false);
  
});

After(function (scenarioResult) {
  //const scenario = scenarioResult.scenario;
  //console.log('SCENARIO EXECUTION COMPLETED:', scenario);
});



