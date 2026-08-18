

export class Especialidade {
    constructor(nome, codigo, descricao) {
        this.nome = nome;
        this.codigo = codigo;
        this.descricao = descricao;
    }

    obterDetalhes() {

        return console.log(`A especialidade tem as seguintes caracteristicas-> nome: ${this.nome}, codigo: ${this.codigo}, descricao: ${descricao} `);
    }
}