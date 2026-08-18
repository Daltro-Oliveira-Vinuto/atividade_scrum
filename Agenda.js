

export class Agenda {
    
    constructor(date , descricao, responsavel) {
        this.date = date;
        this.descricao = descricao;
        this.responsavel = responsavel;
    }

    getData() {
        return this.date;

    }

    getDescricao() {
        return this.descricao;
    }

    reagenda(novaData) {
        this.date = novaData;
    }
}