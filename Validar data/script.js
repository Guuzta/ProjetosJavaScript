alert('Digite uma data:')

let dia = parseInt(prompt('digite o dia:'))
let mes = parseInt(prompt('digite o mês:'))
let ano = parseInt(prompt('digite o ano:'))

if(dia <= 31 && mes <= 12 && ano >= 1935) {
    if (mes === 2) {
        if (ano % 4 === 0 && dia <= 29) {
            alert(`${dia}/${mes}/${ano}`)
        } else if (dia <= 28) {
            alert(`${dia}/${mes}/${ano}`)
        } else {
            alert('Data inválida!')
        }
    } else {
        alert(`${dia}/${mes}/${ano}`) 
    }
} else {
    alert('Data inválida!')
}