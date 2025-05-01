class AlunosView {
    constructor(table) {
        this.tableList = table;
        this.tableHeader = this.tableList.querySelector('thead');
        this.tableBody = this.tableList.querySelector('tbody');
        this.materias = ["portugues", "matematica", "historia", "ciencias"];
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
            const btn = `<a href="#" data-nota-aluno="${aluno.nome}" data-action="edit" class="text-gray-500 hover:text-blue-500 hover:border-b hover:border-dashed hover:border-blue-500">Incluir notas</a>`;
    
            const notas = aluno.nota || {};
            let encontrado = false;
    
            this.materias.forEach(materia => {
                if (materia in aluno.notas) {
                    encontrado = true;
                }
            });
    
            if (encontrado) {
                this.materias.forEach(materia => {
                    htmlMedia += `<td class="px-6 py-3 text-lef position-relative">
                        ${
                            aluno.media?.[materia] !== undefined
                            ?  `<a href="#" data-nota-aluno="${aluno.media[materia]}" data-action="edit" class="position-relative text-gray-500 hover:text-blue-500 hover:border-b hover:border-dashed hover:border-blue-500">
                                ${aluno.media[materia]}
                                </a>`
                            : btn
                        }
                    </td>`; 
                });
            } else {
                htmlMedia += `<td colspan="${this.materias.length}" class="px-6 py-3 text-left">${btn}</td>`;
            }
    
            htmlRow.innerHTML = htmlMedia;
            this.tableBody.appendChild(htmlRow);
        });
    }

    renderBoxEdit(notaAluno) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `<div id="boxEdit" class="position-absolute top-0 left-0 w-full h-full bg-gray-300 bg-opacity-50 rounded-md flex gap-2 p-4" style="display: none;">
            <input type="text"
                class="flex-1 bg-gray-300 text-white border-none outline-none p-2 rounded-md"
                value="${notaAluno}"     
                placeholder="Digite a nota do aluno"
            />
            <button type="button" class="bg-blue-500 text-white px-4 py-2 rounded-md">Salvar</button>
        </div>`;
        return wrapper.firstElementChild;
    }
    

    boxEdit(event) {
        const btnEdit = event.target
        if(btnEdit.dataset.action === 'edit'){
            const  notaAluno = btnEdit.dataset.notaAluno; 
            btnEdit.style.display = 'none'

            btnEdit.after(this.renderBoxEdit(notaAluno));
            const boxEdit = btnEdit.nextElementSibling
            boxEdit.style.display = 'flex'  
        }
    }

}
