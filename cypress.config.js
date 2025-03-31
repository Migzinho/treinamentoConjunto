const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
    baseUrl: 'https://www.saucedemo.com',
    env: {
    hideCredentials: true,
    requestMode: true,
    },
    experimentalRunAllSpecs: true,
    },
    fixturesFolder: false,
    video: false,
})