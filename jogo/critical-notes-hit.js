function noteHit(nota) {
    switch(nota) {
        case 'red':
                const imagem = document.querySelector('.nota-criada img');
                console.log(imagem.classList);
                if(imagem.classList.contains('red')) {
                    removerNotas(imagem);
                }
                else {
                    console.log('não excluídos')
                }
        break;
        case 'orange':
            
        break;
        case 'yellow':
            
        break;
        case 'green':
            
        break;
        case 'blue':
            
        break;
    }
}