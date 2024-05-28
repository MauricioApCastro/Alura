function alterarStatus(id) {
  //recupera os dados da tela
    let gameClicado = document.getElementById(`game-${id}`);
    // Obtém o elemento do jogo clicado pelo ID dinâmico `game-${id}`.
    
    let botao = gameClicado.querySelector('.dashboard__item__button');
    // Seleciona o botão dentro do elemento do jogo clicado.
    
    let imgDiv = gameClicado.querySelector('.dashboard__item__img');
    // Seleciona a div de imagem dentro do elemento do jogo clicado.
    
    if (botao.textContent === "Alugar") {
        // Verifica se o texto do botão é "Alugar".
        botao.textContent = "Devolver";
        // Altera o texto do botão para "Devolver".
        botao.classList.add('dashboard__item__button--return');
        // Adiciona a classe que estiliza o botão como "Devolver".
        imgDiv.classList.add('dashboard__item__img--rented');
        // Adiciona a classe que indica que o jogo está alugado.
    } else if (botao.textContent === "Devolver") {
        // Verifica se o texto do botão é "Devolver".
        if (confirm("Você quer devolver?")) {
            // Pergunta ao usuário se ele quer devolver o jogo.
            alert("Você escolheu devolver.");
            // Mostra um alerta confirmando a devolução.
            botao.textContent = "Alugar";
            // Altera o texto do botão para "Alugar".
            botao.classList.remove('dashboard__item__button--return');
            // Remove a classe que estiliza o botão como "Devolver".
            imgDiv.classList.remove('dashboard__item__img--rented');
            // Remove a classe que indica que o jogo está alugado.
        } else {
            // Se o usuário cancelar a devolução:
            alert("Você escolheu não devolver.");
            // Mostra um alerta informando que a devolução foi cancelada.
            return; 
            // Sai da função sem alterar nada.
        }
    }
    
    // Conta e exibe o número de jogos alugados após a ação de alugar ou devolver.
    const totalAlugados = contarJogosAlugados();
    alert(`Total de jogos alugados: ${totalAlugados}`);
    // Exibe a quantidade de jogos alugados.
}

function contarJogosAlugados() {
    // Declara a função para contar jogos alugados.
    const jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    // Seleciona todos os elementos com a classe indicando que estão alugados.
    return jogosAlugados.length;
    // Retorna a quantidade de jogos alugados.
}
