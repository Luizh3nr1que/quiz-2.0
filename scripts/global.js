const imgHtml = document.getElementById('imgHtml');
const imgCss = document.getElementById('imgCss');
const imgJs = document.getElementById('imgJs');

const container = document.querySelector('.descQuiz');
const html = document.querySelector('.html');
const css = document.querySelector('.css');
const js = document.querySelector('.js');

const inicio = document.querySelector('.inicio');


imgHtml.addEventListener('click', () => {
    if (container.style.display == 'none') {
        container.classList.add('animationSlider');
        container.style.display = 'block';
        css.style.display = 'none';
        js.style.display = 'none';
        html.style.display = 'block';
        inicio.style.display = 'none';
    } else {
        container.style.display = 'none'
    }
})

imgCss.addEventListener('click', () => {
    if (container.style.display == 'none') {
        container.classList.add('animationSlider');
        container.style.display = 'block';
        html.style.display = 'none';
        js.style.display = 'none';
        css.style.display = 'block';
        inicio.style.display = 'none';
    } else {
        container.style.display = 'none'
    }
})


imgJs.addEventListener('click', () => {
    if (container.style.display == 'none') {
        container.classList.add('animationSlider');
        container.style.display = 'block';
        html.style.display = 'none';
        js.style.display = 'block';
        css.style.display = 'none';
        inicio.style.display = 'none';
    } else {
        container.style.display = 'none'
    }
})

const imgs = document.querySelectorAll('img');

imgs.forEach(img => {
    img.addEventListener('click', () => {
        // Percorra todas as imagens e remova a classe "clicked"
        imgs.forEach(otherImg => {
            otherImg.classList.remove('clicked');
        });

        // Adicione a classe "clicked" à imagem atualmente selecionada
        img.classList.add('clicked');
    });
});

//abre o card do inicio
const home = document.querySelector('.home');
const descQuiz = document.querySelector('.descQuiz');
home.addEventListener('click', () => {
    home.classList.remove('clicked');
    inicio.style.display = 'block';
    descQuiz.style.display = 'none';

});


//funçao tela de loader
window.addEventListener("load", function () {
    const loader = document.querySelector('.fundoLoad')
    loader.style.display = "none";
});
