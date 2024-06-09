let amigos = [];
function adicionar(){
    let nomeAmigo = document.getElementById("nome-amigo").value;
    let listaAmigos = document.getElementById("lista-amigos"); 
    amigos.push(nomeAmigo);
    listaAmigos.textContent = amigos;
    document.getElementById("nome-amigo").value = '';
}

function sortear(){
    
}