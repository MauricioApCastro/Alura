function sortear() {
    //faz um link com os dados da tela
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let resultado = document.getElementById("resultado");
    //chama o metodo e inclui os parâmetros da tela e passa para a variável
    let numerosSorteados = gerarNumerosAleatorios(quantidade, de, ate);
     // Formata o resultado com uma tag
    let texto = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados.join(", ")}</label>`;
    resultado.innerHTML = texto;
}

function gerarNumerosAleatorios(quantidade, de, ate) {
    //faz uma lista com os números
    let numerosSorteados = [];
    //gera numeros aleatórios seguindo quantidade de número e min e max
    while (numerosSorteados.length < quantidade) {
        let numeroAleatorio = Math.floor(Math.random() * (ate - de + 1)) + de;
        // Evita duplicidade
        //verifica dentro da lista se já tem o número
        if (!numerosSorteados.includes(numeroAleatorio)) {
            numerosSorteados.push(numeroAleatorio);
        }
    }
    return numerosSorteados;
}          