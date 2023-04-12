// Selecionar elementos do DOM
const numberInput = document.getElementById('number');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
numberInput.addEventListener('input', () => {
    if (numberInput.value !== '' &&
      numberInput.value !== ''
    ) {
      sendButton.classList.remove('disabled');
    } else {
      sendButton.classList.add('disabled');
    }
  });

sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let number = parseInt(numberInput.value);

  let multiplicationTable = []

  for (let i = 1; i <= 10; i++) {
    multiplicationTable.push(`${number} x ${i} = ${number * i}`);
  }

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Número: ${number}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      ${multiplicationTable.map(evenNumber => {
        return `<p>${evenNumber}</p>`
      }).join('')}
    </div>
  `;

  // Limpar os campos de entrada
  numberInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





