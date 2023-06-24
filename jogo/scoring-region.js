function scoringRegion(imagem, cor) {
    
    if (parseInt(imagem.style.top) > 500) {
        removerNotas(imagem);
        fireHit(cor);

        pontos(true);
        sequenciaNotas(true);
    }
    else {
        chartAnimation(false);
        sequenciaNotas(false);
    }
}