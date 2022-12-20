const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const stata = document.querySelectorAll("[data-stata]")

const controle = document.querySelectorAll(".controle-ajuste")

// array das pecas do robo
controle.forEach( (elemento_peca) => {
    elemento_peca.addEventListener("click", (evento) => {
        // pegando os pais (parentnode) desse nó
        // pega o data atributo 
        manipulaDados(evento.target.dataset.controle ,evento.target.parentNode)
        atualizaDados(evento.target.dataset.peca )
    })
})
// calculando qdade de peças
function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]")
    console.log(peca)
  

    if (operacao == "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1

    }
}
function atualizaDados(peca) {
    stata.forEach((numero_stata) => {
        console.log(numero_stata.textContent)
        console.log(pecas[peca][numero_stata.dataset.stata])
        console.log("-----------------")

        numero_stata.textContent = parseInt(numero_stata.textContent) + pecas[peca][numero_stata.dataset.stata]
        console.log(numero_stata)

    })

    console.log("-----------------")
    
    console.log(peca)   
    console.log(pecas[peca])
}
