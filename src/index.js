

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
let music = document.getElementById('music');
let splashSound = document.getElementById('splash');
let sound = document.getElementById('sound');
let playMusic = true;


function keyDownHandler(e) {
    e.preventDefault();
    if (e.keyCode == 39) { rightPressed = true; }
    if (e.keyCode == 37) { leftPressed = true; }
    if (e.keyCode == 38) { upPressed = true; }
    if (e.keyCode == 40) { downPressed = true; }
    if (e.keyCode == 9) {
        playMusic = !playMusic;
        if (playMusic){
            sound.style.display = 'none';
            mute.style.display = 'inline';
        }
        else{
            sound.style.display = 'inline';
            mute.style.display = 'none';
        }
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) { rightPressed = false; }
    if (e.keyCode == 37) { leftPressed = false; }
    if (e.keyCode == 38) { upPressed = false; }
    if (e.keyCode == 40) { downPressed = false; }
}


let obstacles = new Obstacle();
let game = new Game();


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    game.gameOver();
    obstacles.winner();

    if (play){
        if (playMusic) {
            music.play();
            sound.style.display = 'none';
            mute.style.display = 'inline';
        } else{ 
            music.pause();
        }
        game.lives();
        dolphin1.drawObject();
        dolphin2.drawObject();
        polarBear1.drawObject();
        polarBear2.drawObject();
        whale1.drawWhale();
        whale2.drawWhale();
        humpbackwhale1.drawObject();
        humpbackwhale2.drawObject();
        dolphin3.drawObject();
        dolphin4.drawObject();
        polarBear3.drawObject();
        polarBear4.drawObject();
        iceberg1.drawIceberg(ctx);
        iceberg2.drawIceberg(ctx);
        iceberg3.drawIceberg(ctx);
        obstacles.oniceberg();
        penguin.penguin();
        obstacles.float();
        game.timer();
    }
    requestAnimationFrame(draw);
}


window.addEventListener("keyup", e => {
    if (e.keyCode === 13 && play === false) {
        play = true;
        document.getElementById("game").classList.remove("off");
        document.getElementById("game").classList.add("on");
        document.getElementById("gameScreen").classList.remove("on");
        document.getElementById("gameScreen").classList.add("off");
        document.getElementById("foot").classList.remove("footer1");
        document.getElementById("foot").classList.add("footer");
        draw();
    }
});

window.addEventListener("keyup", e => { 
    if (e.keyCode === 32 && play === false) {
        play = true;
        location.reload(); 
        document.getElementById("game").classList.remove("off");
        document.getElementById("game").classList.add("on");
        document.getElementById("gameOver").classList.remove("on");
        document.getElementById("gameOver").classList.add("off");
        draw();   
    }
});








