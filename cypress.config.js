const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://iodinesoftware.com/',
  },
  chromeWebSecurity: false,
  viewportWidth: 2560,
  viewportHeight: 1440,
  defaultCommandTimeout: 30000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,
  video: false,
});
