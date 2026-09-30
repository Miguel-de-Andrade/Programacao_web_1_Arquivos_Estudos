alert ("Bem vindo a aula de switch case")
let num1 = Number(prompt("Digite o primeiro numero"))
let num2 = Number(prompt("Digite O segundo numero"))

let escolha = Number(prompt("Digite 1 para soma e 2 para multiplicação"))

switch(escolha){
    case 1:
        let soma = num1 + num2
        console.log(`Voce escolheu soma. O valor da soma é: ${soma}`)
        break
        
    case 2:
        let multi = num1 * num2
        console.log(`Voce escolheu multiplicação. O valor da multiplicação é: ${multi}`)
        break
    
    default:
        console.log("ERRO! Escolha inválida")    
}
