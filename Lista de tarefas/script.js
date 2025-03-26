const listaDeTarefas  =  {

    tarefas: [],

    iniciar: function () {
       this.elementosHtml()
       this.conectarEventos()
       this.pegarTarefas()
       this.construirTarefas()
    },

    elementosHtml: function () {
       this.$btnConcluirTarefa = document.querySelectorAll('#concluirTarefa')
       this.$btnExcluirTarefa = document.querySelectorAll('#excluirTarefa')
       this.$inputTarefa = document.querySelector('#inputTarefa')
       this.$lista = document.getElementById('tarefa')
       this.$texto = document.querySelector('.texto')
    },

    pegarTarefas: function () {
        const tarefa = localStorage.getItem('tarefas')
        this.tarefas = JSON.parse(tarefa)
    },

    pegarTarefasHtml: function(tarefa) {
        return `
                <li >
                    <button id="concluirTarefa"></button>
                    <label class="texto">${tarefa}</label>
                    <button id="excluirTarefa"></button>
                </li>
            `
    },

    construirTarefas: function () {
        let html = ''
        this.tarefas.forEach(item => {
            html += this.pegarTarefasHtml(item.tarefa)
        })

        this.$lista.innerHTML = html
        this.elementosHtml()
        this.conectarEventos()
    },

    conectarEventos: function () {
        const self = this
        

        this.$btnConcluirTarefa.forEach(function(botao) {
            botao.onclick = self.eventos.btnConcluirTarefa_click
        })

        this.$btnExcluirTarefa.forEach(function(botao){
            botao.onclick = self.eventos.btnExcluirTarefa_click.bind(self)
        })

        this.$inputTarefa.onkeypress = this.eventos.inputTarefa_keypress.bind(this)
    },

    eventos: {
        btnConcluirTarefa_click: function (e) {
            const li = e.target.parentElement
            
            if(!li.classList.contains('concluida')) {
                li.classList.add('concluida')
            } else {
                li.classList.remove('concluida')
            }

            
        },

        btnExcluirTarefa_click: function (e) {
            const li = e.target.parentElement
            const texto = this.$texto.innerText

            const tarefasAtualizada = this.tarefas.filter(item => item.tarefa !== texto)
            localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizada))

            li.classList.add('excluida')
        },

        inputTarefa_keypress: function (e) {
            const key = e.key
            const tarefas = e.target.previousElementSibling
            const tarefa = e.target.value


            if(key === 'Enter') {
                tarefas.innerHTML += this.pegarTarefasHtml(tarefa)
                
                e.target.value = ''

               

                const tarefasSalvas = localStorage.getItem('tarefas')
                const tarefasSalvasObj = JSON.parse(tarefasSalvas)

                const obj = [
                    {tarefa: tarefa},
                    ...tarefasSalvasObj
                ]

                const tarefaJSON = JSON.stringify(obj)
                localStorage.setItem('tarefas', tarefaJSON) 
                
                
                this.elementosHtml()
                this.conectarEventos()              
                                
            }
        }
    }

}

listaDeTarefas.iniciar()