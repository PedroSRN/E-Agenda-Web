import { Prioridade } from "./prioridade.enum.js";
import { Tarefa } from "./tarefa.model.js";
class TarefaPaginaListagem {
    constructor() {
        this.configurarElementos();
        this.atualizarTabela();
    }
    configurarElementos() {
        this.tabela = document.getElementById("tabela");
    }
    atualizarTabela() {
        const tarefas = [
            new Tarefa("Lavar o cachorro", Prioridade.Alta),
            new Tarefa("Lavar o carro", Prioridade.Baixa)
        ];
        let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];
        tarefas.forEach(tarefa => {
            const novaLinha = corpoTabela.insertRow();
            Object.values(tarefa).forEach((valor) => {
                const novaCelula = novaLinha.insertCell();
                novaCelula.innerText = valor;
            });
        });
    }
}
new TarefaPaginaListagem();
