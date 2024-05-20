

function exibirMensagem(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirMensagem('h1','Jogo do número secreto');
exibirMensagem('p','Escolha um número entre 1 e 10');

function verificarChute(){
    console.log('O botão foi acionado');
}

