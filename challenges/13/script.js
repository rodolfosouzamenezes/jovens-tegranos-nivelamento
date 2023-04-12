// Selecionar elementos do DOM
const minutesUsedInput = document.getElementById('minutesUsed');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
minutesUsedInput.addEventListener('input', () => {
  if (minutesUsedInput.value !== '') {
    sendButton.classList.remove('disabled');
  } else {
    sendButton.classList.add('disabled');
  }
});

// Ao clicar no botão é calculado o custo
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Valores fixos
  const basicPlanPrice = 50.00;
  const basicPlanMinutes = 100;
  const extraMinutePrice = 2.00;

  // Pegando os valores dos inputs
  let minutesUsed = parseFloat(minutesUsedInput.value);

  let totalCost;
  if (minutesUsed <= basicPlanMinutes) {
    totalCost = basicPlanPrice;
  } else {
    let extraMinutes = minutesUsed - basicPlanMinutes;
    totalCost = basicPlanPrice + extraMinutes * extraMinutePrice;
  }

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Quantidade de minutos: ${minutesUsed} min</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Valor a pagar: R$ ${totalCost.toFixed(2)}</p>
    </div>
  `;

  // Limpar os campos de entrada
  minutesUsedInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





