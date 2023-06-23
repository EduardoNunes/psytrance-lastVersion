let pause = false;

function pauseGame() {
    if (!pause) {
        pause = true;
        console.log(pause)
    }
    else {
        pause = false;       
        console.log(pause)
    }
}