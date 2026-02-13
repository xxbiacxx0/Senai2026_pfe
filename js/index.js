const corpo = document.querySelector('.corpo')
const titulo = document.querySelector('.titulo');
const paragrafo = document.querySelector('#texto');
const container = document.querySelector('#container')

corpo.style.backgroundColor = 'purple';
corpo.style.color = 'white';

titulo.textContent = 'Manipulando o Dom de novo!'

let subtitulo = '<h2>Manipular o Dom é very simple!</h2>';
container.innerHTML = subtitulo;