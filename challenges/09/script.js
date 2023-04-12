// Selecionar elementos do DOM
const durationInSecondsInput = document.getElementById('durationInSeconds');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
durationInSecondsInput.addEventListener('input', () => {
  if (durationInSecondsInput.value !== '') {
    sendButton.classList.remove('disabled');
  } else {
    sendButton.classList.add('disabled');
  }
});

// Ao clicar no botão é os segundos serão formatados
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let durationInSeconds = parseFloat(durationInSecondsInput.value);

  let hours = Math.floor(durationInSeconds / 3600);
  let minutes = Math.floor((durationInSeconds % 3600) / 60);
  let seconds = durationInSeconds % 60;

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Digite a duração em segundos: ${durationInSeconds}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>${hours}:${minutes}:${seconds}</p>
    </div>
  `;

  // Limpar os campos de entrada
  durationInSecondsInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





