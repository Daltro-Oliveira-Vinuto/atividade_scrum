import {Agenda} from "./Agenda.js"
import {Funcionario} from "./Funcionario.js"


export class Secretaria extends Funcionario {
    constructor(nome, idFuncional, salario, ramal) {

        super(nome , idFuncional, salario)

        this.ramal = ramal;
        this.agendas = [];

    }

    descreverFuncao() {
        return "Funcao: Secretaria";
    }

    criarAgendamento(data, descricao, responsavel) {
        
        const novaAgenda = new Agenda(data, descricao, responsavel);

        this.agendas.push( novaAgenda );

    }
}