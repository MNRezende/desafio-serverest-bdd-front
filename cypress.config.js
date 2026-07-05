const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://front.serverest.dev",
    specPattern: "cypress/e2e/**/*.feature",
    env: {
      apiUrl: "https://serverest.dev"
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        webpack({
          webpackOptions: {
            resolve: { extensions: [".js", ".ts"] },
            module: {
              rules: [
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: "@badeball/cypress-cucumber-preprocessor/webpack",

                      options: config
                    }
                  ],
                },
              ],
            },
          },
        })
      );
      return config;
    },
  },
});