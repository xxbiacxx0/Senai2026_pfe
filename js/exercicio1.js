const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');
const botao = document.querySelector('.botao')

titulo.textContent = 'Sexta-Feira de Carnaval!'

container.style.backgroundcolor = '#17818500';
container.style.widht = '94%';
container.style.margin ='0  auto';

let subtitulo = '<h2>Programação Front-End</h2>';
container.innerHTML += subtitulo;
let imagem ='<img src ="./img/Miranha.jpg" alt= Imagem do Miranha>'
container.innerHTML += imagem

let contador = 0;

botao.addEventListener('click', () =>{
    alert('Você clicou no botão ' + contador + 'vezes')
    contador++;
})