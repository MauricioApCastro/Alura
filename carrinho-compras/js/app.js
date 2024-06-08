let total ;
limpar();


function adicionar() {
  //recuperar os dados do formulário
  let produto = document.getElementById('produto').value;
  let quantidade = document.getElementById('quantidade').value;
  let nomeProduto = produto.split('-')[0];
  let ValorUnitario = produto.split('R$')[1];


  //calculando o valor do produto
  let preco = quantidade * ValorUnitario;
  //adicionando produto no carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

  let valorTotal = document.getElementById('valor-total');
  total = total + preco;
  valorTotal.textContent = `R$ ${total}`;

  document.getElementById('quantidade').value = 0;


}

function limpar() {
  total = 0 ;
  document.getElementById('lista-produtos').innerHTML = "";
  document.getElementById('valor-total').textContent = `R$ ${0}`;


}