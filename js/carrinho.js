function carregarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const carrinhoContainer = document.querySelector('#carrinho-produtos');
  
  carrinho.forEach(produto => {
      const card = `
          <div class="card mb-3" id="produto-${produto.id}">
              <div class="row g-0">
                  <div class="col-md-4">
                      <br>
                      <img src="${produto.imagem}" class="rounded mx-auto d-block" alt="${produto.nome}">
                  </div>
                  <div class="col-md-8">
                      <div class="card-body">
                          <h5 class="card-title">${produto.nome}</h5>
                          <p class="card-text">Desc: ${produto.descricao}</p>
                          <p class="card-text">Preço: R$ ${produto.preco}</p>
                          <div class="d-flex justify-content-between align-items-center">
                              <div class="product-quantity">
                                  <label for="quantity-${produto.id}">Quantidade:</label>
                                  <input type="number" id="quantity-${produto.id}" value="${produto.quantidade}" min="1" max="10" class="form-control" style="width: 70px;">
                              </div>
                              <p class="product-price">R$ ${produto.preco}</p>
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                              <p class="product-freight">Frete: <span class="freight-free">Grátis</span></p>
                              <a href="#" class="text-danger" onclick="excluirProduto(${produto.id})">Excluir</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>`;
      
      carrinhoContainer.insertAdjacentHTML('beforeend', card);
  });
}

function excluirProduto(idProduto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  // Remove o produto específico do carrinho
  carrinho = carrinho.filter(produto => produto.id !== idProduto);
  
  // Atualiza o localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Remove o card do produto da tela
  const cardProduto = document.getElementById(`produto-${idProduto}`);
  cardProduto.remove();
}

// Chama a função quando a página do carrinho carregar
carregarCarrinho();
