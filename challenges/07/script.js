// Selecionar elementos do DOM
const distanceInput = document.getElementById('distance');
const fuelInput = document.getElementById('fuel');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[distanceInput, fuelInput].forEach(input => {
  input.addEventListener('input', () => {
    if (distanceInput.value !== '' &&
        fuelInput.value !== ''
    ) {
      sendButton.classList.remove('disabled');
    } else {
      sendButton.classList.add('disabled');
    }
  });
});

// Ao clicar no botão é calculado o cosumo médio do carro
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let distance = parseFloat(distanceInput.value);
  let fuel = parseFloat(fuelInput.value);

  let averageConsumption = (distance / fuel).toFixed(3);

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Distância percorrida: ${distance}</p>
      <p>Combustível gasto: ${fuel}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Consumo médio = ${averageConsumption}</p>
    </div>
  `;

  // Limpar os campos de entrada
  distanceInput.value = '';
  fuelInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





