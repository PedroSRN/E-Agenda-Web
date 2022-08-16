import { IPaginaFormulario } from "../shared/pagina.create.interface.js";
import { IPaginaHTML } from "../shared/pagina.interface.js";
import { IRepositorio } from "../shared/repositorio.interface.js";
import { Prioridade } from "./prioridade.enum";
import { Tarefa } from "./tarefa.model.js";
import { TarefaRepositoryLocalStorage } from "./tarefa.repository.local-storage.js";

class TarefaPaginaCadastro implements IPaginaHTML, IPaginaFormulario {
   private txtDescricao: HTMLInputElement;
   private rdbPrioridade: HTMLInputElement;
   private btnSalvar: HTMLButtonElement;

   constructor(private repositorioTarefas: IRepositorio<Tarefa>) {
    this.configurarElementos();
   }
   
   configurarElementos(): void {
       this.txtDescricao = document.getElementById("txtDescricao") as  HTMLInputElement;
       this.btnSalvar = document.getElementById("btnSalvar") as  HTMLButtonElement;

       //operador discard  _
       this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros())
    }
    
    gravarRegistros(): void {
        this.rdbPrioridade = document.querySelector('input[type="radio"]:checked') as HTMLInputElement;

       const prioridade = this.rdbPrioridade.value as Prioridade;

       const novaTarefa = new Tarefa(this.txtDescricao.value, prioridade);

       this.repositorioTarefas.inserir(novaTarefa);

       //Medtodo para redirecionar o usuario
       window.location.href = "tarefa.list.html"
    }
}

new TarefaPaginaCadastro(new TarefaRepositoryLocalStorage());