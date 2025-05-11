function funcaoTeste () {
    let paisA = parseInt(prompt('Digite o número inicial de pessoas do primeiro país:'))
    let paisB = parseInt(prompt('Digite o número inicial de pessoas do segundo país:'))

    while (isNaN(paisA) || isNaN(paisB)) {
        alert('Os dados digitados não são números!')
        paisA = parseInt(prompt('Digite o número inicial de pessoas do primeiro país:'))
        paisB = parseInt(prompt('Digite o número inicial de pessoas do segundo país:'))
    }

    let taxaA = parseFloat(prompt('Digite a taxa de crescimento anual do primeiro país:'))
    let taxaB = parseFloat(prompt('Digite a taxa de crescimento anual do segundo país:'))

    while(isNaN(taxaA) || isNaN(taxaB)) {
        alert('Os dados digitados não são números!')
        taxaA = parseFloat(prompt('Digite a taxa de crescimento anual do primeiro país:'))
        taxaB = parseFloat(prompt('Digite a taxa de crescimento anual do segundo país:'))
    }

    taxaA /= 100
    taxaB /= 100

    let crescimentoA
    let crescimentoB
    let anos = 0

    console.log(taxaA)
    console.log(taxaB)

    while (paisA < paisB) {

        anos++

        crescimentoA = paisA * taxaA
        paisA += crescimentoA

        crescimentoB = paisB * taxaB
        paisB += crescimentoB

        if (paisA === paisB) {
            console.log(`O pais A igualou o pais B em ${anos} anos!`)
            console.log(paisA)
            console.log(paisB)
        }

    }

    console.log(`O país A ultrapassou o país B em ${anos} anos!`)
    console.log(parseInt(paisA))
    console.log(parseInt(paisB))
}