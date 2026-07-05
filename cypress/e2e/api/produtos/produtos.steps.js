import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import usuariosService from "../../../services/usuarios.service.js";
import loginService from "../../../services/login.service.js";
import produtosService from "../../../services/produtos.service.js";

let authToken;
let responseContext;

Given("I am authenticated as an administrator via API", () => {
    const emailAdmin = `prod_admin_${Date.now()}@desafio.com`;
    const senhaAdmin = "Senha@123";

    usuariosService.postUsuario("Admin Produtos API", emailAdmin, senhaAdmin, "true")
        .then((cadastroRes) => {
            expect(cadastroRes.status).to.eq(201);

            loginService.postLogin(emailAdmin, senhaAdmin).then((loginRes) => {
                authToken = loginRes.body.authorization;
            });
        });
});

When("I send a POST request to register a product with dynamic data", () => {
    const nomeProduto = `Produto API ${Date.now()}`;

    produtosService.postProduto(authToken, nomeProduto, 500, "Descrição gerada via automação de API", 10)
        .then((response) => {
            responseContext = response;
        });
});

Then("the product API should respond with status code 201", () => {
    expect(responseContext.status).to.eq(201);
});

Then("the response body should confirm product creation", () => {

    expect(responseContext.body).to.have.property('message', 'Cadastro realizado com sucesso');
    expect(responseContext.body).to.have.property('_id');
});