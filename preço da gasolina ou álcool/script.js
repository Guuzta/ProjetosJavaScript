let alcoolOuGasolina = prompt('Você deseja abastecer com Álcool (A) ou Gasolina(G)?')
let quantidadeDeLitros
let precoLitro
let semDesconto
let descontoAplicado
let total

if(alcoolOuGasolina === 'A' || alcoolOuGasolina === 'G') {
    quantidadeDeLitros = prompt('Digite a quantidade de Litros que você deseja:')


    if (alcoolOuGasolina === 'G') {
        precoLitro = 2.5
        
        if (quantidadeDeLitros <= 20){
            descontoAplicado = (precoLitro * 0.04) * quantidadeDeLitros
            semDesconto = precoLitro * quantidadeDeLitros
            total = (precoLitro * quantidadeDeLitros) - descontoAplicado
        } else if (quantidadeDeLitros > 20) {
            descontoAplicado = (2.5 * 0.06) * quantidadeDeLitros
            semDesconto = precoLitro * quantidadeDeLitros
            total = (precoLitro * quantidadeDeLitros) - descontoAplicado
            console.log(total)
        }


    } else if (alcoolOuGasolina === 'A') {
        precoLitro = 1.9

        if (quantidadeDeLitros <= 20) {
            descontoAplicado = (precoLitro * 0.03) * quantidadeDeLitros
            semDesconto = precoLitro * quantidadeDeLitros
            total = (precoLitro * quantidadeDeLitros) - descontoAplicado
        } else if (quantidadeDeLitros > 20) {
            descontoAplicado = (precoLitro * 0.05) * quantidadeDeLitros
            semDesconto = precoLitro * quantidadeDeLitros
            total = (precoLitro * quantidadeDeLitros) - descontoAplicado
        }
    }

    alert(`
        
        --------------------------------------
        Álcool ou Gasolina: ${alcoolOuGasolina}
        Quantidade de Litros: ${quantidadeDeLitros}
        Preço do Litro: R$${precoLitro}
        Total sem desconto: R$${semDesconto}
        Desconto Aplicado: R$${descontoAplicado}
        Preço final: R$${total}
        --------------------------------------
        `)



} else {
    alert('Resposta inválida!')
}