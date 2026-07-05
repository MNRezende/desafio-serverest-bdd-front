class UsuariosPage {

    get btnIrParaListagem() { return '[data-testid="listar-usuarios"]'; }

    get tabelaUsuarios() { return '.table'; }
}

export default new UsuariosPage();