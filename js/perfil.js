// Função para exibir o nome do cliente no perfil
function exibirNomePerfil() {
    const nomeCliente = localStorage.getItem('nome');
  
    if (nomeCliente) {
      document.getElementById('nomePerfil').textContent = nomeCliente;
    }
  }
  
  // Função para cadastrar o pet
  function cadastraPet() {
    const petNome = document.getElementById('petNome').value;
    const petRaca = document.getElementById('petRaca').value;
    const petPeso = document.getElementById('petPeso').value;
    const petTemperamento = document.getElementById('petTemperamento').value;
  
    if (petNome && petRaca && petPeso && petTemperamento) {
      let pets = JSON.parse(localStorage.getItem('pets')) || [];
  
      const novoPet = { nome: petNome, raca: petRaca, peso: petPeso, temperamento: petTemperamento };
      pets.push(novoPet);
  
      localStorage.setItem('pets', JSON.stringify(pets));
      exibirPets();
  
      alert('Pet cadastrado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  
  // Função para exibir os pets cadastrados
  function exibirPets() {
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    const petList = document.getElementById('petList');
    petList.innerHTML = '';
  
    pets.forEach(pet => {
      const petInfo = `
        <strong>Nome:</strong> ${pet.nome} <br>
        <strong>Raça:</strong> ${pet.raca} <br>
        <strong>Peso:</strong> ${pet.peso} <br>
        <strong>Temperamento:</strong> ${pet.temperamento} <hr>
      `;
      petList.innerHTML += petInfo;
    });
  }
  
  // Carregar pets e nome ao carregar o perfil
  document.addEventListener('DOMContentLoaded', () => {
    exibirNomePerfil();
    exibirPets();
  });