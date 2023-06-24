let acerto = false;

function scoringRegion(imagem, cor) {
    
    if (parseInt(imagem.style.top) > 500) {
        acerto = true;

        removerNotas(imagem);
        fireHit(cor);        
        pontos(acerto);
        sequenciaNotas(acerto);
    }
    else {
        acerto = false;
        
        sequenciaNotas(acerto);
    }
}