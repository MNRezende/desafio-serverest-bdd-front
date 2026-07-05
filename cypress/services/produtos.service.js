class ProdutosService {
    postProduto(token, nome, preco, descricao, quantidade) {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/produtos`,
            headers: {
                Authorization: token
            },
            body: {
                nome: nome,
                preco: preco,
                descricao: descricao,
                quantidade: quantidade
            },
            failOnStatusCode: false
        });
    }
}
export default new ProdutosService();