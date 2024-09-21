// Função para salvar o agendamento
function salvarAgendamento() {
    const selectedServices = Array.from(document.querySelectorAll('.service-checkbox:checked')).map(el => el.id);
    const petNome = localStorage.getItem('petNomeSelecionado');
    const data = document.getElementById('selectDay').value;
    const hora = document.querySelector('.time-btn.active').getAttribute('data-time');
    const transporte = document.querySelector('input[name="transporte"]:checked').value;
  
    if (selectedServices.length > 0 && data && hora && transporte) {
      const agendamento = { petNome, servicos: selectedServices, data, hora, transporte };
  
      let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
      agendamentos.push(agendamento);
      localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
  
      alert('Agendamento salvo com sucesso!');
      window.location.href = 'navegação perfil.html';
    } else {
      alert('Preencha todos os campos.');
    }
  }
  
  // Função para verificar se o formulário está completo
  function checkCompletion() {
    const selectedServices = document.querySelectorAll('.service-checkbox:checked').length > 0;
    const selectedDay = document.getElementById('selectDay').value !== "";
    const selectedTime = document.querySelector('.time-btn.active');
    const selectedTransport = document.querySelector('input[name="transporte"]:checked');
    document.getElementById('confirm-btn').disabled = !(selectedServices && selectedDay && selectedTime && selectedTransport);
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