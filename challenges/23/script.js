// Selecionar elementos do DOM
const numberXInput = document.getElementById('numberX');
const numberYInput = document.getElementById('numberY');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[numberXInput, numberXInput].forEach(input => {
  input.addEventListener('input', () => {
    if (numberXInput.value !== '' &&
      numberXInput.value !== ''
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
  let numberX = parseInt(numberXInput.value);
  let numberY = parseInt(numberYInput.value);

  let firstNumber, lastNumber, sum;

  // Coloca os números em ordem crescente
  if (numberX > numberY) {
    firstNumber = numberY;
    lastNumber = numberX;
  } else {
    firstNumber = numberX;
    lastNumber = numberY;
  };
  
  sum = 0;
  
  // Soma os ímpares
  for (let i = firstNumber + 1; i < lastNumber; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Número X: ${numberX}</p>
      <p>Número Y: ${numberY}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Soma dos ímpares = ${sum}</p>
    </div>
  `;

  // Limpar os campos de entrada
  numberXInput.value = '';
  numberYInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





