var reporter = require('cucumber-html-reporter');
var os = require('os');
var pkgJson = require('../package.json');

var options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber/report/cucumber_report.json',
    output: 'cucumber/report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": pkgJson.version,
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);
