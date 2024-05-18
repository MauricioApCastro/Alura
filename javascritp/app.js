alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute;
let count = 0;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute > numeroSecreto) {
        alert('o número secreto é menor')
    }

    else if (chute < numeroSecreto) {
        alert('o número secreto é maior')
    }
    count++;
}
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
alert(`Você tentou ${count} vezes!`);