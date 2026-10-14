//FUNÇÕES EM js

//Funções são blocos de código reutilizaveis

//Função simples

/*
console.log("Função simples")

function saudacao(){
    console.log("Seja bem vindo!")
}
saudacao()

*/

//Função com parametro

/*
let nomeUser = prompt("Qual é o seu nome?")
function saudacao2(nome){
    console.log(`Seja bem vindo ${nome}`)
}

saudacao2(nomeUser)

*/

//EX2 - função com parametro e retorno

/*
function soma(num1,num2){
    return num1 + num2
}

console.log(`A soma dos numeros é ${soma(3,8)}`)

*/
//Ex 3 - Arrow function

let soma = (num1, num2) => {
    return num1 + num2
}

console.log(`À soma com arrow function é ${soma(4,8)}`)