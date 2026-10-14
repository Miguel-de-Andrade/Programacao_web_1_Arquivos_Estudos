/*
Objetos Armazenam dados organizados ex: ptopriedades e valor

*/

let aluno = {
    nome: "Carlos",
    idade: 20,
    curso: "Desenvolvimento de Sistemas"
}

for(let chave in aluno){
    console.log(`${chave}: ${aluno[chave]}`)
}