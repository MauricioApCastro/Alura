let total = 0;

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

  let valorTotal = document.getElementById('valor-total').value;
  total = total + preco;
  alert(total);

}