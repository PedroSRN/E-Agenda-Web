import { IPaginaFormulario } from "../shared/pagina.create.interface.js";
import { IPaginaHTML } from "../shared/pagina.interface.js";
import { IRepositorio } from "../shared/repositorio.interface.js";
import { Tarefa } from "../tarefas/tarefa.model.js";
import { Contato } from "./contato.model.js";
import { ContatoRepositoryLocalStorage } from "./contato.repository.local-storage.js";

class ContatoPaginaCadastro implements IPaginaHTML, IPaginaFormulario {
   private txtNome: HTMLInputElement;
   private txtTelefone: HTMLInputElement;
   private txtEmail: HTMLInputElement;
   private txtCargo: HTMLInputElement;
   private txtEmpresa: HTMLInputElement;
   private btnSalvar: HTMLButtonElement;

   private idSelecionado: string;

   constructor(private repositorioContatos: IRepositorio<Contato>, id?: string) {

    this.configurarElementos();

    if(id){
        this.idSelecionado = id;

        const contatoSelecionado = this.repositorioContatos.selecionarPorId(id);

        if(contatoSelecionado)
        this.preencherFormulario(contatoSelecionado);
    }
   }

    private preencherFormulario(contatoSelecionado: Contato){
        this.txtNome.value = contatoSelecionado.nome;
        this.txtTelefone.value = contatoSelecionado.telefone;
        this.txtEmail.value = contatoSelecionado.email;
        this.txtCargo.value = contatoSelecionado.cargo;
        this.txtEmpresa.value = contatoSelecionado.empresa;
    }

    configurarElementos(): void {
        this.txtNome = document.getElementById("txtNome") as HTMLInputElement;
        this.txtTelefone = document.getElementById("txtTelefone") as HTMLInputElement; 
        this.txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
        this.txtCargo = document.getElementById("txtCargo") as HTMLInputElement;
        this.txtEmpresa = document.getElementById("txtEmpresa") as HTMLInputElement;
        this.btnSalvar = document.getElementById("btnSalvar") as HTMLButtonElement;
        this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros())
    }


    gravarRegistros(): void {
      const contato = this.obterDadosFormulario();

      if(!this.idSelecionado)
            this.repositorioContatos.inserir(contato);
      else 
         this.repositorioContatos.editar(contato.id, contato);

         
       window.location.href = "contatos.list.html"
    }

    obterDadosFormulario() {
        const nome = this.txtNome.value;
        const telefone = this.txtTelefone.value;
        const email = this.txtEmail.value;
        const cargo = this.txtCargo.value;
        const empresa = this.txtEmpresa.value;
        
        let contato = null;

        if(!this.idSelecionado)
          contato = new Contato(nome, telefone, email, cargo, empresa);
        else
          contato = new Contato(nome, telefone, email, cargo, empresa, this.idSelecionado)

        return contato;
    }
}
const params = new URLSearchParams(window.location.search);

const id = params.get("id") as string;

new ContatoPaginaCadastro(new ContatoRepositoryLocalStorage(), id)
