/*
Arrays em js

Variavel armazena apenas 1 valor
enaquanto o array armazena multiplos valores

ex01:
*/

/*
let frutas = ["Maça", "Banana", "Uva"]

console.log(frutas)
console.log(frutas[0])

console.log("-----------------------------------------")

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i] + "\n")
}

*/


//Metodos dos arrays

//push() - adiciona um item
//pop() -remove o item final
//shift() - adiciona no inicio
//lenght - conta o tamanho do array

//ex02

let frutas = ["Maça", "Banana", "Uva"]

frutas.push("Morango")
frutas.unshift("Goiaba")
frutas.pop()

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i] + "\n")
}