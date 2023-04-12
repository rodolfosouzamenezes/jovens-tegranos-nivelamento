// Selecionar elementos do DOM
const coefficientAInput = document.getElementById('coefficientA');
const coefficientBInput = document.getElementById('coefficientB');
const coefficientCInput = document.getElementById('coefficientC');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[coefficientAInput, coefficientBInput, coefficientCInput].forEach(input => {
  input.addEventListener('input', () => {
    if (coefficientAInput.value !== '' &&
        coefficientBInput.value !== '' &&
        coefficientCInput.value !== ''
    ) {
      sendButton.classList.remove('disabled');
    } else {
      sendButton.classList.add('disabled');
    }
  });
});

// Ao clicar no botão é calculado a equação do segundo grau
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let coefficientA = parseFloat(coefficientAInput.value);
  let coefficientB = parseFloat(coefficientBInput.value);
  let coefficientC = parseFloat(coefficientCInput.value);

  // Δ = b² – 4ac
  let delta = coefficientB ** 2 - 4 * coefficientA * coefficientC;
  let x1, x2

  // x = (-b ± √Δ)) / 2a
  if (delta > 0) {
    x1 = (-coefficientB + Math.sqrt(delta)) / (2 * coefficientA);
    x2 = (-coefficientB - Math.sqrt(delta)) / (2 * coefficientA);
  }

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Coeficiente a: ${coefficientA}</p>
      <p>Coeficiente b: ${coefficientB}</p>
      <p>Coeficiente c: ${coefficientC}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      ${delta < 0 ? `<p>Esta equação não possui raízes reais</p>` : `
        <p>X1: ${x1.toFixed(4)}</p>
        <p>X1: ${x2.toFixed(4)}</p>
      `}
    </div>
  `;

  // Limpar os campos de entrada
  coefficientAInput.value = '';
  coefficientBInput.value = '';
  coefficientCInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





