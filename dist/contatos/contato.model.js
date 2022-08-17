import { EntidadeBase } from "../shared/entidade.model.js";
export class Contato extends EntidadeBase {
    constructor(nome, telefone, email, cargo, empresa, id) {
        super();
        if (id) {
            this.id = id;
        }
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cargo = cargo;
        this.empresa = empresa;
    }
}
