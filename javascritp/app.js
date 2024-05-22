
ExibirTextoNaTela('h1', 'Jogo do número secreto');
ExibirTextoNaTela('p', 'Escolha um número de 1 a 10');

//insere frases na tela
function ExibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

//gera numero aleatorio de 1 a 10
function numeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}
let numeroSecreto = numeroAleatorio();

let i = 1;
//gera o resultado
function verificarChute() {
  let chute = document.querySelector('input').value;
  
  if (chute == numeroSecreto) {
    let tentativa = i == 1 ? "tentativa":"tentativas";
    ExibirTextoNaTela('h1', `você acertou em ${i} ${tentativa}`);
    ExibirTextoNaTela('p', 'Parabéns');
document.getElementById('reiniciar').removeAttribute('disabled');

    
  } else {
    if (chute > numeroSecreto) {
      ExibirTextoNaTela('p', 'O número é menor');
    } else {
      ExibirTextoNaTela('p', 'O número é maior');
    }
    limpaCampo();
  }
  i++;

}

function limpaCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}
