let pause = false;

function pauseGame() {
    if (!pause) {
        pause = true;
        timeouts.forEach((timeout) => clearTimeout(timeout));
    }
    else {
        pause = false;
    }
}