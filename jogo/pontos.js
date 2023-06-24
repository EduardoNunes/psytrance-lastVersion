let ponto = 0;
let sequencia = 0;
let vitoriaOuDerrota = 10;

function pontos(acerto) {
    if (acerto) {
        ponto += 10;
        
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

        placarStrike(sequencia);
    }
    else {
        sequencia = 0;

        placarStrike(sequencia);
    }
}