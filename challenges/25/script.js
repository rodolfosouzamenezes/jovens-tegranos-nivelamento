// Selecionar elementos do DOM
const bornDateInput = document.getElementById('bornDate');

const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

// Listener que adiciona ou remove a classe "disabled" do botão enviar
bornDateInput.addEventListener('input', () => {
  if (bornDateInput.value !== '') {
    sendButton.classList.remove('disabled');
  } else {
    sendButton.classList.add('disabled');
  }
});

sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Pegando os valores do input
  let bornDate = bornDateInput.value;

  // Descontruindo a data
  let [day, mouth] = bornDate.split('/');
  day = parseInt(day);
  mouth = parseInt(mouth);

  let sign = "";

  if (mouth === 1) {
    if (day <= 20) {
      sign = "Capricórnio";
    } else {
      sign = "Aquário";
    }
  } else if (mouth === 2) {
    if (day <= 18) {
      sign = "Aquário";
    } else {
      sign = "Peixes";
    }
  } else if (mouth === 3) {
    if (day <= 20) {
      sign = "Peixes";
    } else {
      sign = "Áries";
    }
  } else if (mouth === 4) {
    if (day <= 20) {
      sign = "Áries";
    } else {
      sign = "Touro";
    }
  } else if (mouth === 5) {
    if (day <= 20) {
      sign = "Touro";
    } else {
      sign = "Gêmeos";
    }
  } else if (mouth === 6) {
    if (day <= 20) {
      sign = "Gêmeos";
    } else {
      sign = "Câncer";
    }
  } else if (mouth === 7) {
    if (day <= 22) {
      sign = "Câncer";
    } else {
      sign = "Leão";
    }
  } else if (mouth === 8) {
    if (day <= 22) {
      sign = "Leão";
    } else {
      sign = "Virgem";
    }
  } else if (mouth === 9) {
    if (day <= 22) {
      sign = "Virgem";
    } else {
      sign = "Libra";
    }
  } else if (mouth === 10) {
    if (day <= 22) {
      sign = "Libra";
    } else {
      sign = "Escorpião";
    }
  } else if (mouth === 11) {
    if (day <= 21) {
      sign = "Escorpião";
    } else {
      sign = "Sagitário";
    }
  } else if (mouth === 12) {
    if (day <= 21) {
      sign = "Sagitário";
    } else {
      sign = "Capricórnio";
    }
  }

  const resultHTML = `
    <h2>RESULTADO</h2>
    <div class="result__inputs">
      <h3>Entrada</h3>
      <p>Data de nascimento: ${bornDate}</p>
      </div>
      <div class="result__outputs">
      <h3>Saída</h3>
      <p>Signo: ${sign}</p>
    </div>
  `;

  // Limpar os campos de entrada
  bornDateInput.value = '';
  sendButton.classList.add('disabled');

  // Exibir o resultado
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "flex";
});





