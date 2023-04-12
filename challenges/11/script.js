// Selecionar elementos do DOM
const firstGradeInput = document.getElementById('firstGrade');
const secondGradeInput = document.getElementById('secondGrade');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
[firstGradeInput, secondGradeInput].forEach(input => {
  input.addEventListener('input', () => {
    if (firstGradeInput.value !== '' &&
      secondGradeInput.value !== ''
    ) {
      sendButton.classList.remove('disabled');
    } else {
      sendButton.classList.add('disabled');
    }
  });
});

// Ao clicar no botão é calculado resultado final do aluno
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores dos inputs
  let firstGrade = parseFloat(firstGradeInput.value);
  let secondGrade = parseFloat(secondGradeInput.value);

  let finalGrade = (firstGrade + secondGrade).toFixed(1);
  let isFailed = finalGrade <= 60.0;

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Primeira nota: ${firstGrade}</p>
      <p>Segunda nota: ${secondGrade}</p>
    </div>
    <div class="result__outputs">
      <h3>Saída</h3>
      <p>Nota final: ${finalGrade}</p>
      ${isFailed ? `<p>REPROVADO</p>` : ``}
    </div>
  `;

  // Limpar os campos de entrada
  firstGradeInput.value = '';
  secondGradeInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





