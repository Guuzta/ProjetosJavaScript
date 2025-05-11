let btnVerificar = document.querySelector('button')

function decrescente () {

    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let num3 = parseInt(document.getElementById('num3').value)

    let resultado = document.getElementById('resultado')

    let maior = num1
    let menor = num1
    let meio = num1

    //maior
    if (num2 > maior) {
        maior = num2
    }
    if (num3 > maior) {
        maior = num3
    }

    //menor
    if (num2 < menor) {
        menor = num2
    }
    if (num3 < menor) {
        menor = num3
    }


    if(meio === maior || meio === menor) {
        meio = num2
    }
    if (meio === maior || meio === menor) {
        meio = num3
    }

    resultado.innerHTML = `${maior}, ${meio}, ${menor}`

} 

btnVerificar.addEventListener('click',decrescente)