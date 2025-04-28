class AlunosView {
    constructor({nome, _id, notas} = {notas: {}}) {
        this.nome = nome;
        this._id = (_id !== undefined)? _id : this.generateId();
        
        if (this._id > AlunosModel.maxId) {
            AlunosModel.maxId = this._id;
        }

    }

    generateId() {
        return AlunosModel.maxId + 1
    }
}

AlunosModel.maxId = 0