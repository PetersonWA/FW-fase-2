
// Função para exibir o carrinho
function exibirCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoContainer = document.querySelector('.container.mt-4');
  
    carrinhoContainer.innerHTML = ''; // Limpa o carrinho antes de exibir
  
    if (carrinho.length > 0) {
      carrinho.forEach(produto => {
        carrinhoContainer.innerHTML += `
          <div class="product-card mb-3">
            <div class="row">
              <div class="col-3">
                <img src="${produto.imagem}" alt="${produto.nome}" class="img-fluid">
              </div>
              <div class="col-9">
                <h6 class="product-title">Produto:</h6>
                <p class="product-name">${produto.nome}</p>
                <p class="product-price">${produto.preco}</p>
                <a href="#" class="text-danger" onclick="removerDoCarrinho('${produto.nome}')">Excluir</a>
              </div>
            </div>
          </div>`;
      });
    } else {
      carrinhoContainer.innerHTML = '<p>Carrinho vazio.</p>';
    }
  }
  
  function removerDoCarrinho(nomeProduto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(produto => produto.nome !== nomeProduto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho();
  }
  
  // Exibir os produtos ao carregar a página
  document.addEventListener('DOMContentLoaded', exibirCarrinho);
  