// Selecionar elementos do DOM
const numberInput = document.getElementById('number');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
numberInput.addEventListener('input', () => {
  if (numberInput.value !== '') {
    sendButton.classList.remove('disabled');
  } else {
    sendButton.classList.add('disabled');
  }
});

// Ao clicar no botão é o número é convertido por extenso
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let number = parseInt(numberInput.value);

  let numbersInFull = ['Zero', 'Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez', 'Onze', 'Doze', 'Treze', 'Quatorze', 'Quinze', 'Dezesseis', 'Dezessete', 'Dezoito', 'Dezenove', 'Vinte', 'Trinta', 'Quarenta', 'Cinquenta', 'Sessenta', 'Setenta', 'Oitenta', 'Noventa'];

  let numberInFull;

  // Até 20 os numeros estão na ordem correta 
  if (number <= 20) {
    numberInFull = numbersInFull[number]
  } else {
    // O número é dividido por 10, por exemplo 34 vai resultar em 3.4
    // Com "floor" pegamos o menor número inteiro, que seria 3 (a casa decimal que precisamos)
    // E ao final somamos 18 para que a posição correta de dezenas seja acessada 
    let ten = numbersInFull[Math.floor(number / 10) + 18];
    
    // Fazemos a conta do resto da divisão do número para pegar o valor da unidade
    let unit = numbersInFull[number % 10].toLowerCase();

    if  (number % 10 == 0) {
      numberInFull = ten;
    } else {
      numberInFull = ten + ' e ' + unit;
    }
  }

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Número: ${number}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Por extenso: ${numberInFull}</p>
    </div>
  `;

  // Limpar os campos de entrada
  numberInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





