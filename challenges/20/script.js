// Selecionar elementos do DOM
const initialNumberInput = document.getElementById('initialNumber');
const lastNumberInput = document.getElementById('lastNumber');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[initialNumberInput, lastNumberInput].forEach(input => {
  input.addEventListener('input', () => {
    if (lastNumberInput.value !== '' &&
      initialNumberInput.value !== ''
    ) {
      sendButton.classList.remove('disabled');
    } else {
      sendButton.classList.add('disabled');
    }
  });
});

sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let initialNumber = parseInt(initialNumberInput.value);
  let lastNumber = parseInt(lastNumberInput.value);

  let sum = 0;

  for (let i = initialNumber; i <= lastNumber; i++) {
    sum += i;
  }

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Número inicial: ${initialNumber}</p>
      <p>Número final: ${lastNumber}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Resultado = ${sum}</p>
    </div>
  `;

  // Limpar os campos de entrada
  initialNumberInput.value = '';
  lastNumberInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





