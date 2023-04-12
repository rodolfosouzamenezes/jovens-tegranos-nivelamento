// Selecionar elementos do DOM
const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[firstNumberInput, secondNumberInput].forEach(input => {
  input.addEventListener('input', () => {
    if (firstNumberInput.value !== '' &&
      secondNumberInput.value !== '' 
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
  let firstNumber = parseInt(firstNumberInput.value);
  let secondNumber = parseInt(secondNumberInput.value);

  let isMultiple = firstNumber % secondNumber === 0 || secondNumber % firstNumber === 0;

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Primeiro número: ${firstNumber}</p>
      <p>Segundo número: ${secondNumber}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>${isMultiple ? "São" : "Não são"} múltiplos</p>
    </div>
  `;

  // Limpar os campos de entrada
  firstNumberInput.value = '';
  secondNumberInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





