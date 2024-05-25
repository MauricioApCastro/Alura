let numero = obterNumeroAleatorio(de, ate);

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }
    
    alert(sorteados);
}


//gera número aleatório
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//armazena o númeor aleatório
let numeroSorteado = gerarNumeroAleatorio(min, max);