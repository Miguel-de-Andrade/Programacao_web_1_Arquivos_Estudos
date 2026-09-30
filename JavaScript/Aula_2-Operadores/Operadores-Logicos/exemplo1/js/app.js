/*
Operadores lógicos

&& -> and/E logico
|| -> or/OU logico

| not/não logico

*/

//Exemplos

let num1 = 10
let num2 = 15
let num3 = 2

console.log("Condições simples")

if(num1 >= num2){
    console.log("Entrou no if")
}else{
    console.log("Falso! Não entrou no if")
}

//Exemplo composto

console.log("Condições compostas")

if((num1 >= num2) && (num1 != num3)){
    console.log("Entrou no if")
}else{
    console.log("Falso! Não entrou no if")
}

//Exemplo com 3 condições

console.log("Condições com 3 situações")

if((num1 >= num2) && (num1 != num3) || (num1 != num3)){
    console.log("Entrou no if")
}else{
    console.log("Falso! Não entrou no if")
}

//Condição Simples negada

console.log("Condição simples negada")

if (!(num1 >= num2)){
    console.log("Entrou no if")
}else{
    console.log("Falso! Não entrou no if")
}
