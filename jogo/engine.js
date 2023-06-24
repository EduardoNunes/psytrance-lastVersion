let velocidade = 4;
let zIndex = 9999;
let tempoPausado = 0;

function red() {
    const imagem = '../images/buttons/buttonRedAchatado.png';
    const horizontal = -0.27;
    const classe = 'red';
    criarNotas(imagem, horizontal, classe);
}

function orange() {
    const imagem = '../images/buttons/buttonOrangeachatado.png';
    const horizontal = -0.135;
    const classe = 'orange';
    criarNotas(imagem, horizontal, classe);
}

function yellow() {
    const imagem = '../images/buttons/buttonYellowachatado.png';
    const horizontal = 0;
    const classe = 'yellow';
    criarNotas(imagem, horizontal, classe);
}

function green() {
    const imagem = '../images/buttons/buttonGreenachatado.png';
    const horizontal = 0.14;
    const classe = 'green';
    criarNotas(imagem, horizontal, classe);
}

function blue() {
    const imagem = '../images/buttons/buttonBlueachatado.png';
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
    let tamanho = 0;

    let posY = 0;
    let posX = window.innerWidth / 2;

    function atualizarPosicao() {
        if (pause) {
            pause = true;
            return;
        }

        if (!document.body.contains(img)) {
            return; 
        }

        posY += velocidade;
        posX += horizontal * velocidade;

        tamanho = posY;

        img.style.top = posY + 'px';
        img.style.left = posX + 'px';
        img.style.width = (tamanho / 10) + 'px';
        img.style.height = ((tamanho / 2) / 10) + 'px';

        if (posY < container.clientHeight - 50) {
            requestAnimationFrame(atualizarPosicao);
        } 
        else {
            removerNotas(img);
            chartAnimation(false);
            sequenciaNotas(false);
        }
    }

    function iniciarAnimacao() {
        atualizarPosicao();
    }

    requestAnimationFrame(iniciarAnimacao);
}