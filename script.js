document.addEventListener('DOMContentLoaded', function() {
    const repositoriosContainer = document.getElementById('listarepositorios');

    fetch('https://api.github.com/users/wcoutinhoo/repos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao tentar conexão com o GitHub');
            }
            return response.json();
        })
        .then(data => {
        data.forEach(repo => {
            const card = document.createElement('div');
            card.classList.add('card');
            const html = `
                    <h4>${repo.name}</h4>
                    <p>${repo.description || 'Sem descrição'}</p>
                    <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
                `;
            card.innerHTML = html;
            repositoriosContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Erro:', error));
});

const botaoanterior = document.getElementById('botaoanterior');
const botaoproximo = document.getElementById('botaoproximo');
const carouselContainer = document.querySelector('.cardcarrosel');
const slides = document.querySelectorAll('.slide');

let index = 0;

botaoproximo.addEventListener('click', () => {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    carrosel();
});

botaoanterior.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    carrosel();
});

function carrosel() {
    const slideWidth = slides[0].clientWidth;
    carouselContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}
