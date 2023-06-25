const scoreTela = document.getElementById('score');
const strikeTela = document.getElementById('strike');

function placarScore(ponto) {
    scoreTela.textContent = ponto;
}

function placarStrike(multiplicado) {
    strikeTela.textContent = multiplicado;
}