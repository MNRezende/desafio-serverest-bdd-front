import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cadastroPage from "../../../page_objects/cadastro.page.js"
import loginPage from "../../../page_objects/login.page.js";
import dashboardPage from "../../../page_objects/dashboard.page.js";

const emailDinamico = `qa_bdd_${Date.now()}@desafio.com`;
const senhaPadrao = 'Senha@123';


Given("I navigate to the registration page", () => {
  cadastroPage.navegar();
});

Given("I navigate to the login page", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('/');
});

const emailDoTeste = `qa_bdd_${Date.now()}@desafio.com`;
const senhaDoTeste = 'Senha@123';

When("I register a new user with valid data", () => {
  Cypress.env('emailCadastrado', emailDoTeste);
  Cypress.env('senhaCadastrada', senhaDoTeste);
  cadastroPage.cadastrarUsuario('Miguel BDD QA', emailDoTeste, senhaDoTeste, true);
});

When("I enter credentials of a registered user", () => {
  loginPage.realizarLogin(emailDoTeste, senhaDoTeste);
});

When("I attempt to log in with an incorrect password", () => {
  loginPage.realizarLogin(emailDoTeste, 'SenhaIncorreta123');
});

Then("I should be redirected to the dashboard with a welcome message", () => {
  cy.url().should('include', '/home');
  dashboardPage.txtBoasVindas
  cy.get(dashboardPage.txtBoasVindas)
    .should('be.visible')
    .and('contain.text', 'Miguel BDD QA');
});

Then("I should see the logout button available on the dashboard", () => {
  cy.url().should('include', '/home');
  cy.get(dashboardPage.btnLogout).should('be.visible');
});

Then("the system should display the error message {string}", (errorMessage) => {
  loginPage.alertMensagem
  cy.get(loginPage.alertMensagem)
    .should('be.visible')
    .and('contain.text', 'Email e/ou senha inválidos');
});