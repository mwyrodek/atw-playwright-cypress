const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://displate.com',
    env: {
      apiUrl: 'https://swapi.py4e.com/api/'
    },
    retries: { "runMode": 0, "openMode": 0 },
    defaultCommandTimeout: 4000,
    screenshotOnRunFailure: true,
    blockHosts: [],

    setupNodeEvents(on, config) {
      require('cypress-terminal-report/src/installLogsPrinter')(on,   {

       printLogsToConsole: `always`, //switch to always
      includeSuccessfulHookLogs: false,
    });

    },
  },
});
