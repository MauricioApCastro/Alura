function sortear() {
    //lê os inputs
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    alert(numero);

}
// Chama a função para gerar números aleatórios
let numeroAleatorio = gerarNumerosAleatorios(quantidade, de, ate);

function gerarNumerosAleatorios(quantidade, de, ate) {
    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
        let numero = Math.floor(Math.random() * (ate - de + 1)) + de;
        numeros.push(numero);
    }
    return numeros;
}