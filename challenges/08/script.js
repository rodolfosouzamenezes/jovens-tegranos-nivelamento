// Selecionar elementos do DOM
const measureAInput = document.getElementById('measureA');
const measureBInput = document.getElementById('measureB');
const measureCInput = document.getElementById('measureC');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[measureAInput, measureBInput, measureCInput].forEach(input => {
  input.addEventListener('input', () => {
    if (measureAInput.value !== '' &&
      measureBInput.value !== '' &&
      measureCInput.value !== ''
    ) {
      sendButton.classList.remove('disabled');
    } else {
      sendButton.classList.add('disabled');
    }
  });
});

// Ao clicar no botão é calculado o as áreas do quadrado, triângulo e trapézio
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let measureA = parseFloat(measureAInput.value);
  let measureB = parseFloat(measureBInput.value);
  let measureC = parseFloat(measureCInput.value);

  let squareArea = (measureA * measureA).toFixed(4);
  let triangleArea = ((measureA * measureB) / 2).toFixed(4);
  let trapezoidArea = (((measureA + measureB) * measureC) / 2).toFixed(4);

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Digite a medida A: ${measureA}</p>
      <p>Digite a medida B: ${measureB}</p>
      <p>Digite a medida C: ${measureC}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Área do quadrado = ${squareArea}</p>
      <p>Área do triângulo = ${triangleArea}</p>
      <p>Área do trapézio = ${trapezoidArea}</p>
    </div>
  `;

  // Limpar os campos de entrada
  measureAInput.value = '';
  measureBInput.value = '';
  measureCInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





