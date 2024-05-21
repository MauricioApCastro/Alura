
//let numeroSecreto = gerarNumeroAleatorio();
let numeroSecreto = 5;
let tentativa = 1;

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
    let palavraTentativa = tentativa == 1 ? 'tentativa' : ' tentativas';
    exibirMensagem('p', ` Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`);
    document.getElementById('reiniciar').removeAttribute('disabled');

  } else {
    if (chute > numeroSecreto) {
      exibirMensagem('p', 'o número é menor!');
    } else {
      exibirMensagem('p', 'o número é maior!');
    }
    tentativa++;
    limpaCampo();
  }

}
function limpaCampo() {
  let limpa = document.querySelector('input');
  limpa.value = "";

}


