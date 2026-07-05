import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../page_objects/login.page.js";
import cadastroPage from "../../../page_objects/cadastro.page.js";
import usuariosPage from "../../../page_objects/usuarios.page.js";

let emailUsuarioDinamico;
let nomeUsuarioDinamico;

Given("I log in with valid administrator credentials for user management", () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    // Gerando os dados dinâmicos exclusivos para este arquivo de teste
    nomeUsuarioDinamico = `Miguel Listagem ${Date.now()}`;
    emailUsuarioDinamico = `list_user_${Date.now()}@desafio.com`;
    const senhaUsuario = 'Senha@123';

    // Cadastra o usuário que vamos procurar na listagem depois
    cadastroPage.navegar();
    cadastroPage.cadastrarUsuario(nomeUsuarioDinamico, emailUsuarioDinamico, senhaUsuario, true);

    // Limpa a sessão e faz o login com ele para acessar o painel
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/');
    loginPage.realizarLogin(emailUsuarioDinamico, senhaUsuario);
});

When("I navigate to the user management list", () => {
    // Clica no menu lateral para ir para a tela de listar usuários
    cy.get(usuariosPage.btnIrParaListagem).click();
    cy.url().should("include", "/listarusuarios");
});

Then("I should see the registered user displayed in the table", () => {
    // Garante que a tabela está visível e contém o nome do usuário que criamos no Given
    cy.get(usuariosPage.tabelaUsuarios)
        .should("be.visible")
        .and("contain.text", nomeUsuarioDinamico)
        .and("contain.text", emailUsuarioDinamico);
});