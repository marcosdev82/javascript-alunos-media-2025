alunos.forEach(aluno => {
    aluno.media = {}
    for(let materia in aluno.notas) {
        aluno.media[materia] = avarege(...aluno.notas[materia])
    }
});

const htmlHeader = document.createElement('tr')
htmlHeader.innerHTML = "<td>Nome</td>"

const htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => `<td>${materia}</td>`).join('')

htmlHeader.innerHTML += htmlHeaderMaterias
// console.log(htmlHeaderMaterias)

document.querySelector('[data-table="alunos"] thead').appendChild(htmlHeader)