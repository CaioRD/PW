// const modal = document.querySelector('.modal-container')
// const tbody = document.querySelector('tbody')
// const sNome = document.querySelector('#m-nome')
// const sFuncao = document.querySelector('#m-nota1')
// const sSalario = document.querySelector('#m-nota2')
// const btnSalvar = document.querySelector('#btnSalvar')

// let itens
// let id

// function openModal(edit = false, index = 0) {
//     modal.classList.add('active')

//     modal.onclick = e => {
//         if (e.target.className.indexOf('modal-container') !== -1) {
//             modal.classList.remove('active')
//         }
//     }

//     if (edit) {
//         sNome.value = itens[index].nome
//         sNota1.value = itens[index].nota1
//         sNota2.value = itens[index].nota2
//         id = index
//     } else {
//         sNome.value = ''
//         sNota1.value = ''
//         sNota2.value = ''
//     }

// }

// function editItem(index) {

//     openModal(true, index)
// }

// function deleteItem(index) {
//     itens.splice(index, 1)
//     setItensBD()
//     loadItens()
// }


// function insertItem(item, index) {
//     let tr = document.createElement('tr')

//     tr.innerHTML = `
//     <td>${item.nome}</td>
//     <td>Nota 1: ${item.nota1}</td>
//     <td>Nota 2: ${item.nota2}</td>
//     <td class="acao">
//       <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
//     </td>
//     <td class="acao">
//       <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
//     </td>
//   `
//     tbody.appendChild(tr)
// }

// btnSalvar.onclick = e => {

//     if (sNome.value == '' || sNota1.value == '' || sNota2.value == '') {
//         return
//     }

//     e.preventDefault();

//     if (id !== undefined) {
//         itens[id].nome = sNome.value
//         itens[id].funcao = sNota1.value
//         itens[id].salario = sNota2.value
//     } else {
//         itens.push({ 'nome': sNome.value, 'nota1': sNota1.value, 'nota2': sNota2.value })
//     }

//     setItensBD()

//     modal.classList.remove('active')
//     loadItens()
//     id = undefined
// }

// function loadItens() {
//     itens = getItensBD()
//     tbody.innerHTML = ''
//     itens.forEach((item, index) => {
//         insertItem(item, index)
//     })

// }

// const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
// const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

// loadItens()


// //Função para tirar média
// function resultado_media() {
//     const nomeAluno = document.querySelector('.entrada').value.trim();

//     if(nomeAluno === ''){
//         document.querySelector('res').innerHTML = "Por favor, insira o nome do aluno.";
//         return;
//     }

//     const aluno = itens.find(item => item.nome === nomeAluno);

//     if(!aluno){
//         document.querySelector('.res').innerHTML = "Aluno  não encontrado.";
//         return;
//     }


//     const nota1 = parseFloat(sNota1.value);
//     const nota2 = parseFloat(sNota2.value);
//     const media = (nota1 + nota2) / 2;
//     if (isNaN(media)) {
//         document.querySelector('.res').innerHTML = ""
//     }else if (media < 5) {
//         document.querySelector('.res').innerHTML = "QUe pena, o aluno foi Reprovado!"
//     } else if (media < 7) {
//         document.querySelector('.res').innerHTML = "Quase lá, o aluno ficou de recuperação!"
//     } else {
//         document.querySelector('.res').innerHTML = "Parabéns, o aluno foi aprovado!"
//     }
// }


const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-nome');
const sNota1 = document.querySelector('#m-nota1');
const sNota2 = document.querySelector('#m-nota2');
const btnSalvar = document.querySelector('#btnSalvar');

let itens;
let id;

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sNota1.value = itens[index].nota1
    sNota2.value = itens[index].nota2
    id = index
  } else {
    sNome.value = ''
    sNota1.value = ''
    sNota2.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>nota 1: ${item.nota1}</td>
    <td>nota 2: ${item.nota2}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || sNota1.value == '' || sNota2.value == '') {
    return;
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].nota1 = sNota1.value
    itens[id].nota2 = sNota2.value
  } else {
    itens.push({'nome': sNome.value, 'nota1': sNota1.value, 'nota2': sNota2.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()


 //Função para tirar média
 function resultado_media() {
    const nomeAluno = document.querySelector('.entrada').value.trim();

     if(nomeAluno === ''){
         document.querySelector('res').innerHTML = "Por favor, insira o nome do aluno.";
         return;
     }

     const aluno = itens.find(item => item.nome === nomeAluno);

     if(!aluno){
         document.querySelector('.res').innerHTML = "Aluno  não encontrado.";
         return;
     }


     const nota1 = parseFloat(sNota1.value);
     const nota2 = parseFloat(sNota2.value);
     const media = (nota1 + nota2) / 2;
     if (isNaN(media)) {
         document.querySelector('.res').innerHTML = ""
     }else if (media < 5) {
         document.querySelector('.res').innerHTML = "Que pena, o aluno foi Reprovado!"
     } else if (media < 7) {
         document.querySelector('.res').innerHTML = "Quase lá, o aluno ficou de recuperação!"
     } else {
         document.querySelector('.res').innerHTML = "Parabéns, o aluno foi aprovado!"
     }
 }

