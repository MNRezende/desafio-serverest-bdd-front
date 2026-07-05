class UsuariosService {
  getUsuarios() {
    return cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}/usuarios`,
      failOnStatusCode: false
    });
  }

  postUsuario(nome, email, senha, administrador) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/usuarios`,
      body: {
        nome: nome,
        email: email,
        password: senha,
        administrador: administrador
      },
      failOnStatusCode: false
    });
  }
}
export default new UsuariosService();