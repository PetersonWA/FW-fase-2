// Função para exibir agendamentos no perfil
function exibirAgendamentos() {
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    
    const agendamentosList = document.getElementById('agendamentosList');
    agendamentosList.innerHTML = ''; // Limpa alista
  
    if (agendamentos.length > 0) {
      agendamentos.forEach(agendamento => {
        const agendamentoInfo = `
          <div>
            <strong>Nome do Pet:</strong> ${agendamento.pet} <br>
            <strong>Serviços:</strong> ${agendamento.services.join(', ')} <br>
            <strong>Data:</strong> ${agendamento.day} <br>
            <strong>Hora:</strong> ${agendamento.time} <br>
            <strong>Transporte:</strong> ${agendamento.transport} <hr>
          </div>
        `;
        agendamentosList.innerHTML += agendamentoInfo;
      });
    } else {
      agendamentosList.innerHTML = '<p>Nenhum agendamento encontrado.</p>';
    }
  }
  
  // Função para inicializar os eventos na tela de agendamento
function initAgendamento() {
    document.getElementById('petForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const petName = document.getElementById('petName').value;
      if (petName) {
        document.getElementById('additionalFields').style.display = 'block';
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
  