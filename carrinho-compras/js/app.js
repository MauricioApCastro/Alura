function adicionar(){
    //recuperar os dados do formulário
    let item = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let produtoPreco = item.split("- R$")
    let produto = produtoPreco[0];
    let preco = produtoPreco[1];
      //calculando o valor do produto
    let valorProduto = preco * quantidade;
    alert(valorProduto);
}
  