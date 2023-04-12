// Selecionar elementos do DOM
const cnpjInput = document.getElementById('cnpj');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
cnpjInput.addEventListener('input', () => {
  if (cnpjInput.value !== '') {
    sendButton.classList.remove('disabled');
  } else {
    sendButton.classList.add('disabled');
  }
});

sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos input e transformando em array
  let cnpj = cnpjInput.value;

  let isValid = true;

  // Remove caracteres não numéricos
  let cnpjNumbers = cnpj.replace(/[^\d]+/g, '');

  // Valida tamanho do CNPJ
  if (cnpjNumbers.length !== 14) {
    isValid = false;
  }

  let cnpjLength = cnpjNumbers.length - 2;


  // Verifica números repitidos
  if (cnpjNumbers == "00000000000000" ||
    cnpjNumbers == "11111111111111" ||
    cnpjNumbers == "22222222222222" ||
    cnpjNumbers == "33333333333333" ||
    cnpjNumbers == "44444444444444" ||
    cnpjNumbers == "55555555555555" ||
    cnpjNumbers == "66666666666666" ||
    cnpjNumbers == "77777777777777" ||
    cnpjNumbers == "88888888888888" ||
    cnpjNumbers == "99999999999999") {
    isValid = false;
  }

  let numbers = cnpjNumbers.substring(0, cnpjLength);
  let digitos = cnpjNumbers.substring(cnpjLength);

  let sum = 0;
  let pos = cnpjLength - 7;

  for (i = cnpjLength; i >= 1; i--) {
    sum += numbers.charAt(cnpjLength - i) * pos--;
    if (pos < 2)
      pos = 9;
  }

  let resultado = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (resultado != digitos.charAt(0)) {isValid = false;}

  cnpjLength = cnpjLength + 1;
  numbers = cnpjNumbers.substring(0, cnpjLength);

  sum = 0;
  pos = cnpjLength - 7;

  for (i = cnpjLength; i >= 1; i--) {
    sum += numbers.charAt(cnpjLength - i) * pos--;
    if (pos < 2)
      pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result != digitos.charAt(1)) {isValid = false;}

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>CNJP: ${cnpj}</p>
      </div>
      <div class="result__outputs">
      <h3>Saída</h3>
      <p>${isValid ? 'Válido' : 'Inválido'}</p>
    </div>
  `;

  // Limpar os campos de entrada
  cnpjInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});
