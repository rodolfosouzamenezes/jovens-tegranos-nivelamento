// Selecionar elementos do DOM
const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const thirdNumberInput = document.getElementById('thirdNumber');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[firstNumberInput, secondNumberInput, thirdNumberInput].forEach(input => {
  input.addEventListener('input', () => {
    if (firstNumberInput.value !== '' &&
      secondNumberInput.value !== '' &&
      thirdNumberInput.value !== ''
    ) {
      sendButton.classList.remove('disabled');
    } else {
      sendButton.classList.add('disabled');
    }
  });
});

// Ao clicar no botão é o menor valor é selecionado
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let firstNumber = parseFloat(firstNumberInput.value);
  let secondNumber = parseFloat(secondNumberInput.value);
  let thirdNumber = parseFloat(thirdNumberInput.value);

  let numbers = [firstNumber, secondNumber, thirdNumber];
  
  // Pega o menor numero do array
  let smallest = Math.min(...numbers);

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Primeiro valor: ${firstNumber}</p>
      <p>Segundo valor: ${secondNumber}</p>
      <p>Terceiro valor: ${thirdNumber}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Menor valor: ${smallest}</p>
    </div>
  `;

  // Limpar os campos de entrada
  firstNumberInput.value = '';
  secondNumberInput.value = '';
  thirdNumberInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





