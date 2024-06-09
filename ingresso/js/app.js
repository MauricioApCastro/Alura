let pista = 100;
let qtdeSuperior = 200;
let qtdeInferior = 400;
let qtdPista = document.getElementById('qtd-pista');
let qtdSuperior = document.getElementById('qtd-superior');
let qtdInferior = document.getElementById('qtd-inferior');


function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);


    let quantidadeDisponivel;

    switch (tipoIngresso) {
        case 'superior':
            quantidadeDisponivel = qtdeSuperior;
            break;
        case 'pista':
            quantidadeDisponivel = pista;
            break;
        case 'inferior':
            quantidadeDisponivel = qtdeInferior;
            break;
        default:
            alert('Tipo de ingresso inválido.');
            return;
    }

    if (quantidade <= quantidadeDisponivel) {
        switch (tipoIngresso) {
            case 'superior':
                qtdeSuperior -= quantidade;
                qtdSuperior.textContent = qtdeSuperior;
                break;
            case 'pista':
                pista -= quantidade;
                qtdPista.textContent = pista;
                break;
            case 'inferior':
                qtdeInferior -= quantidade;
                qtdSuperior.textContent = qtdeInferior;
                break;
        }
    } else {
        alert('Desculpe, não há ingressos suficientes disponíveis.');
    }
    document.getElementById('qtd').value = 0;
}