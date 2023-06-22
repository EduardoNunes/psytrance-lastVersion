const velocidade = 60;
let zIndexRed = 9999;

function red() {
    const imagem = '../jogo/botoes/buttonRedAchatado.png';
    const horizontal = -0.25;
    criarNotas(imagem, horizontal);
}

function orange() {
    const imagem = '../jogo/botoes/buttonOrangeachatado.png';
    const horizontal = -0.15;
    criarNotas(imagem, horizontal);
}

function yellow() {
    const imagem = '../jogo/botoes/buttonYellowachatado.png';
    const horizontal = 0;
    criarNotas(imagem, horizontal);
}

function green() {
    const imagem = '../jogo/botoes/buttonGreenachatado.png';
    const horizontal = 0.15;
    criarNotas(imagem, horizontal);
}

function blue() {
    const imagem = '../jogo/botoes/buttonBlueachatado.png';
    const horizontal = 0.25;
    criarNotas(imagem, horizontal);
}


function removerNotas(img) {
    if (img) {
        img.remove();
    }
}

function criarNotas(imagem, horizontal) {
    const container = document.querySelector('.nota-criada');

    let img = document.createElement('img');
    img.src = imagem;
    img.width = 8;
    img.height = 4;

    img.style.left = '50%';
    img.style.transform = 'translateX(-50%)';

    container.appendChild(img);

    moverNotas(img, horizontal)
}

function moverNotas(img, horizontal) {
    const container = document.querySelector('.nota-criada');
    const verticalY = 1;
    const horizontalX = horizontal;

    let posY = 0;
    let posX = window.innerWidth/2;

    function atualizarPosicao(timestamp) {
        const elapsedTime = timestamp - startTime;
        const distanciaY = (elapsedTime / 1000) * verticalY;
        const distanciaX = (elapsedTime / 1000) * horizontalX;

        posY += distanciaY;
        posX += distanciaX;

        img.style.top = posY + 'px';
        img.style.left = posX + 'px';

        if (posY < container.clientHeight) {
            requestAnimationFrame(atualizarPosicao);
        } else {
            removerNotas(img);
        }
    }

    let startTime = null;
    function iniciarAnimacao(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }
        atualizarPosicao(timestamp);
    }

    requestAnimationFrame(iniciarAnimacao);
}