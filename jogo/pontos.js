let ponto = 0;
let sequencia = 0;

function pontos(acerto) {
    ponto += 10;
    console.log('Pontos = ', ponto)
}

function sequenciaNotas(acerto) {
    if (acerto) {
        sequencia++;
        console.log('Sequencia true', sequencia)
    }
    else {
        sequencia = 0;
        console.log('Sequencia false', sequencia)
    }
}