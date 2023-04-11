const challengeList = document.getElementById('challenge-list');
const searchField = document.getElementById('search-field');
const cards = document.getElementsByClassName('card');

function loadChallenges() {
    // Simulando uma chamada de uma API com JSON
    fetch('/challenges/index.json')
        .then(response => response.json())
        .then(data => {
            for (const challenge of data) {
                const card = `
                    <a class="card" href="/challenge.html?challange=${challenge.id}">
                        <p class="card__number">#${challenge.id}</p>
                        <div class="card__text">
                            <h2>${challenge.title}</h2>
                            <p>${challenge.description}</p>
                        </div>
                    </a>
                `;

                // Insere o card como o último da lista
                challengeList.insertAdjacentHTML('beforeend', card);
            }
        });
}

function searchChallenge() {
    const input = searchField.value.toLowerCase();
    for (const card of cards) {
        const number = card.querySelector('.card__number').textContent.toLowerCase();
        const title = card.querySelector('.card__text h2').textContent.toLowerCase();

        const matchNumber = number.includes(input);
        const matchTitle = title.includes(input);
        
        //Exibe apenas os cards que tenham o título ou número iguais ao valor inserido no input
        card.style.display = matchNumber || matchTitle ? 'flex' : 'none';
    }
}

//Exibe  os desafios na página 
loadChallenges();

//Listener para o evento de mudança do input de busca
searchField.addEventListener('input', searchChallenge);