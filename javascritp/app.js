
//let numeroSecreto = gerarNumeroAleatorio();
let numeroSecreto = 5;


function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10) + 1;
}

function exibirMensagem(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirMensagem('h1', 'Jogo do número secreto');
exibirMensagem('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirMensagem('p', 'Você acertou!');
  } else {
    if (chute > numeroSecreto) {
      exibirMensagem('p', 'o número é menor!');
    } else {
      exibirMensagem('p', 'o número é maior!');
    }
  }
}

