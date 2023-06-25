let ponto = 0;
let sequencia = 0;
let vitoriaOuDerrota = 10;
let multiplicado = 1;

function pontos(acerto) {
    if (acerto) {
        ponto += 10 * multiplicado;

        placarScore(ponto);
        chartAnimation(true);
    }
    else {
        chartAnimation(false);
    }
}

function sequenciaNotas(acerto) {
    if (acerto) {
        sequencia++;
    }
    else {
        sequencia = 0;
    }
    acumulado();
}

function acumulado() {
    if (sequencia < 5) {
        multiplicado = 1;
    }
    else if (sequencia < 10) {
        multiplicado = 2;
    }
    else if (sequencia < 15) {
        multiplicado = 3;
    }
    else if (sequencia < 20) {
        multiplicado = 4;
    }
    else if (sequencia >= 20) {
        multiplicado = 8;
    }
    placarStrike(multiplicado);
}