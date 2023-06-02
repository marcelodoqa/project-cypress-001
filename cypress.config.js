const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://barrigareact.wcaquino.me',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
    reporter: "mochawesome",
    reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: true,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss"
    }    

});
