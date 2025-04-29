class AlunosView {
    constructor(table) {
        this.tableList = table;
        this.tableHeader = this.tableList.querySelector('thead');
        this.tableBody = this.tableList.querySelector('tbody');
        this.materias = ["portugues","matematica","historia","ciencias"];
   
        this.renderHeader();
    }

    renderHeader() {
        const htmlHeader = document.createElement('tr')
        htmlHeader.innerHTML = `<td class="px-5 py-3 text-left">Nome</td>`

        const htmlHeaderMaterias = this.materias.map(materia => `<td class="px-5 py-3 text-left">${materia}</td>`).join('')

        htmlHeader.innerHTML += htmlHeaderMaterias
        document.querySelector('[data-table="alunos"] thead').appendChild(htmlHeader)
    }    

    render(alunos) {

        alunos.forEach(aluno => {
            const htmlRow = document.createElement('tr')
            htmlRow.className = 'odd:bg-white even:bg-gray-100';
            htmlRow.innerHTML = `<td class="px-6 py-3 text-left">${aluno.nome}</td>`
            // console.log(Object.keys(aluno.notas)) - atenção para o uso de Object.keys, que retorna um array com as chaves do objeto
            const htmlRowMaterias = this.materias.map(materia => `<td>${aluno.media[materia]}</td>`).join('')
            htmlRow.innerHTML += htmlRowMaterias
            this.tableBody.appendChild(htmlRow)
        })
    }
}
