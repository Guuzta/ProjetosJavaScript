const quadrados = document.querySelectorAll('div')
const resultado = document.querySelector('span')
const btnReiniciar = document.querySelector('button')

let jogadorAtual = 'X'
let jogoAtivo = true
const combinacoesDeVitoria = [
    [0,1,2],[3,4,5],[6,7,8], //linhas
    [0,3,6],[1,4,7],[2,5,8], //colunas
    [0,4,8],[2,4,6]//diagonais
]

function cliqueNoQuadrado (e) {
    resultado.classList.add('visivel')
    const quadrado = e.target
    
    if (quadrado.innerText !== '' || !jogoAtivo) return

    quadrado.classList.add(`${jogadorAtual}`)
    quadrado.innerText = jogadorAtual


    if(verificarVitoria()) {
        resultado.innerText = `Vitória do ${jogadorAtual}!`
        quadrados.forEach(quadrado => {quadrado.removeEventListener('click',cliqueNoQuadrado)})
        jogoAtivo = false
    } else if (verificarEmpate()) {
        resultado.innerText = 'DEU EMPATE!'
        jogoAtivo = false
    } else {
       jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X'
       resultado.innerText = `Vez do ${jogadorAtual} jogar!`
    }
    
    
}

function verificarVitoria () {
   return combinacoesDeVitoria.some(combinacao => {
        return combinacao.every(index => {
            return quadrados[index].innerText === jogadorAtual
        })
   })
}

function verificarEmpate () {
    return Array.from(quadrados).every(quadrado => quadrado.innerText !== '')
}

function reiniciarJogo () {
    jogadorAtual = 'X'
    jogoAtivo = true
    resultado.classList.remove('visivel')

    quadrados.forEach(quadrados => {
        quadrados.innerText = ''
    })

    quadrados.forEach(quadrado => {
        quadrado.addEventListener('click',cliqueNoQuadrado)
    } )
}


quadrados.forEach(quadrado => {quadrado.addEventListener('click', cliqueNoQuadrado)})
btnReiniciar.addEventListener('click', reiniciarJogo)