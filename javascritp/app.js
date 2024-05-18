alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute ;

while(chute != numeroSecreto)
    {
        chute = prompt('Escolha um número entre 1 e 10');
        if (chute > numeroSecreto) {
            alert('o número secreto é menor')
        }
    
        else if(chute < numeroSecreto){
            alert('o número secreto é maior')
        }
}
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
