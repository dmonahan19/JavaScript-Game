

document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)

function keyDownHandler(e) {
    if (e.keyCode == 39) { rightPressed = true; }
    if (e.keyCode == 37) { leftPressed = true; }
    if (e.keyCode == 38) { upPressed = true; }
    if (e.keyCode == 40) { downPressed = true; }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) { rightPressed = false; }
    if (e.keyCode == 37) { leftPressed = false; }
    if (e.keyCode == 38) { upPressed = false; }
    if (e.keyCode == 40) { downPressed = false; }
}

const obstacles = new Obstacle();
const game = new Game();
// let dolphin = new Image();
// dolphin.src = "assets/dolphin.png";
// const dolphin8 = new Object(dolphin, 0, 0, 170, 70, 450, 620, 157, 30, 3);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
   
    
    game.gameOver();
    obstacles.winner();

    if (play){
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
    requestAnimationFrame(draw)
}

draw();

