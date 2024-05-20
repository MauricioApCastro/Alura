
let numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
  return parseInt (Math.random() * 10) + 1;
  
}

function exibirMensagem(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagem('h1','Jogo do número secreto');
exibirMensagem('p','Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto == chute);
}

