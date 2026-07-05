const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const webpack = require("@cypress/webpack-preprocessor");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://front.serverest.dev",
    specPattern: "cypress/e2e/**/*.feature",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    async setupNodeEvents(on, config) {
      // Ativa o plugin do Cucumber
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      // Define o Webpack (Javascript Puro) para ler as Features
      const options = {
        webpackOptions: {
          resolve: {
            extensions: [".js"],
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      };

      on("file:preprocessor", webpack(options));

      return config;
    },
  },
});