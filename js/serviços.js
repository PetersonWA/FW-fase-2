// Função para salvar o agendamento
function salvarAgendamento() {
    // Capturar os serviços selecionados
    const selectedServices = [];
    document.querySelectorAll('.service-checkbox:checked').forEach(checkbox => {
      selectedServices.push(checkbox.id); // Salva o id dos serviços
    });
  
    // Capturar o dia, horário e transporte selecionado 
    //const selectedPet = document.getElementById('petName').value;
    const selectedDay = document.getElementById('selectDay').value;
    const selectedTime = document.querySelector('.time-btn.active')?.dataset.time;
    const selectedTransport = document.querySelector('input[name="transporte"]:checked')?.value;
  
    // Verificar se todos os campos estão preenchidos
    if (selectedServices.length > 0 && selectedDay && selectedTime && selectedTransport) {
      // Criar objeto de agendamento
      const agendamento = {
       // Pet: selectedPet,
        services: selectedServices,
        day: selectedDay,
        time: selectedTime,
        transport: selectedTransport
      };
  
      // Obter os agendamentos existentes no localStorage (ou inicializar uma array vazia)
      let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
  
      // Adicionar o novo agendamento à lista
      agendamentos.push(agendamento);
  
      // Salvar a lista atualizada no localStorage
      localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
  
      // Exibir mensagem de sucesso
      alert('Agendamento salvo com sucesso! Você pode visualizar no seu perfil.');
  
      // Redirecionar ou realizar outra ação
      window.location.href = 'navegação perfil.html';
    } else {
      alert('Por favor, preencha todos os campos antes de confirmar.');
    }
  }
  
  // Função para verificar se o formulário está completo
  function checkCompletion() {
    const selectedServices = document.querySelectorAll('.service-checkbox:checked').length > 0;
    const selectedDay = document.getElementById('selectDay').value !== "";
    const selectedTime = document.querySelector('.time-btn.active');
    const selectedTransport = document.querySelector('input[name="transporte"]:checked');
    const allValid = selectedServices && selectedDay && selectedTime && selectedTransport;
    document.getElementById('confirm-btn').disabled = !allValid;
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