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

    alert(listaNumero);
}

// Função que gera um número aleatório
function gerarNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

