import {Funcionario} from "./Funcionario.js"


export class Medico extends Funcionario {
    constructor(nome, idFuncional, salario, crm) {
        super(nome , idFuncional, salario)
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