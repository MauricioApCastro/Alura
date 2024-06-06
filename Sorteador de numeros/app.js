// Função para recuperar os dados e sortear números aleatórios
function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let listaNumero = [];

    // Loop para gerar números aleatórios
    for (let i = 0; i < quantidade; i++) {
        let numeroAleatorio = gerarNumeroAleatorio(de, ate);
        listaNumero.push(numeroAleatorio);
    }
//mostra resultado na tela
let resultado = document.getElementById("resultado");
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaNumero}</label>`;

    
    //habilita botão reiniciar
    let botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
}

// Função que gera um número aleatório
function gerarNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

