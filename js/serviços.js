// Função para salvar o agendamento
function salvarAgendamento() {
    const selectedServices = [];
    document.querySelectorAll('.service-checkbox:checked').forEach(checkbox => {
        selectedServices.push(checkbox.id); // Salva o id dos serviços
    });
    const petNome = localStorage.getItem('petName');
    const data = document.getElementById('selectDay').value;
    const hora = document.querySelector('.time-btn.active')?.getAttribute('data-time');
    const transporte = document.querySelector('input[name="transporte"]:checked')?.value;

    if (selectedServices.length > 0 && petNome && data && hora && transporte) {
        const agendamento = {
            Nome: petNome,
            servicos: selectedServices,
            data: data,
            hora: hora,
            transporte: transporte
        };

        // Obter os agendamentos existentes no localStorage
        let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

        // Adicionar o novo agendamento à lista
        agendamentos.push(agendamento);

        // Salvar a lista atualizada no localStorage
        localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

        alert('Agendamento salvo com sucesso! Você pode visualizar no seu perfil.');
        window.location.href = 'navegação perfil.html'; // Redireciona após salvar
    } else {
        alert('Por favor, preencha todos os campos antes de terminar.');
    }
}

  
  // Função para verificar se o formulário está completo
  function checkCompletion() {
    const selectedServices = document.querySelectorAll('.service-checkbox:checked').length > 0;
    const selectedDay = document.getElementById('selectDay').value !== "";
    const selectedTime = document.querySelector('.time-btn.active') !== null;
    const selectedTransport = document.querySelector('input[name="transporte"]:checked') !== null;
    const allValid = selectedServices && selectedDay && selectedTime && selectedTransport;
    document.getElementById('confirm-btn').disabled = !allValid; // Habilita ou desabilita o botão
}
  
  // Inicializar eventos na tela de agendamento
  function initAgendamento() {
    document.getElementById('petForm').addEventListener('submit', event => {
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
  
  // Carregar eventos ao iniciar a página de serviços
  document.addEventListener('DOMContentLoaded', initAgendamento);