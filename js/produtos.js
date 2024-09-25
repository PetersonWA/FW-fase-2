let produtoId = 1; // Inicializa o ID dos produtos

function adicionarAoCarrinho(produto) {
    // Atribui um ID ao produto de forma sequencial
    produto.id = produtoId++;

    const carrinhoContainer = document.querySelector('#carrinho-produtos');
    
    // Cria o card do produto
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
                        <p class="card-text">${produto.descricao}</p>
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

    // Insere o card no HTML
    carrinhoContainer.insertAdjacentHTML('beforeend', card);
}

function adicionarAoCarrinho(nome, preco, imagem) {
    // Atribui um ID ao produto de forma sequencial
    const produto = {
        id: produtoId++,
        nome: nome,
        descricao: descricao,
        preco: preco,
        imagem: imagem,
        quantidade: 1
    };

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Adiciona o produto ao carrinho
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`Produto "${nome}" adicionado ao carrinho!`);
}

// Função para excluir o produto
function excluirProduto(idProduto) {
    // Remove o card do produto específico
    const cardProduto = document.getElementById(`produto-${idProduto}`);
    cardProduto.remove();
}
