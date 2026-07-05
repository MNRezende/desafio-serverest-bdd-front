import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../page_objects/login.page.js";
import cadastroPage from "../../../page_objects/cadastro.page.js";
import produtosPage from "../../../page_objects/produtos.page.js";

let nomeProdutoDinamico;

Given("I log in with valid administrator credentials", () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    const emailAdminProdutos = `admin_prod_${Date.now()}@desafio.com`;
    const senhaAdminProdutos = 'Senha@123';

    cadastroPage.navegar();
    cadastroPage.cadastrarUsuario('Miguel Admin Produtos', emailAdminProdutos, senhaAdminProdutos, true);

    cy.visit('/');
    loginPage.realizarLogin(emailAdminProdutos, senhaAdminProdutos);
});

Given("I navigate to the product registration page", () => {
    cy.get(produtosPage.btnIrParaCadastro).click();
    cy.url().should("include", "/cadastrarprodutos");
});

When("I register a new product with the following details:", (dataTable) => {
    const dados = dataTable.hashes()[0];
    nomeProdutoDinamico = `${dados.name} ${Date.now()}`;

    produtosPage.cadastrarNovoProduto(
        nomeProdutoDinamico,
        dados.price,
        dados.description,
        dados.quantity
    );
});

Then("the product should be visible in the inventory list", () => {
    cy.url().should("include", "/listarprodutos");
    cy.get(produtosPage.tabelaProdutos)
        .should("be.visible")
        .and("contain.text", nomeProdutoDinamico);
});