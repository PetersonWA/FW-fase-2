// Função para exibir agendamentos no perfil
function exibirAgendamentos() {
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    
    const agendamentosList = document.getElementById('agendamentosList');
    agendamentosList.innerHTML = ''; // Limpa alista
  
    if (agendamentos.length > 0) {
      agendamentos.forEach((agendamento, index) => {
        const agendamentoInfo = `
          <div>
            <strong>Nome do Pet:</strong> ${agendamento.Pet} <br>
            <strong>Serviços:</strong> ${agendamento.services.join(', ')} <br>
            <strong>Data:</strong> ${agendamento.day} <br>
            <strong>Hora:</strong> ${agendamento.time} <br>
            <strong>Transporte:</strong> ${agendamento.transport} <br>
            <button onclick="excluirAgendamento(${index})">Excluir</button>
            <hr>
          </div>
        `;
        agendamentosList.innerHTML += agendamentoInfo;
      });
    } else {
      agendamentosList.innerHTML = '<p>Nenhum agendamento encontrado.</p>';
    }
  }
  

// Função para excluir um agendamento pelo índice
function excluirAgendamento(index) {
  const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
  
  // Remover o agendamento pelo índice
  agendamentos.splice(index, 1);
  
  // Atualizar o localStorage
  localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
  
  // Atualizar a lista exibida
  exibirAgendamentos();
  
  alert('Agendamento excluído com sucesso!');
}



  // Função para inicializar os eventos na tela de agendamento
function initAgendamento() {
    document.getElementById('petForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const petName = document.getElementById('petName').value;
      if (petName) {
        document.getElementById('addPet','additionalFields').style.display = 'block';
      }
    });
  
    document.querySelectorAll('.service-checkbox, #selectDay, input[name="transporte"]').forEach(element => {
      element.addEventListener('change', checkCompletion);
    });
  
    document.querySelectorAll('.time-btn').forEach(button => {
      button.addEventListener('click', function() {
        document.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        checkCompletion();
      });
    });
  
    document.getElementById('confirm-btn').addEventListener('click', salvarAgendamento);
  }

  
  // Inicializa os eventos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('agendamentosList')) {
      exibirAgendamentos();
    }
    if (document.getElementById('confirm-btn')) {
      initAgendamento();
    }
  });
  