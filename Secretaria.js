import {Agenda} from "./Agenda.js"
import {Funcionario} from "./Funcionario.js"


export class Secretaria extends Funcionario {
    constructor(nome, idFuncional, salario, ramal) {

        super(nome , idFuncional, salario)

        this.ramal = ramal;
        this.agenda = null;

    }

    descreverFuncao() {
        return "Funcao: Secretaria";
    }

    criarAgendamento(data, descricao, responsavel) {
        
        this.agenda = new Agenda(data, descricao, responsavel);

    }
}