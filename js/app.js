alunos.forEach(aluno => {
    aluno.media = {}
    for(let materia in aluno.notas) {
        aluno.media[materia] = avarege(...aluno.notas[materia])
    }
});

const htmlHeader = document.createElement('tr')
htmlHeader.innerHTML = `<td class="px-5 py-3 text-left">Nome</td>`
const htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => `<td class="px-5 py-3 text-left">${materia}</td>`).join('')
htmlHeader.innerHTML += htmlHeaderMaterias
document.querySelector('[data-table="alunos"] thead').appendChild(htmlHeader)

function render() { 
    // limpar tudo para atualizar linha
    document.querySelector('[data-table="alunos"] tbody').innerHTML = ''

    alunos.forEach(aluno => {
        const htmlRow = document.createElement('tr')
        htmlRow.className = 'odd:bg-white even:bg-gray-100';
        htmlRow.innerHTML = `<td class="px-6 py-3 text-left">${aluno.nome}</td>`
        // console.log(Object.keys(aluno.notas)) - atenção para o uso de Object.keys, que retorna um array com as chaves do objeto
        const htmlRowMaterias = Object.keys(aluno.notas).map(materia => `<td>${aluno.media[materia]}</td>`).join('')
        htmlRow.innerHTML += htmlRowMaterias
        document.querySelector('[data-table="alunos"] tbody').appendChild(htmlRow)
    })
}
render()

document.querySelector('#form-add').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('firstName').value;

    let newAluno = {
        _id: 0,
        nome,
        notas: {
          portugues: [1, 1, 2, 2],
          matematica: [2, 2, 2, 2],
          historia: [2, 2, 3, 3],
          ciencias: [3, 3, 3, 3],
        },
        media: {} // já define media aqui
    };

    for (let materia in newAluno.notas) {
        newAluno.media[materia] = avarege(...newAluno.notas[materia]);
    }

    alunos.push(newAluno);

    render();

});
