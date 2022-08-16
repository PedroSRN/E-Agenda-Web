import { EntidadeBase } from "../shared/entidade.model.js";
//extends = Herdando dados
//implements = implementando interfaces
export class Tarefa extends EntidadeBase {
    constructor(descricao, prioridade, id) {
        super();
        if (id) {
            this.id = id;
        }
        this.descricao = descricao;
        this.dataCriacao = new Date();
        this.prioridade = prioridade;
    }
}
