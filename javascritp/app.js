let numeroSorteado = 5;
let i = 1;
//mostrar mensagem na tela
mostrarMensagem('h1', 'Jogo do número secreto');
mostrarMensagem('p', 'Escolha um número de 1 a 10');

//gerar mensagem na tela
function mostrarMensagem(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//gerar numero sorteador de 1 a 10
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10) + 1;
}

function MostrarResultado() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = i == 1 ? "tentativa" : "tentativas";
    if (chute == numeroSorteado) {
        mostrarMensagem('h1', 'Parabéns !!');
        mostrarMensagem('p',` Você acertou com ${i} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSorteado) {
            mostrarMensagem('p', 'o número sorteado é menor !!');
        } else {
            mostrarMensagem('p', 'o número sorteado é maior !!');
        }
        i++;
        limpaCampo();
    }

}

function verificarChute() {
    MostrarResultado();
}

function limpaCampo() {
    let chute = document.querySelector('input');
    chute.value = "";
 
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    ExibirMensagemTelaInicial();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
  }