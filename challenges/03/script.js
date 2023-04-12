// Selecionar elementos do DOM
const firstNameInput = document.getElementById('firstName');
const firstAgeInput = document.getElementById('firstAge');
const secondNameInput = document.getElementById('secondName');
const secondAgeInput = document.getElementById('secondAge');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[firstNameInput, firstAgeInput, secondNameInput, secondAgeInput].forEach(input => {
  input.addEventListener('input', () => {
    if (firstNameInput.value !== '' &&
        firstAgeInput.value !== '' &&
        secondNameInput.value !== '' &&
        secondAgeInput.value !== '' 
    ) {
      sendButton.classList.remove('disabled');
    } else {
      sendButton.classList.add('disabled');
    }
  });
});

// Ao clicar no botão é calculado a média das duas idades 
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let firstName = firstNameInput.value;
  let firstAge = parseFloat(firstAgeInput.value);
  let secondName = secondNameInput.value;
  let secondAge = parseFloat(secondAgeInput.value);

  let averageAge = ((firstAge + secondAge) / 2).toFixed(1);

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Primeiro Nome: ${firstName}</p>
      <p>Primeira Idade: ${firstAge}</p>
      <p>Segundo Nome: ${secondName}</p>
      <p>Segunda Idade: ${secondAge}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>A idade média de ${firstName} e ${secondName} é de ${averageAge} anos</p>
    </div>
  `;

  // Limpar os campos de entrada
  firstNameInput.value = '';
  firstAgeInput.value = '';
  secondNameInput.value = '';
  secondAgeInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





