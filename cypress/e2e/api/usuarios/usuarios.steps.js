import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import usuariosService from "../../../services/usuarios.service.js";

let responseContext;

When("I send a POST request to register a dynamic user", () => {
    const emailDinamico = `api_qa_${Date.now()}@desafio.com`;

    usuariosService.postUsuario("Miguel API QA", emailDinamico, "Senha@123", "true")
        .then((response) => {
            responseContext = response;
        });
});

Then("the user API should respond with status code 201", () => {

    expect(responseContext.status).to.eq(201);
});

Then("the response body should contain a success message and an ID", () => {

    expect(responseContext.body).to.have.property('message', 'Cadastro realizado com sucesso');
    expect(responseContext.body).to.have.property('_id');
});