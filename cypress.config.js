const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'nbvos7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },

  responseTimeout: 5000,
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    }
  }
})
