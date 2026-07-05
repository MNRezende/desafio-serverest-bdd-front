class LoginPage {
  get inputEmail() { return '[data-testid="email"]'; }
  get inputSenha() { return '[data-testid="senha"]'; }
  get btnEntrar() { return '[data-testid="entrar"]'; }
  get alertMensagem() { return '.alert > span'; }

  navegar() {
    cy.visit('/login');
  }

  realizarLogin(email, senha) {
    cy.get(this.inputEmail).type(email);
    cy.get(this.inputSenha).type(senha);
    cy.get(this.btnEntrar).click();
  }
}
export default new LoginPage();