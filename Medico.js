import {Funcionario} from "./Funcionario.js"


export class Medico extends Funcionario {
    constructor(nome, idFuncional, crm) {
        super(nome , idFuncional )
        this.crm = crm
        this.especialidade = ""
    }

    descreverFuncao() {
        return "Funcao: Medico"
    }

    adicionarEspecialidade(especialidade) {
        this.especialidade = especialidade
    }
}