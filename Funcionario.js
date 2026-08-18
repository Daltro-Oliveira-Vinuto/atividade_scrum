

export class Funcionario {

    #salario;

    constructor(nome, idFuncional, salario) {

        if (this.constructor === Funcionario) {
            throw new Error("classe abstrata nao pode ser instancia")
        }
        this.nome = nome
        this.idFuncional = idFuncional
        this.#salario = salario
    }

    getSalario() {
        return this.#salario
    }

    setSalario(novoSalario) {
        this.#salario = novoSalario;
    }

    descreverFuncao() {
        throw new Error("Metodo descreverFuncao e abrastrato e nao pode ser instanciado pela classe Funcionario")
    }
}