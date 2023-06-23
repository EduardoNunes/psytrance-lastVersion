function scoringRegion(imagem) {
    if (parseInt(imagem.style.top) > 500) {
        removerNotas(imagem);
        console.log(imagem.style.top);
    }
    else {
        console.log('não funcionou', imagem.style.top)
    }
}