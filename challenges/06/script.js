// Selecionar elementos do DOM
const nameInput = document.getElementById('name');
const hourValueInput = document.getElementById('hourValue');
const workedHoursInput = document.getElementById('workedHours');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[nameInput, hourValueInput, workedHoursInput].forEach(input => {
  input.addEventListener('input', () => {
    if (nameInput.value !== '' &&
        hourValueInput.value !== '' &&
        workedHoursInput.value !== ''
    ) {
      sendButton.classList.remove('disabled');
    } else {
      sendButton.classList.add('disabled');
    }
  });
});

// Ao clicar no botão é calculado o pagamento 
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let name = nameInput.value;
  let hourValue = parseFloat(hourValueInput.value);
  let workedHours = parseFloat(workedHoursInput.value);

  let payment = (hourValue * workedHours).toFixed(2);

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Nome: ${name}</p>
      <p>Valor por hora: ${hourValue}</p>
      <p>Horas trabalhadas: ${workedHours}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>O pagamento para ${name} deve ser ${payment}</p>
    </div>
  `;

  // Limpar os campos de entrada
  nameInput.value = '';
  hourValueInput.value = '';
  workedHoursInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





