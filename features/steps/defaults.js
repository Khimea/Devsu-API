const { request, settings, response } = require('pactum');
const { Before, After, BeforeAll } = require('@cucumber/cucumber');
const dotenv = require('dotenv');
const reporter = require('cucumber-html-reporter');
dotenv.config();



var options = {
  theme: 'bootstrap',
  jsonFile: 'output/TestReport.json',
  output: 'test/report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,

};

BeforeAll(() => {
  request.setBaseUrl(process.env.ENVIRONMENT);
  settings.setReporterAutoRun(false);
  
});

After(function (scenarioResult) {
  //const scenario = scenarioResult.scenario;
  //console.log('SCENARIO EXECUTION COMPLETED:', scenario);
});



