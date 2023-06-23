function noteHit(cor) {
        const nota = document.querySelector('.nota-criada img');
        if(nota) { // confere se a nota foi criada
            switch(cor) {
                case 'red':            
                    if(nota.classList.contains('red')) {
                        scoringRegion(nota);                
                    }
                    else {
                        console.log('perdeu ponto')
                    }
                    
                break;
                case 'orange':
                    if(nota.classList.contains('orange')) {
                        scoringRegion(nota);
                    }
                    else {
                        console.log('perdeu ponto')
                    }
                break;
                case 'yellow':
                    if(nota.classList.contains('yellow')) {
                        scoringRegion(nota);
                    }
                    else {
                        console.log('perdeu ponto')
                    }
                break;
                case 'green':
                    if(nota.classList.contains('green')) {
                        scoringRegion(nota);
                    }
                    else {
                        console.log('perdeu ponto')
                    }
                break;
                case 'blue':
                    if(nota.classList.contains('blue')) {
                        scoringRegion(nota);
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