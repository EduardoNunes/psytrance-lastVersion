var timeouts = [];
var isPaused = false;
var executarTimeout;
var funcoes = [];
var temposRestantes = [];
var tempoDecorridoAntesDePausar = 0;


function meuNordesteEasy() {

timeDown = 140; // tempo da música em BPM.
totalNotas = 1427; // quantidade total de notas da música
limiteNota = 530; // local exato onde as notas sumirão se n for tocada
velocidadeNotas = 290; // ajusta velocidade de descida das notas. Para fazer ajuste fino e encaixar na área de acerto

limiteLinha = 122; // local exato onde as linhas sumirao
velocidadeLinha = 373; // ajusta velocidade de descida das linhas

if (isPaused) {
    
    for (var i = 0; i < timeouts.length; i++) {
        temposRestantes.push(timeouts[i]._idleTimeout - (Date.now() - timeouts[i]._idleStart));            
    }
    return;
}

    timeouts.push(setTimeout(telaAviso, 0));
}