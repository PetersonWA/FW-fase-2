// Função para exibir o nome do cliente no perfil
function exibirNomePerfil() {
    const nomeCliente = localStorage.getItem('nome');
  
    if (nomeCliente) {
        document.getElementById('nomePerfil').textContent = nomeCliente;
    }  
}

// Função para exibir os pets cadastrados
function exibirPets() {
    // Obter a lista de pets do localStorage
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    
    const petList = document.getElementById('petList');
    petList.innerHTML = ''; // Limpar a lista antes de adicionar os novos pets
  
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
        // Atualizar a exibição dos pets cadastrados
        exibirPets();
  
        alert('Pet cadastrado com sucesso!');
        // Redirecionar ou realizar outra ação
        window.location.href = 'navegação perfil.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Consolidando as chamadas do DOMContentLoaded em uma única função
document.addEventListener('DOMContentLoaded', () => {
    exibirNomePerfil();
    exibirPets();
});
