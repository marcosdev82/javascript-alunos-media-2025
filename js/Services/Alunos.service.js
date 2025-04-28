class AlunosService {
    constructor() {
        this.alunos = []; 
    }

    add(aluno) {
        if (!aluno instanceof AlunosModel) {
            throw new Error('Aluno não é uma instância de AlunosModel');
        }
        this.alunos.push(aluno);
    }

    edit(aluno) {
        return aluno;
    }

}