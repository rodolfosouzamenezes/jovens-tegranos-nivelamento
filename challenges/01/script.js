// Selecionar elementos do DOM
const landWidth = document.getElementById('landWidth');
const landLength = document.getElementById('landLength');
const squareMeterPrice = document.getElementById('squareMeterPrice');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adicionar ou remover a classe "disabled" do botão enviar
[landWidth, landLength, squareMeterPrice].forEach(input => {
  input.addEventListener('input', () => {
    if (landWidth.value !== '' && landLength.value !== '' && squareMeterPrice.value !== '') {
      sendButton.classList.remove('disabled');
    } else {
      sendButton.classList.add('disabled');
    }
  });
});

// Ao clicar no botãi é calculado a área e o preço do terreno
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  const landArea = (landWidth.value * landLength.value).toFixed(2);
  const landPrice = (landArea * squareMeterPrice.value).toFixed(2);

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Largura do terreno: ${landWidth.value} m</p>
      <p>Comprimento do terreno: ${landLength.value} m</p>
      <p>Valor do metro quadrado: R$ ${squareMeterPrice.value}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Área do terreno = ${landArea} m²</p>
      <p>reço do terreno = R$ ${landPrice}</p>
    </div>
  `;

  // Limpar os campos de entrada
  landWidth.value = '';
  landLength.value = '';
  squareMeterPrice.value = '';
  sendButton.disabled = true;

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





