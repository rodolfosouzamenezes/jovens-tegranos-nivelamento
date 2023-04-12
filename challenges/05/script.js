// Selecionar elementos do DOM
const radiusInput = document.getElementById('radius');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
radiusInput.addEventListener('input', () => {
  if (radiusInput.value !== '') {
    sendButton.classList.remove('disabled');
  } else {
    sendButton.classList.add('disabled');
  }
});

// Ao clicar no botão é calculado a área do círculo 
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let radius = parseFloat(radiusInput.value);

  // Área = π * raio ao quadrado
  let area = (Math.PI * Math.pow(radius, 2)).toFixed(3);


  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Valor do raio do círculo: ${radius}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Área = ${area}</p>
    </div>
  `;

  // Limpar os campos de entrada
  radiusInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





