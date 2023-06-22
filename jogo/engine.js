let velocidade = 1;
let zIndex = 9999;

function red() {
    const imagem = '../jogo/botoes/buttonRedAchatado.png';
    const horizontal = -0.27;
    const classe = 'red';
    criarNotas(imagem, horizontal, classe);
}

function orange() {
    const imagem = '../jogo/botoes/buttonOrangeachatado.png';
    const horizontal = -0.13;
    const classe = 'orange';
    criarNotas(imagem, horizontal, classe);
}

function yellow() {
    const imagem = '../jogo/botoes/buttonYellowachatado.png';
    const horizontal = 0;
    const classe = 'yellow';
    criarNotas(imagem, horizontal, classe);
}

function green() {
    const imagem = '../jogo/botoes/buttonGreenachatado.png';
    const horizontal = 0.14;
    const classe = 'green';
    criarNotas(imagem, horizontal, classe);
}

function blue() {
    const imagem = '../jogo/botoes/buttonBlueachatado.png';
    const horizontal = 0.275;
    const classe = 'blue';
    criarNotas(imagem, horizontal, classe);
}


function removerNotas(img) {
    if (img) {
        img.remove();
    }
}

function criarNotas(imagem, horizontal, classe) {
    const container = document.querySelector('.nota-criada');

    let img = document.createElement('img');
    img.src = imagem;
    img.width = 8;
    img.height = 4;
    img.classList.add(classe);

    img.style.left = '50%';
    img.style.transform = 'translateX(-50%)';
    img.style.zIndex = zIndex;
    zIndex--;

    container.appendChild(img);

    moverNotas(img, horizontal)
}

function moverNotas(img, horizontal) {
    const container = document.querySelector('.nota-criada');
    const verticalY = velocidade;
    const horizontalX = horizontal;
    let tamanho = 0;

    let posY = 0;
    let posX = window.innerWidth/2;

    function atualizarPosicao(timestamp) {
        const elapsedTime = timestamp - startTime;
        const distanciaY = (elapsedTime / 1000) * verticalY;
        const distanciaX = distanciaY * horizontalX;

        posY += distanciaY;
        posX += distanciaX;

        tamanho = posY;

        img.style.top = posY + 'px';
        img.style.left = posX + 'px';
        img.style.width = (tamanho/10) + 'px';
        img.style.height = ((tamanho/2)/10) + 'px';

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