function noteHit(nota) {
    const imagem = document.querySelector('.nota-criada img');
    switch(nota) {
        case 'red':
            console.log(imagem.classList);
            if(imagem.classList.contains('red')) {
                removerNotas(imagem);
            }
            else {
                
            }
        break;
        case 'orange':
            console.log(imagem.classList);
            if(imagem.classList.contains('orange')) {
                removerNotas(imagem);
            }
            else {
                
            }
        break;
        case 'yellow':
            console.log(imagem.classList);
            if(imagem.classList.contains('yellow')) {
                removerNotas(imagem);
            }
            else {
                
            }
        break;
        case 'green':
            console.log(imagem.classList);
            if(imagem.classList.contains('green')) {
                removerNotas(imagem);
            }
            else {
                
            }
        break;
        case 'blue':
            console.log(imagem.classList);
            if(imagem.classList.contains('blue')) {
                removerNotas(imagem);
            }
            else {
                
            }
        break;
    }
}