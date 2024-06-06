let botao;
// Função para recuperar os dados e sortear números aleatórios
function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    botao = document.getElementById("btn-reiniciar");
    let listaNumero = [];

    // Loop para gerar números aleatórios
    for (let i = 0; i < quantidade; i++) {
        let numeroAleatorio;
        do {
            numeroAleatorio = gerarNumeroAleatorio(de, ate);
            //evita a duplicidade
        } while (listaNumero.includes(numeroAleatorio));
        listaNumero.push(numeroAleatorio);
    }
    //mostra resultado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaNumero}</label>`;


    //habilita botão reiniciar

    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
}

// Função que gera um número aleatório
function gerarNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}
//funcao reiniciar
function reiniciar() {
    quantidade.value = "";
    de.value = "";
    ate.value = "";
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");

}
