// scripts.js

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
      // Salva os dados no localStorage
      localStorage.setItem('nome', nome);
      localStorage.setItem('email', email);
      localStorage.setItem('senha', senha);
      localStorage.setItem('endereco', endereco);
      localStorage.setItem('dataNascimento', dataNascimento);
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
  
    //Obtém os dados do localStorage
    const emailCadastrado = localStorage.getItem('email');
    const senhaCadastrada = localStorage.getItem('senha');
  
    if (email === emailCadastrado && senha === senhaCadastrada) {
      alert('Login bem-sucedido!');
      window.location.href = 'navegação perfil.html'; // Redireciona para a página do perfil
    } else {
      alert('E-mail ou senha incorretos!');
    }
  }
  

  // Função para acessar sem cadastro
function acessarSemCadastro() {
  // Redireciona diretamente para a página de navegação
  window.location.href = 'navegação produtos.html';
}



// Função para cadastrar o pet
function cadastraPet() {
  // Capturar os valores do formulário
  const petNome = document.getElementById('petNome').value;
  const petRaca = document.getElementById('petRaca').value;
  const petPeso = document.getElementById('petPeso').value;
  const petTemperamento = document.getElementById('petTemperamento').value;

  // Verificar se todos os campos foram preenchidos
  if (petNome && petRaca && petPeso && petTemperamento) {
      // Obter os pets existentes do localStorage (ou inicializar uma array vazia se for a primeira vez)
      let pets = JSON.parse(localStorage.getItem('pets')) || [];

      // Adicionar o novo pet à lista
      const novoPet = {
          nome: petNome,
          raca: petRaca,
          peso: petPeso,
          temperamento: petTemperamento
      };
      pets.push(novoPet);

      // Salvar a lista atualizada no localStorage
      localStorage.setItem('pets', JSON.stringify(pets));

      // Atualizar a exibição dos pets cadastrados
      exibirPets();

      // Limpar os campos do formulário
      document.getElementById('petNome').value = '';
      document.getElementById('petRaca').value = '';
      document.getElementById('petPeso').value = '';
      document.getElementById('petTemperamento').value = '';

      // Exibir mensagem de sucesso
      alert('Pet cadastrado com sucesso!');
  } else {
      // Exibir mensagem de erro se algum campo estiver vazio
      alert('Por favor, preencha todos os campos.');
  }
}

// Função para exibir os pets cadastrados
function exibirPets() {
  // Obter a lista de pets do localStorage
  const pets = JSON.parse(localStorage.getItem('pets')) || [];

  // Selecionar o elemento onde os pets serão exibidos
  const petList = document.getElementById('petList');
  petList.innerHTML = ''; // Limpar a lista antes de adicionar os novos pets

  // Iterar sobre os pets e criar o HTML para cada um
  pets.forEach((pet) => {
      const petInfo = `
          <strong>Nome:</strong> ${pet.nome} <br>
          <strong>Raça:</strong> ${pet.raca} <br>
          <strong>Peso:</strong> ${pet.peso} <br>
          <strong>Temperamento:</strong> ${pet.temperamento} <hr>
      `;
      petList.innerHTML += petInfo;
  });
}

// Carregar os pets cadastrados quando a página for carregada
document.addEventListener('DOMContentLoaded', exibirPets);
