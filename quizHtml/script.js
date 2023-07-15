AOS.init();

//variavel perguntas atuais
let currentQuestion = 0;

//variaveis de resposta certas
let corretAnswers = 0;


showQuestion();


function showQuestion() {
    //seleciona os elementos
    const scoreArea = document.querySelector('.scoreArea');
    const questionsArea = document.querySelector('.questionArea');
    const question = document.querySelector('.question');
    const options = document.querySelector('.options');
    const progressBar = document.querySelector('.progress--bar');

    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        //barraDeProgess
        let pct = Math.floor((currentQuestion / questions.length) * 100);
        //mostra a barra conforme a porcentagem da conta acima
        progressBar.style.width = `${pct}%`;


        //mostra a questao na tela
        scoreArea.style.display = 'none';
        questionsArea.style.display = 'block';

        question.innerHTML = q.question;

        //mostra as opçoes na tela
        let optionsHtml = '';
        for (let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`;
        }

        options.innerHTML = optionsHtml;

        //adiciona um click as opção
        document.querySelectorAll('.option').forEach(item => {
            item.addEventListener('click', optionClick);
        });


    } else {
        //funçao pra quando acabarem as perguntas
        finishQuizz();
    }
}

//funçao de click das opçao
function optionClick(e) {
    var clickOption = parseInt(e.target.getAttribute('data-op'));

    if (questions[currentQuestion].answer === clickOption) {
        //verifica se ta certo
        corretAnswers++;
    }
    //independente da resposta certa ou nao passa para a proxima
    currentQuestion++;
    showQuestion();
}


function finishQuizz() {
    //pega os elementos novamente
    const scoreArea = document.querySelector('.scoreArea');
    const questionsArea = document.querySelector('.questionArea');

    const progressBar = document.querySelector('.progress--bar');

    const scorePorcentagem = document.querySelector('.scorePct');
    const scoreText1 = document.querySelector('.scoreText1');
    const scoreText2 = document.querySelector('.scoreText2');

    //mostra a area de score
    scoreArea.style.display = 'block';
    //esconde as questoes
    questionsArea.style.display = 'none';

    //mostra o progress bar em 100%
    progressBar.style.width = '100%';

    //pega a porcentagem de quatas perguntas foram acertadas
    let poitns = Math.floor((corretAnswers / questions.length) * 100);
    //exibe na tela a porcentagem de quatas perguntas acertadas
    scorePorcentagem.innerHTML = `acertou ${poitns}%`;


    //exibe na tela quantas foi acertadas
    scoreText2.innerHTML = `Acertou ${corretAnswers} de ${questions.length} questoes`;

    if (poitns < 30) {
        scoreText1.innerHTML = 'Você precisa melhorar!';
    } else if (poitns >= 30 && poitns < 70) {
        scoreText1.innerHTML = 'Você está quase lá!';
    } else if (poitns >= 70) {
        scoreText1.innerHTML = 'Parabéns! Você foi muito bem!';
    }

}



//button final elementos
const buttonRefazer = document.getElementById('refazer');
const buttonInicio = document.getElementById('inicio');

//funçao de click para recarregar se o user quiser refazer o quizz
buttonRefazer.addEventListener('click', () => {
    window.location.reload();
});


