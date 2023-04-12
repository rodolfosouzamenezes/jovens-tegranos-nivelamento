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

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  let consonantCount = 0;

  // Contando vogais
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      vowelCount++;
    }
  }

  // Subtraindo as vogais para ter o valor das consoantes
  consonantCount = word.length - vowelCount;

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Palavra: ${word}</p>
      </div>
      <div class="result__outputs">
      <h3>Saída</h3>
      <p>Quantidade de vogais: ${vowelCount}</p>
      <p>Quantidade de consoantes: ${consonantCount}</p>
    </div>
  `;

  // Limpar os campos de entrada
  wordInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





