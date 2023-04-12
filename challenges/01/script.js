// Selecionar elementos do DOM
const landWidthInput = document.getElementById('landWidth');
const landLengthInput = document.getElementById('landLength');
const squareMeterPriceInput = document.getElementById('squareMeterPrice');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adicionar ou remover a classe "disabled" do botão enviar
[landWidthInput, landLengthInput, squareMeterPriceInput].forEach(input => {
  input.addEventListener('input', () => {
    if (landWidthInput.value !== '' && landLengthInput.value !== '' && squareMeterPriceInput.value !== '') {
      sendButton.classList.remove('disabled');
    } else {
      sendButton.classList.add('disabled');
    }
  });
});

// Ao clicar no botãi é calculado a área e o preço do terreno
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let landWidth = parseFloat(landWidthInput.value);
  let landLength = parseFloat(landLengthInput.value);
  let squareMeterPrice = parseFloat(squareMeterPriceInput.value);

  let landArea = (landWidth * landLength).toFixed(2);
  let landPrice = (landArea * squareMeterPrice).toFixed(2);

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Largura do terreno: ${landWidth} m</p>
      <p>Comprimento do terreno: ${landLength} m</p>
      <p>Valor do metro quadrado: R$ ${squareMeterPrice}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Área do terreno = ${landArea} m²</p>
      <p>reço do terreno = R$ ${landPrice}</p>
    </div>
  `;

  // Limpar os campos de entrada
  landWidthInput.value = '';
  landLengthInput.value = '';
  squareMeterPriceInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





