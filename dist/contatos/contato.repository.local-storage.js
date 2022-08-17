export class ContatoRepositoryLocalStorage {
    constructor() {
        this.localStorage = window.localStorage;
        this.contatos = this.selecionarTodos();
    }
    gravar() {
        const contatosJsonString = JSON.stringify(this.contatos);
        this.localStorage.setItem("contatos", contatosJsonString);
    }
    inserir(registro) {
        this.contatos.push(registro);
        this.gravar();
    }
    editar(id, registroEditado) {
        const indexSelecionado = this.contatos.findIndex(x => x.id === id);
        this.contatos[indexSelecionado] = {
            id: id,
            nome: registroEditado.nome,
            telefone: registroEditado.telefone,
            email: registroEditado.email,
            cargo: registroEditado.cargo,
            empresa: registroEditado.empresa
        };
        this.gravar();
    }
    excluir(id) {
        this.contatos = this.contatos.filter(x => x.id !== id);
        this.gravar();
    }
    selecionarTodos() {
        const dados = this.localStorage.getItem("contatos");
        if (!dados)
            return [];
        return JSON.parse(dados);
    }
    selecionarPorId(id) {
        return this.contatos.find(x => x.id === id);
    }
}
