


//lendo os inputs
    function sortear(){
        let quantidade = document.getElementById('quantidade').value;
        let de = document.getElementById('de').value;
        let ate = document.getElementById('ate').value;
       
     alert(quantidade);
     alert(de);
     alert(ate);
    }
    
   

function geraNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroSorteado = gerarNumeroAleatorio(min, max);