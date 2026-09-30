/*
A diferença do While e do Do While

1- While
    1.1- While verifica a condição antes de entrar no loop
    1.2 -  Tem um contador e variável de escape do loop

2 - Do while
    1.1 Prmeiro executa o loop e depois testa
    1.2 Usado quando se precisa executar o loop pelo menos 1 vez
    1.3 Escapa do loop apenas se a variável atender a condição

*/

//While

/*

let num6 = 0

while(num6 <= 5){
    console.log(`${(num1 + 1)}° rodada`)
    num1++
}

*/

// EXEMPLO 2 TABUADA



let num1 = 0
let numFixo = Number(prompt("Digite o número para fazer a tabuada"))

while(num1 <= 10){
    console.log(`${numFixo} x ${num1} = ${(numFixo * num1)}`)
    num1++
}

