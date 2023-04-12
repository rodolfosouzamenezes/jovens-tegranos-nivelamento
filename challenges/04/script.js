// Selecionar elementos do DOM
const unitPriceInput = document.getElementById('unitPrice');
const quantityInput = document.getElementById('quantity');
const amountPaidInput = document.getElementById('amountPaid');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[unitPriceInput, quantityInput, amountPaidInput].forEach(input => {
  input.addEventListener('input', () => {
    if (unitPriceInput.value !== '' &&
        quantityInput.value !== '' &&
        amountPaidInput.value !== ''
    ) {
      sendButton.classList.remove('disabled');
    } else {
      sendButton.classList.add('disabled');
    }
  });
});

// Ao clicar no botão é calculado o troco 
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let unitPrice = parseFloat(unitPriceInput.value);
  let quantity = parseInt(quantityInput.value);
  let amountPaid = parseFloat(amountPaidInput.value);

  let totalPrice = unitPrice * quantity;
  let change = amountPaid - totalPrice;

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Preço unitário do produto: ${unitPrice}</p>
      <p>Quantidade comprada: ${quantity}</p>
      <p>Dinheiro recebido: ${amountPaid}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Troco = ${change}</p>
    </div>
  `;

  // Limpar os campos de entrada
  unitPriceInput.value = '';
  quantityInput.value = '';
  amountPaidInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





