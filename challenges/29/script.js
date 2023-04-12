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

  // Valida primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpjNumbers.charAt(i)) * (11 - i);
  }
  let rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  if (rest !== parseInt(cnpjNumbers.charAt(12))) {
    isValid = false;
  }

  // Valida segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpjNumbers.charAt(i)) * (12 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  if (rest !== parseInt(cnpjNumbers.charAt(13))) {
    isValid = false;
  }

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





