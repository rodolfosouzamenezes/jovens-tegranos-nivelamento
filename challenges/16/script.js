// Selecionar elementos do DOM
const firstDistanceInput = document.getElementById('firstDistance');
const secondDistanceInput = document.getElementById('secondDistance');
const thirdDistanceInput = document.getElementById('thirdDistance');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[firstDistanceInput, secondDistanceInput, thirdDistanceInput].forEach(input => {
  input.addEventListener('input', () => {
    if (firstDistanceInput.value !== '' &&
      secondDistanceInput.value !== '' &&
      thirdDistanceInput.value !== ''
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
  let firstDistance = parseFloat(firstDistanceInput.value);
  let secondDistance = parseFloat(secondDistanceInput.value);
  let thirdDistance = parseFloat(thirdDistanceInput.value);

  let distances = [firstDistance, secondDistance, thirdDistance];
  
  // Pega o maior numero do array
  let greatest = Math.max(...distances);

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Primeiro valor: ${firstDistance}</p>
      <p>Segundo valor: ${secondDistance}</p>
      <p>Terceiro valor: ${thirdDistance}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Menor valor: ${greatest}</p>
    </div>
  `;

  // Limpar os campos de entrada
  firstDistanceInput.value = '';
  secondDistanceInput.value = '';
  thirdDistanceInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





