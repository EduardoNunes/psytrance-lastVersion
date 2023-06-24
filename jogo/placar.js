const scoreTela = document.getElementById('score');
const strikeTela = document.getElementById('strike');

function placarScore(valor) {
    scoreTela.textContent = valor;
}

function placarStrike(sequencia) {
    strikeTela.textContent = sequencia;
}