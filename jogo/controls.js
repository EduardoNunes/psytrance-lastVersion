let pausar = false;

function teclaDown(){
    let tecla = window.event.keyCode;
    switch (tecla){
        case 65: case 88: // Letra A, X vermelho.
            animacaoUp('cinza-1');
            noteHit('red');                        
        break;
        case 83: case 67: case 72: // Letra S, C, H laranja.
            noteHit('orange');
            animacaoUp('cinza-2');
        break;
        case 74: case 73: case 68: // Letra J, D, I amarelo. 
            noteHit('yellow');     
            animacaoUp('cinza-3');
        break;
        case 75: case 79: // Letra K, O verde.
            noteHit('green');
            animacaoUp('cinza-4');
        break;
        case 76: case 80: // Letra L, P azul.
            noteHit('blue');
            animacaoUp('cinza-5');
        break;
        case 32:  // barra de espaço start game.        
            musicTest();
        break;
        case 13:  // enter encerra o game            
            pauseGame();
        break;
    }
}

function teclaUp(){
    let tecla = window.event.keyCode;
    switch (tecla){
        case 65: case 88: // Letra A, X vermelho.
            animacaoDown('cinza-1');
        break;
        case 83: case 67: case 72: // Letra S, C, H Laranja.
            animacaoDown('cinza-2');
        break;
        case 74: case 68: case 73: // Letra J, D, I amarelo. 
            animacaoDown('cinza-3');
        break;
        case 75: case 79: // Letra K, O verde.
            animacaoDown('cinza-4');
        break;
        case 76: case 80: // Letra L, P azul.
            animacaoDown('cinza-5');
        break;
    }
}