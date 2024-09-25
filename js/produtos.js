let produtoId = 1; // Inicializa o ID dos produtos

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
