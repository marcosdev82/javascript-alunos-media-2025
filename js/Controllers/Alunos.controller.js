class AlunosController {
    constructor(service, view) {
        view.renderTbody(service.alunos)
        this.view = view
        this.service = service
    }

    add(aluno) {
        this.service.add(new AlunosModel(aluno))
        this.view.renderTbody(this.service.alunos)   
    }

    update(aluno) {
        this.service.edit(aluno)
        this.view.alunosView(this.service.alunos)   
    }
}