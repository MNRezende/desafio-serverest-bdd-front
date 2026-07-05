class LoginService {
    postLogin(email, senha) {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/login`,
            body: {
                email: email,
                password: senha
            },
            failOnStatusCode: false
        });
    }
}
export default new LoginService();