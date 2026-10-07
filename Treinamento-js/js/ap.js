alert("Bem vindo ao meu site!")

let num1 = Number(prompt("Digite o valor do numero 1: "))
let num2 = Number(prompt("Digite o valor do numero 2: "))

let escolha = Number(prompt("Digite: 1 para somar, 2 para multiplicar, 3 para dividir e 4 para subtrair"))

switch(escolha){
    case(1):
        let soma = num1 + num2
        console.log(`A soma do numero ${num1} com o numero ${num2} é: ${soma}`)
        break

    case(2):
        let multi = (num1 * num2)
        console.log(`A multiplicação do numero ${num1} com o numero ${num2} é: ${multi}`)
        break

    case(3):
        if(num2 != 0){
            let div = num1/num2
            console.log(`A divisão do numero ${num1} com o numero ${num2} é: ${div.toFixed(2)}`)
        }else{
            console.log("Não dividiras por 0")
        }
         break

    case(4):
        let sub = num1 - num2
        console.log(`A subtração do numero ${num1} com o numero ${num2} é: ${sub}`)
        break

    default:
        console.log("Errado pae")

}