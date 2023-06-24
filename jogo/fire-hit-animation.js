function fireHit(cor) {
    const fire = document.getElementsByClassName('fogo-1')[0];
    switch(cor) {
        case 'red':            
            fire.style.left = '13px';
        break;
        case 'orange':            
            fire.style.left = '83px';
        break;
        case 'yellow':            
            fire.style.left = '155px';
        break;
        case 'green':            
            fire.style.left = '226px';
        break;
        case 'blue':            
            fire.style.left = '298px';
        break;
    }

    fire.style.display = 'block';
    setTimeout(() => {
        fire.style.display = 'none';
    }, 100) ;   
}