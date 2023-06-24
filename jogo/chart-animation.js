let pontosQuadro = 15;
function chartAnimation(vitoriaOuDerrota) {
    if (vitoriaOuDerrota) {
        pontosQuadro++;
        console.log('Pontos Quadro ganha', pontosQuadro)

        if(pontosQuadro >= 25) {
            pontosQuadro = 25;
        }
    }
    else {
        pontosQuadro--;
        console.log('Pontos Quadro perde', pontosQuadro)

        if(pontosQuadro <= 0) {
            console.log('DERROTA')
            pontosQuadro = 0;
        }
    }

    let quadro = document.getElementById('quadroPizza');

    if (pontosQuadro < 5) {
        quadro.style.backgroundImage = "url('../images/chart-points/pizza apagada.png')";
    }
    else if (pontosQuadro < 10) {
        quadro.style.backgroundImage = "url('../images/chart-points/pizza vermelho.png')";
    }
    else if (pontosQuadro < 15) {
        quadro.style.backgroundImage = "url('../images/chart-points/pizza amarelo1.png')";
    }
    else if (pontosQuadro < 20) {
        quadro.style.backgroundImage = "url('../images/chart-points/pizza amarelo2.png')";
    }
    else {
        quadro.style.backgroundImage = "url('../images/chart-points/pizza verde.png')";
    }
}