import { Tarefa } from "./tarefa.model.js";
import { TarefaRepositoryLocalStorage } from "./tarefa.repository.local-storage.js";
class TarefaPaginaCadastro {
    constructor(repositorioTarefas) {
        this.repositorioTarefas = repositorioTarefas;
        this.configurarElementos();
    }
    configurarElementos() {
        this.txtDescricao = document.getElementById("txtDescricao");
        this.btnSalvar = document.getElementById("btnSalvar");
        //operador discard  _
        this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
    }
    gravarRegistros() {
        this.rdbPrioridade = document.querySelector('input[type="radio"]:checked');
        const prioridade = this.rdbPrioridade.value;
        const novaTarefa = new Tarefa(this.txtDescricao.value, prioridade);
        this.repositorioTarefas.inserir(novaTarefa);
        //Medtodo para redirecionar o usuario
        window.location.href = "tarefa.list.html";
    }
}
new TarefaPaginaCadastro(new TarefaRepositoryLocalStorage());
