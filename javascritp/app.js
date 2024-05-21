
let numeroSecreto = gerarNumeroAleatorio();

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
    let tentativa = 1;

    exibirMensagem('h1', 'Acertou!');
    exibirMensagem('p', 'Você descobriu o número secreto com 1 tentativa!');
  } else {
    if (chute > numeroSecreto) {
      exibirMensagem('p', 'O número secreto é menor');
    } else {
      exibirMensagem('p', 'O número secreto é maior');
    }
  }
}





