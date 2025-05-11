let operacao = prompt(`
    Qual operação você deseja realizar?
    (Digite o símbolo correspondente a operação)
    Adição (+)
    Subtração (-)
    Multiplicação (*)
    Divisão (/)
`)

let num1
let num2
let resultado
let parOuImpar
let inteiroOuDecimal

if (operacao === '+' || operacao === '-' || operacao === '*' || operacao === '/'){

    num1 = parseFloat(prompt('Digite o primeiro número:'))
    num2 = parseFloat(prompt('Digite o segundo número:'))   

    switch(operacao) {
        case '+':
            resultado = num1 + num2
            break;
        case '-':
            resultado = num1 - num2
            break;
        case '*':
            resultado = num1 * num2
            break;
        case '/':
            resultado = num1 / num2
            break;
    }

    if(resultado % 2 === 0){
        parOuImpar = 'PAR'
    } else {
        parOuImpar = 'ÍMPAR'
    }

    let resultado_arredondado = Math.round(resultado)
    if (resultado > resultado_arredondado || resultado < resultado_arredondado) {
        inteiroOuDecimal = 'DECIMAL'
    } else {
        inteiroOuDecimal = 'INTEIRO'
    }

    alert(`
        Resultado(${operacao})
        ${num1} ${operacao} ${num2} = ${resultado}!
        Número ${resultado} é: ${parOuImpar}!
        Número ${resultado} é: ${inteiroOuDecimal}!
        
        `)
} else {
    alert('Operação inválida!')
}