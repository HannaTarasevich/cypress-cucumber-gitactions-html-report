const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const {
  addCucumberPreprocessorPlugin,
  afterRunHandler
} = require('@badeball/cypress-cucumber-preprocessor')
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const { writeFileSync } = require('fs')

const setupNodeEvents = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config, {
    omitAfterRunHandler: true
  })

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)]
    })
  )

  on('after:run', async (results) => {
    if (results) {
      await afterRunHandler(config)
      writeFileSync(
        'cypress/reports/results.json',
        JSON.stringify(
          {
            browserName: results.browserName,
            browserVersion: results.browserVersion,
            osName: results.osName,
            osVersion: results.osVersion,
            nodeVersion: results.config.resolvedNodeVersion,
            cypressVersion: results.cypressVersion,
            startedTestsAt: results.startedTestsAt,
            endedTestsAt: results.endedTestsAt
          },
          null,
          '\t'
        )
      )
    }
  })
  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/features/*.feature',
    baseUrl: 'https://www.saucedemo.com',
    includeShadowDom: true,
    chromeWebSecurity: false
  }
})
