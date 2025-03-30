const inputCep = document.getElementById('cep')
const inputRua = document.getElementById('rua')
const inputBairro = document.getElementById('bairro')
const inputEstado = document.getElementById('estado')
const inputIbge = document.getElementById('ibge')

function consultarCep (callback) {
    let cep = inputCep.value
    
    const validarCep = /^[0-9]{8}$/
    let cepExiste = validarCep.test(cep)

    if(cep === '') {
        return
    }
    
    if(cepExiste) {
       callback(cep)
    } else {
        alert('Cep não EXISTE!')
        limparOsCampos()
    }
}

function preencherOsCampos (cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            
            if(data.erro === 'true') {
                console.log('Cep não existente!')
                alert('Cep não EXISTE!')
                limparOsCampos()
                return
            }

            inputRua.value = data.logradouro
            inputBairro.value = data.bairro
            inputEstado.value = data.estado
            inputIbge.value = data.ibge
        })
}

function limparOsCampos () {
    inputCep.value = ''
    inputRua.value =''
    inputBairro.value = ''
    inputEstado.value = ''
    inputIbge.value = ''
}

inputCep.onblur = () => consultarCep(preencherOsCampos)