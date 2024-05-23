let listaDeNumerosSorteados = [];
MensagemInicial();
function MensagemInicial(){
  ExibirTextoNaTela('h1', 'Jogo do número secreto');
ExibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}


//insere frases na tela
function ExibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;

}

//gera numero aleatorio de 1 a 10
function numeroAleatorio() {
  let numeroEscolhido = parseInt(Math.floor(Math.random() * 10) + 1);
  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return numeroAleatorio();
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}
let numeroSecreto = numeroAleatorio();

let i = 1;
//gera o resultado
function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    let tentativa = i == 1 ? "tentativa" : "tentativas";
    ExibirTextoNaTela('h1', `você acertou em ${i} ${tentativa}`);
    ExibirTextoNaTela('p', 'Parabéns');
    //habilita botão
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

function limpaCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  limpaCampo();
  numeroAleatorio();
  MensagemInicial();

  i = 1;
  //reinicia e desabilita o botao
  document.getElementById('reiniciar').setAttribute('disabled',true);


}
