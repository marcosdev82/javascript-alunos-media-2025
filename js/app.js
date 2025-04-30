const alunos = [
    {
        _id: 0,
        nome: "chico melato",
        notas: {
        portugues: [1, 1, 2, 2],
        matematica: [2, 2, 2, 2],
        historia: [2, 2, 3, 3],
        ciencias: [3, 3, 3, 3],
        },
    },
    {
        _id: 1,
        nome: "talita lima",
        notas: {
        portugues: [4, 4, 4, 4],
        matematica: [4, 4, 5, 5],
        historia: [5, 5, 6, 6],
        ciencias: [7, 7, 8, 9],
        },
    },
];

const alunosService = new AlunosService();

alunos.forEach(aluno => {
    alunosService.add(new AlunosModel(aluno));
});

const alunosView = new AlunosView(document.querySelector('[data-table="alunos"]'));

const alunosController = new AlunosController(alunosService, alunosView);

document.querySelector('#form-add').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('firstName').value;

    alunosController.add({ nome })
});

document.querySelector('tbody').addEventListener('click', function(e) {
    e.preventDefault();
    alunosView.renderBoxEdit(e)

    // const nome = document.getElementById('firstName').value;

    // alunosController.add({ nome })
});




// const htmlHeader = document.createElement('tr')
// htmlHeader.innerHTML = `<td class="px-5 py-3 text-left">Nome</td>`
// const htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => `<td class="px-5 py-3 text-left">${materia}</td>`).join('')
// htmlHeader.innerHTML += htmlHeaderMaterias
// document.querySelector('[data-table="alunos"] thead').appendChild(htmlHeader)

// function render() { 
//     // limpar tudo para atualizar linha
//     document.querySelector('[data-table="alunos"] tbody').innerHTML = ''

//     alunos.forEach(aluno => {
//         const htmlRow = document.createElement('tr')
//         htmlRow.className = 'odd:bg-white even:bg-gray-100';
//         htmlRow.innerHTML = `<td class="px-6 py-3 text-left">${aluno.nome}</td>`
//         // console.log(Object.keys(aluno.notas)) - atenção para o uso de Object.keys, que retorna um array com as chaves do objeto
//         const htmlRowMaterias = Object.keys(aluno.notas).map(materia => `<td>${aluno.media[materia]}</td>`).join('')
//         htmlRow.innerHTML += htmlRowMaterias
//         document.querySelector('[data-table="alunos"] tbody').appendChild(htmlRow)
//     })
// }
// render()

// document.querySelector('#form-add').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const nome = document.getElementById('firstName').value;

//     let newAluno = {
//         _id: 0,
//         nome,
//         notas: {
//           portugues: [1, 1, 2, 2],
//           matematica: [2, 2, 2, 2],
//           historia: [2, 2, 3, 3],
//           ciencias: [3, 3, 3, 3],
//         },
//         media: {} // já define media aqui
//     };

//     for (let materia in newAluno.notas) {
//         newAluno.media[materia] = avarege(...newAluno.notas[materia]);
//     }

//     alunos.push(newAluno);

//     render();

// });
