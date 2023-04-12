// Selecionar elementos do DOM
const scaleSelect = document.getElementById('scale');
const temperatureInput = document.getElementById('temperature');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[scaleSelect, temperatureInput].forEach(input => {
  input.addEventListener('input', () => {
    if (scaleSelect.value !== '' &&
      temperatureInput.value !== ''
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
  let scale = scaleSelect.value;
  let temperature = parseFloat(temperatureInput.value);
  
  let scaleName = scale === 'C' ? 'Celsius' : 'Fahrenheit';
  let newScaleName = scale === 'F' ? 'Celsius' : 'Fahrenheit';
  let result;

  if (scale === "C") {
    result = (temperature * 9 / 5) + 32;
    result = result.toFixed(2);
  } else {
    result = (temperature - 32) * 5 / 9;
    result = result.toFixed(2);
  }

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>A temperatura está na escala: ${scale}</p>
      <p>Temperatura em ${scaleName}: ${temperature}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Temperatura equivalente em ${newScaleName}: ${result}</p>
    </div>
  `;

  // Limpar os campos de entrada
  scaleSelect.value = '';
  temperatureInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





