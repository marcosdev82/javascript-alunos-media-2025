class AlunosModel {
    constructor({nome, _id, notas} = {notas: {}}) {
        this.nome = nome;
        this._id = (_id !== undefined)? _id : this.generateId();
        this.notas = {...notas};

        if (this._id > AlunosModel.maxId) {
            AlunosModel.maxId = this._id;
        }

        this.media = {}

        for (let materia in this.notas) {
            this.media[materia] = avarege(...this.notas[ materia ]);
        }
    }

    generateId() {
        return AlunosModel.maxId + 1;
    }
}