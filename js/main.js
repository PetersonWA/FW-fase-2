// scripts.js

// Função para salvar o cadastro
function salvarCadastro() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const endereco = document.getElementById('enreco').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const termos = document.getElementById('termos').value;
  
    if (nome && email && senha) {
      // Salva os dados no localStorage
      localStorage.setItem('nome', nome);
      localStorage.setItem('email', email);
      localStorage.setItem('senha', senha);
      localStorage.setItem('endereco', endereco);
      localStorage.setItem('dataNascimento', dataNascimentota);
      localStorage.setItem('telefone', telefone);
      localStorage.setItem('cpf', cpf);
      localStorage.setItem('termos', termos);
      alert('Cadastro realizado com sucesso!');
      window.location.href = 'telalogin.html'; // Redireciona para a tela de login
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  }
  
  // Função para fazer o login
  function fazerLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    // Obtém os dados do localStorage
    const emailCadastrado = localStorage.getItem('email');
    const senhaCadastrada = localStorage.getItem('senha');
  
    if (email === emailCadastrado && senha === senhaCadastrada) {
      alert('Login bem-sucedido!');
      window.location.href = 'navegação perfil.html'; // Redireciona para a página do perfil
    } else {
      alert('E-mail ou senha incorretos!');
    }
  }
  