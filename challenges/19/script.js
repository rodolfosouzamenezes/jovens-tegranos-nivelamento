// Selecionar elementos do DOM
const currentSalaryInput = document.getElementById('currentSalary');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
currentSalaryInput.addEventListener('input', () => {
  if (currentSalaryInput.value !== '') {
    sendButton.classList.remove('disabled');
  } else {
    sendButton.classList.add('disabled');
  }
});

sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let currentSalary = parseFloat(currentSalaryInput.value);

  let newSalary, increase, percentage;

  if (currentSalary <= 999.0) {
    increase = currentSalary * 0.2;
    percentage = 20;
  } else if (currentSalary <= 2999.0) {
    increase = currentSalary * 0.15;
    percentage = 15;
  } else if (currentSalary <= 7999.0) {
    increase = currentSalary * 0.1;
    percentage = 10;
  } else {
    increase = currentSalary * 0.05;
    percentage = 5;
  }

  newSalary = currentSalary + increase;

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Salário atual: ${currentSalary.toFixed(2)}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Novo salário = R$ ${newSalary.toFixed(2)}</p>
      <p>Aumento = R$ ${increase.toFixed(2)}</p>
      <p>Porcentagem = ${percentage.toString().padStart(2, '0')}%</p>
    </div>
  `;

  // Limpar os campos de entrada
  currentSalaryInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





