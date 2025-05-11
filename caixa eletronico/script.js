let valorSaque = parseInt(prompt('Digite o valor do saque'))
let notaDe100
let notaDe50
let notaDe10
let notaDe5
let umReal


let valorCaixa = valorSaque.toString().split('')
let centena
let dezena
let unidade

if (valorCaixa.length === 3){
    centena = valorCaixa[0]
    dezena = valorCaixa[1]
    unidade = valorCaixa[2]
} else if (valorCaixa.length === 2) {  
    dezena = valorCaixa[0]
    unidade = valorCaixa[1]
} else {
    unidade = valorCaixa[0]
}


//399
// 300 (3 notas de 100)  9 
// 50 (1 nota de 50)
// 40 (4 notas de 10)
// 5 (1 nota de 5)
// 4 (4 moedas de um real)


// vamos usar o 399 como base
if (valorSaque >= 10 && valorSaque <= 600) {
    if((centena * 100) % 100 === 0) { //verifica se a centena é divisivel por 100
        notaDe100 = centena
        console.log(notaDe100)
    }

    let $dezena = dezena * 10 // multiplica para obter o valor cheio
    //(9 * 10 = 90)
    let $unidade

    if (dezena >= 5) { //verifica se há notas de 50
        //(9 >= 5)
        notaDe50 = 1
        console.log(notaDe50)

        if(($dezena - 50) / 10 >= 1) { //verifica se há notas de 10
            /* 90 - 50 = 40
            40 / 10 = 4
            4 >= 1 (sim)
            */

            notaDe10 = ($dezena - 50) / 10 
            console.log(notaDe10)

            $unidade = ($dezena + parseInt(unidade)) - $dezena //obtém o valor das unidades que sobraram
        }
        
    }

    if (dezena >= 1 && dezena <= 4) { //verifica se há notas de 10
        notaDe10 = dezena

        console.log(notaDe10)
    }

    if ($unidade >= 5 || dezena == 0 && unidade >= 5 || unidade >= 5){ 
        if($unidade > 5) {
            notaDe5 = 1
            umReal = $unidade - 5
            console.log(umReal)
        }
        if (unidade >= 5) {
            notaDe5 = 1
            umReal = unidade - 5
        }
        console.log(notaDe5)
        console.log(umReal)
        
    }

    if (unidade >= 1 && unidade < 5) {
        umReal = unidade
        console.log(umReal)
    }


}