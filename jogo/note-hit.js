function noteHit(cor) {
        const imagem = document.querySelector('.nota-criada img');
        if(imagem) { // confere se a imagem foi criada
            switch(cor) {
                case 'red':            
                    if(imagem.classList.contains('red')) {
                        scoringRegion(imagem, cor);
                    }
                    else {
                        console.log('perdeu ponto')
                    }                    
                break;
                case 'orange':
                    if(imagem.classList.contains('orange')) {
                        scoringRegion(imagem, cor);
                    }
                    else {
                        console.log('perdeu ponto')
                    }
                break;
                case 'yellow':
                    if(imagem.classList.contains('yellow')) {
                        scoringRegion(imagem, cor);
                    }
                    else {
                        console.log('perdeu ponto')
                    }
                break;
                case 'green':
                    if(imagem.classList.contains('green')) {
                        scoringRegion(imagem, cor);
                    }
                    else {
                        console.log('perdeu ponto')
                    }
                break;
                case 'blue':
                    if(imagem.classList.contains('blue')) {
                        scoringRegion(imagem, cor);
                    }
                    else {
                        console.log('perdeu ponto')
                    }
                break;
            }
        }
        else {
            console.log('perdeu ponto')
        }
}