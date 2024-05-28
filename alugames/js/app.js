function alterarStatus(id) {
    const gameClicado = document.getElementById(`game-${id}`);
    const botao = gameClicado.querySelector('.dashboard__item__button');
    const imgDiv = gameClicado.querySelector('.dashboard__item__img');

    if (botao.textContent === "Alugar") {
        botao.textContent = "Devolver";
        botao.classList.add('dashboard__item__button--return');
        imgDiv.classList.add('dashboard__item__img--rented');
    } else if (botao.textContent === "Devolver") {
        if (confirm("Você quer devolver?")) {
            alert("Você escolheu devolver.");
            botao.textContent = "Alugar";
            botao.classList.remove('dashboard__item__button--return');
            imgDiv.classList.remove('dashboard__item__img--rented');
        } else {
            alert("Você escolheu não devolver.");
            return;
        }
    }

    const totalAlugados = contarJogosAlugados();
    alert(`Total de jogos alugados: ${totalAlugados}`);
}

function contarJogosAlugados() {
    const jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    return jogosAlugados.length;
}
