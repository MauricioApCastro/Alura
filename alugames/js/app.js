function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let botao = gameClicado.querySelector('.dashboard__item__button');
  let imgDiv = gameClicado.querySelector('.dashboard__item__img');

  if (botao.textContent === "Alugar") {
    botao.textContent = "Devolver";
    botao.classList.add('dashboard__item__button--return');
    imgDiv.classList.add('dashboard__item__img--rented');
   
  }
  else if (botao.textContent === "Devolver") {
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
  const totalJogosAlugados = contarJogosAlugados();
  alert(`Total de jogos alugados: ${totalJogosAlugados}`);

}
function contarJogosAlugados() {
  const jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
  return jogosAlugados.length;

}

