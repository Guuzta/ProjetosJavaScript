let kgMorango = parseInt(prompt('Quantos KG de Morango você deseja?'))
let kgMaca = parseInt(prompt('Quantos KG de Maça você deseja?'))
let precoMorango
let precoMaca
let total

if (kgMorango <= 5) {
    precoMorango = 2.5
} else if (kgMorango > 5) {
    precoMorango = 2.2
    console.log('teste')
}

if(kgMaca <= 5) {
    precoMaca = 1.8
    console.log('teste')
} else if (kgMaca > 5) {
    precoMaca = 1.5
}

total = (precoMorango * kgMorango ) + (precoMaca * kgMaca)
let totalKg = kgMorango + kgMaca
let desconto

if (total > 25 || totalKg > 8) {
    desconto = total * 0.1
    total = total - desconto
    console.log('teste desconto')
}