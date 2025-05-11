let numero = parseInt(prompt('Digite um número menor que 1000(mil)!'))
let numeroString = numero.toString().split("")
let centenas = 'centenas'
let dezenas = 'dezenas'
let unidades = 'unidades'

if (numero < 1000) {
    if(numeroString.length === 3) {
       switch(numeroString[0]) {
        case '1':
            centenas = 'centena'
            break;
       }
       switch(numeroString[1]) {
        case '1':
            dezenas = 'dezena'
            break;
       }
       switch(numeroString[2]) {
        case '1':
            unidades = 'unidade'
            break;
       }

       alert(
        `
        numero: ${numero}
        ${numeroString[0]} ${centenas}
        ${numeroString[1]} ${dezenas}
        ${numeroString[2]} ${unidades}
        `)


    } else if (numeroString.length === 2) {
        switch(numeroString[0]) {
            case '1':
                dezenas = 'dezena'
                break;
        }
        switch(numeroString[1]) {
            case '1':
                unidades = 'unidade'
                break;
        }

        alert(
            `
            numero: ${numero}
            ${numeroString[0]} ${dezenas}
            ${numeroString[1]} ${unidades}
            `)
        
    } else if (numeroString.length === 1) {
        switch(numeroString[0]) {
            case '1':
            unidades = 'unidade'
            break;
        }

        alert(
            `
            numero: ${numero}
            ${numeroString[0]} ${unidades}
            `)
        
    }
} else {
    alert('Número inválido!')
}