// Selecionar elementos do DOM
const wordInput = document.getElementById('word');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
wordInput.addEventListener('input', () => {
  if (wordInput.value !== '') {
    sendButton.classList.remove('disabled');
  } else {
    sendButton.classList.add('disabled');
  }
});

sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores do input
  let word = wordInput.value;
  word = word.toLowerCase();

  let wordLength = word.length; 
  let isPalindrome = true;

  for (let i = 0; i < wordLength / 2; i++) {
    // Comparando as primeiras letras com as últimas
    if (word[i] !== word[wordLength - i - 1]) {
      isPalindrome = false;
      break;
    }
  }

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Palavra: ${word}</p>
      </div>
      <div class="result__outputs">
      <h3>Saída</h3>
      <p>${isPalindrome ? 'É' : 'Não é'} um palindromo</p>
    </div>
  `;

  // Limpar os campos de entrada
  wordInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





