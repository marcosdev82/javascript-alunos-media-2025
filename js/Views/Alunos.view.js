class AlunosView {
    constructor(table) {
        this.tableList = table;
        this.tableHeader = this.tableList.querySelector('thead');
        this.tableBody = this.tableList.querySelector('tbody');
        this.materias = ["portugues", "matematica", "historia", "ciencias"];
        this.boxEdit = '';

        this.renderHeader();
    }

    renderHeader() {
        const htmlHeader = document.createElement('tr');
        htmlHeader.innerHTML = `<td class="px-5 py-3 text-left">Nome</td>`;

        const htmlHeaderMaterias = this.materias
            .map(materia => `<td class="px-5 py-3 text-left">${materia}</td>`)
            .join('');

        htmlHeader.innerHTML += htmlHeaderMaterias;
        this.tableHeader.appendChild(htmlHeader);
    }

    renderTbody(alunos) {
        this.tableBody.innerHTML = '';
    
        alunos.forEach(aluno => {
            const htmlRow = document.createElement('tr');
            htmlRow.className = 'odd:bg-white even:bg-gray-100';
    
            let htmlMedia = `<td class="px-6 py-3 text-left">${aluno.nome}</td>`;
            const btn = `<a href="#" data-nota-aluno="${aluno.nome}" class="text-gray-500 hover:text-blue-500 hover:border-b hover:border-dashed hover:border-blue-500">Incluir nota</a>`;
    
            const notas = aluno.nota || {};
            let encontrado = false;
    
            this.materias.forEach(materia => {
                if (materia in aluno.notas) {
                    encontrado = true;
                }
            });
    
            if (encontrado) {
                this.materias.forEach(materia => {
                    htmlMedia += `<td class="px-6 py-3 text-left">
                        ${
                            aluno.media?.[materia] !== undefined
                            ?  `<a href="#" data-nota-aluno="${aluno.media[materia]}" class="position-relative text-gray-500 hover:text-blue-500 hover:border-b hover:border-dashed hover:border-blue-500">
                                ${aluno.media[materia]}

                                </a>`
                            : btn
                        }
                        <div class="position-absolute top-0 left-0 w-full h-full bg-gray-300 bg-opacity-50 rounded-md" style="display: none;">
                            <input type="text"
                                class="w-full h-full bg-gray-300 text-white border-none outline-none p-2 rounded-md"
                                value="${aluno.media[materia]}"
                                placeholder="Digite a nota do aluno"
                            />
                        </div>
                    </td>`;
                });
            } else {
                htmlMedia += `<td colspan="${this.materias.length}" class="px-6 py-3 text-left">${btn}</td>`;
            }
    
            htmlRow.innerHTML = htmlMedia;
            this.tableBody.appendChild(htmlRow);
        });
    }

}
