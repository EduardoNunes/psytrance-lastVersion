function animacaoUp(tecla) {
    const move = document.getElementsByClassName(tecla)[0];
    move.style.marginTop = '-10px';
}

function animacaoDown(tecla) {
    const move = document.getElementsByClassName(tecla)[0];
    move.style.marginTop = '0px';
}