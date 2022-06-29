const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: '',
    env: {

    },
    retries: { "runMode": 0, "openMode": 0 },
    defaultCommandTimeout: 4000,
    screenshotOnRunFailure: true,
    blockHosts: [],

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
