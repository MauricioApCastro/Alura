function sortear() {
    // Lê os inputs
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    // Verifica se os valores são válidos
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || quantidade <= 0 || de > ate) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Chama a função para gerar números aleatórios
    let numeros = gerarNumerosAleatorios(quantidade, de, ate);

    // Exibe os números sorteados
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeros.join(", ")}</label>`;

    alteraStatusBotao();
}

function gerarNumerosAleatorios(quantidade, de, ate) {
    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
        let numero = Math.floor(Math.random() * (ate - de + 1)) + de;
        numeros.push(numero);
    }
    return numeros;
}

function reiniciar() {
    // Limpa os inputs e o resultado
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';


    // Desabilita o botão de sortear
    document.getElementById("btn-sortear").disabled = true; // Comente esta linha se não deseja desabilitar o botão de sortear
    // Habilita o botão de reiniciar
    document.getElementById("btn-reiniciar").disabled = false; // Comente esta linha se não deseja habilitar o botão de reiniciar
}

function alteraStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}