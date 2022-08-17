import { ContatoRepositoryLocalStorage } from "./contato.repository.local-storage.js";
class ContatoPaginaListagem {
    constructor(repositorioContatos) {
        this.repositorioContatos = repositorioContatos;
        this.configurarElementos();
        this.atualizarTabela();
    }
    configurarElementos() {
        this.tabela = document.getElementById("tabela");
    }
    atualizarTabela() {
        const contatos = this.repositorioContatos.selecionarTodos();
        let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];
        contatos.forEach(contato => {
            const novaLinha = corpoTabela.insertRow();
            Object.values(contato).forEach((valor) => {
                const novaCelula = novaLinha.insertCell();
                novaCelula.innerText = valor;
            });
            const celulaBotoes = novaLinha.insertCell();
            const btnEditar = document.createElement("a");
            btnEditar.innerText = "Editar";
            btnEditar.className = "btn btn-warning me-2";
            btnEditar.addEventListener("click", () => {
                const idSelecionado = contato.id;
                window.location.href = `contatos.create.html?id=${idSelecionado}`;
            });
            const btnExcluir = document.createElement("a");
            btnExcluir.innerText = "Excluir";
            btnExcluir.className = "btn btn-primary";
            btnExcluir.addEventListener("click", () => {
                const idSelecionado = contato.id;
                this.repositorioContatos.excluir(idSelecionado);
                window.location.reload();
            });
            celulaBotoes.appendChild(btnEditar);
            celulaBotoes.appendChild(btnExcluir);
        });
    }
}
new ContatoPaginaListagem(new ContatoRepositoryLocalStorage());
