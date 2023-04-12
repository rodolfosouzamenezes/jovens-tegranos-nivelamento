// Selecionar elementos do DOM
const glucoseInput = document.getElementById('glucose');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
glucoseInput.addEventListener('input', () => {
  if (glucoseInput.value !== '') {
    sendButton.classList.remove('disabled');
  } else {
    sendButton.classList.add('disabled');
  }
});

// Ao clicar no botão é calculado o troco 
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let glucose = parseFloat(glucoseInput.value);
  let classification;

  if (glucose <= 100) {
    classification = "Normal";
  } else if (glucose <= 140) {
    classification = "Elevado";
  } else {
    classification = "Diabetes";
  }

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Medida da glicose (mg/dl): ${glucose.toFixed(1)}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Classificação = ${classification}</p>
    </div>
  `;

  // Limpar os campos de entrada
  glucoseInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





