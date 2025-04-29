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

    
}
