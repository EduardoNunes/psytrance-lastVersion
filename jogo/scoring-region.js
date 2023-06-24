function scoringRegion(imagem, cor) {

    if (parseInt(imagem.style.top) > 500) {
        removerNotas(imagem);
        fireHit(cor);
        console.log('ACERTOU', imagem.style.top)
    }
    else {
        console.log('NÃO ACERTOU', imagem.style.top)
    }
}