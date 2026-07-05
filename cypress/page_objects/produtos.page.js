class ProdutosPage {
  get inputNome() { return '[data-testid="nome"]'; }
  get inputPreco() { return '[data-testid="preco"]'; }
  get inputDescricao() { return '[data-testid="descricao"]'; }
  get inputQuantidade() { return '[data-testid="quantity"]'; }
  get inputImagem() { return '[data-testid="imagem"]'; }
  get btnCadastrar() { return '[data-testid="cadastarProdutos"]'; }
  get btnIrParaCadastro() { return '[data-testid="cadastrarProdutos"]'; }
  get tabelaProdutos() { return '.table'; }

  cadastrarNovoProduto(nome, preco, description, quantidade) {
    cy.get(this.inputNome).type(nome);
    cy.get(this.inputPreco).type(preco);
    cy.get(this.inputDescricao).type(description);
    cy.get(this.inputQuantidade).type(quantidade);

    cy.get(this.inputImagem).selectFile({
      contents: Cypress.Buffer.from('imagem-mock'),
      fileName: 'produto.jpg',
      mimeType: 'image/jpeg'
    });

    cy.get(this.btnCadastrar).click();
  }
}

export default new ProdutosPage();