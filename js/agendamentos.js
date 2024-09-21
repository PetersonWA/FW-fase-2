// Função para exibir agendamentos no perfil
function exibirAgendamentos() {
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    const agendamentosList = document.getElementById('agendamentosList');
    agendamentosList.innerHTML = '';
  
    if (agendamentos.length > 0) {
      agendamentos.forEach(agendamento => {
        const agendamentoInfo = `
          <div>
            <strong>Nome do Pet:</strong> ${agendamento.petNome} <br>
            <strong>Serviços:</strong> ${agendamento.servicos.join(', ')} <br>
            <strong>Data:</strong> ${agendamento.data} <br>
            <strong>Hora:</strong> ${agendamento.hora} <br>
            <strong>Transporte:</strong> ${agendamento.transporte} <hr>
          </div>
        `;
        agendamentosList.innerHTML += agendamentoInfo;
      });
    } else {
      agendamentosList.innerHTML = '<p>Nenhum agendamento encontrado.</p>';
    }
  }
  
  // Carregar agendamentos ao carregar o perfil
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('agendamentosList')) {
      exibirAgendamentos();
    }
  });