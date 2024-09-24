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
    
    if (pets.length > 0) {
    pets.forEach((pet, index) => {
        const petInfo = `
            <strong>Nome:</strong> ${pet.nome} <br>
            <strong>Raça:</strong> ${pet.raca} <br>
            <strong>Peso:</strong> ${pet.peso} <br>
            <strong>Temperamento:</strong> ${pet.temperamento} <br>
            <button class="btn btn-danger" onclick="excluirPet(${index})">Excluir</button>
            <hr>
        `;
        petList.innerHTML += petInfo;
        });
    }else{
        petList.innerHTML = '<p>Nenhum Pet cadastrado.</p>';
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
        // Atualizar a exibição dos pets cadastrados
        exibirPets();
  
        alert('Pet cadastrado com sucesso!');
        // Redirecionar ou realizar outra ação
        window.location.href = 'navegação perfil.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}



// Função para excluir um pet pelo índice
function excluirPet(index) {
    const pets = JSON.parse(localStorage.getItem('petInfo')) || [];
    
    // Remover o agendamento pelo índice
    pets.splice(index, 1);
    
    // Atualizar o localStorage
    localStorage.setItem('pets', JSON.stringify(pets));
    
    // Atualizar a lista exibida
    exibirPets();
    
    alert('Pet excluído com sucesso!');
  }



// Consolidando as chamadas do DOMContentLoaded em uma única função
document.addEventListener('DOMContentLoaded', () => {
    exibirNomePerfil();
    exibirPets();
});
