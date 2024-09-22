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
    // Verificar se todos os campos foram preenchidos
    if (petNome && petRaca && petPeso && petTemperamento) {
        // Obter os pets existentes do localStorage (ou inicializar uma array vazia se for a primeira vez)
      let pets = JSON.parse(localStorage.getItem('pets')) || [];
        // Adicionar o novo pet à lista
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
    // Obter a lista de pets do localStorage
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    
    // Atualizar a exibição dos pets cadastrados
    exibirPets();

    const petList = document.getElementById('petList');
    petList.innerHTML = '';// Limpar a lista antes de adicionar os novos pets
  
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
    // Carregar o nome do perfil quando a página for carregada
    document.addEventListener('DOMContentLoaded', exibirNomePerfil);

  // Carregar pets e nome ao carregar o perfil
 // document.addEventListener('DOMContentLoaded', () => {
   // exibirNomePerfil();
   // exibirPets();
  //});