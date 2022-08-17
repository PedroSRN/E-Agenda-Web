import { EntidadeBase } from "../shared/entidade.model.js";

export class Contato extends EntidadeBase{
    public nome: string;
    public telefone: string;
    public email: string;
    public cargo: string;
    public empresa: string;

    constructor(nome: string, telefone: string, email: string, cargo: string, empresa: string, id?: string) {
        super();

        if(id) {
            this.id = id;
        }

        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cargo = cargo;
        this.empresa = empresa;

    }
}