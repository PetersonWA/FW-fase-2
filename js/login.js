// Função para fazer o login
function fazerLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    const emailCadastrado = localStorage.getItem('email');
    const senhaCadastrada = localStorage.getItem('senha');
  
    if (email === emailCadastrado && senha === senhaCadastrada) {
      alert('Login bem-sucedido!');
      window.location.href = 'navegação perfil.html'; // Redireciona para o perfil
    } else {
      alert('E-mail ou senha incorretos!');
    }
  }
  
  // Função para acessar sem cadastro
  function acessarSemCadastro() {
    window.location.href = 'navegação produtos.html';
  }