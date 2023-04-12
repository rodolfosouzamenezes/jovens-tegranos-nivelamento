// Selecionar elementos do DOM
const rectangleBaseInput = document.getElementById('rectangleBase');
const rectangleHeightInput = document.getElementById('rectangleHeight');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[rectangleBaseInput, rectangleHeightInput].forEach(input => {
  input.addEventListener('input', () => {
    if (rectangleBaseInput.value !== '' && rectangleHeightInput.value !== '') {
      sendButton.classList.remove('disabled');
    } else {
      sendButton.classList.add('disabled');
    }
  });
});

// Ao clicar no botão é calculado a área, perímetro e diagonal do retângulo 
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let rectangleBase = parseFloat(rectangleBaseInput.value);
  let rectangleHeight = parseFloat(rectangleHeightInput.value);
  
  let area = (rectangleBase * rectangleHeight).toFixed(4);
  let perimeter = (2 * (rectangleBase + rectangleHeight)).toFixed(4);

  // Calculando a diagonal do retângulo
  let baseSquared = Math.pow(rectangleBase, 2);
  let heightSquared = Math.pow(rectangleHeight, 2);

  console.log(baseSquared, heightSquared);
  // Teorema de Pitágoras para calcular a diagonal
  // O valor do quadrado da hipotenusa é igual a soma dos quadrados de seus catetos
  // O "sqrt" é a função matemática para calcular a raiz quadrada.
  let diagonal = Math.sqrt(baseSquared + heightSquared).toFixed(4);

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Base do retângulo: ${rectangleBase}</p>
      <p>Altura do retângulo: ${rectangleHeight}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Área = ${area}</p>
      <p>Perímetro = ${perimeter}</p>
      <p>Diagonal = ${diagonal}</p>
    </div>
  `;

  // Limpar os campos de entrada
  rectangleBaseInput.value = '';
  rectangleHeightInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





