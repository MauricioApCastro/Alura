let amigos = [];
let lista;

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value;
    lista = document.getElementById("lista-amigos");
    if (nomeAmigo === '') {
        alert('Insira o nome');
        return;
    }
    amigos.push(nomeAmigo);
    lista.textContent = amigos;
    document.getElementById("nome-amigo").value = '';
    liberaBotao();

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {
    if (amigos.length <= 3) {
        alert('Insira pelo menos 4 amigos');
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}


function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}