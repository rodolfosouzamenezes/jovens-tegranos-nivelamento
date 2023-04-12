// Selecionar elementos do DOM
const numberListInput = document.getElementById('numberList');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
numberListInput.addEventListener('input', () => {
  if (numberListInput.value !== '') {
    sendButton.classList.remove('disabled');
  } else {
    sendButton.classList.add('disabled');
  }
});

sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos input e transformando em array
  let numberList = numberListInput.value;
  let numberListArray = numberList.split(",");

  // Extraindo o maior e o menor
  let smallest = Math.min(...numberListArray);
  let biggest = Math.max(...numberListArray);

  // Confere se todos são números
  let error = false;
  for (let i = 0; i < numberListArray.length; i++) {
    if (isNaN(numberListArray[i])) {
      error = true;
      break;
    }
  }

  const resultHTML = error ? `
    <h2>ERRO</h2>
    <p>A entrada deve conter apenas números separados por vírgulas.</p>
    ` : `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Números recebidos: ${numberList}</p>
      </div>
      <div class="result__outputs">
      <h3>Saída</h3>
      <p>${smallest} e ${biggest}</p>
    </div>
  `;

  // Limpar os campos de entrada
  numberListInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





