import { IPaginaHTML } from "../shared/pagina.interface.js";
import { IPaginaListagem } from "../shared/pagina.list.interface.js";
import { Prioridade } from "./prioridade.enum.js";
import { Tarefa } from "./tarefa.model.js";

class TarefaPaginaListagem implements IPaginaHTML, IPaginaListagem {
    tabela: HTMLTableElement;

    constructor() {
        this.configurarElementos();
        this.atualizarTabela();
    }
    
    configurarElementos(): void {
        this.tabela = document.getElementById("tabela") as HTMLTableElement;
    }

    atualizarTabela(): void {
        const tarefas = [
           new Tarefa("Lavar o cachorro", Prioridade.Alta),
           new Tarefa("Lavar o carro", Prioridade.Baixa)
        ];

        let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];

        tarefas.forEach(tarefa => {
            const novaLinha = corpoTabela.insertRow();


            Object.values(tarefa).forEach((valor: any) => {
                const novaCelula = novaLinha.insertCell();
                novaCelula.innerText = valor
            });
        })
    }
}


new TarefaPaginaListagem();