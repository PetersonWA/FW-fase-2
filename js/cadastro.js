// Função para salvar o cadastro
function salvarCadastro() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const endereco = document.getElementById('endereco').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const termos = document.getElementById('termos').checked;
  
    if (nome && email && senha) {
      localStorage.setItem('nome', nome);
      localStorage.setItem('email', email);
      localStorage.setItem('senha', senha);
      localStorage.setItem('endereco', endereco);
      localStorage.setItem('dataNascimento', dataNascimento);
      localStorage.setItem('telefone', telefone);
      localStorage.setItem('cpf', cpf);
      localStorage.setItem('termos', termos);
  
      alert('Cadastro realizado com sucesso!');
      window.location.href = 'telalogin.html'; // Redireciona para o login
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  }