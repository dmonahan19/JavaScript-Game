

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


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
   
    
    game.gameOver();
    obstacles.winner()

    if (play){
        game.lives()
        dolphin1.dolphin()
        dolphin2.dolphin()
        polarBear1.polarBear()
        polarBear2.polarBear()
        whale1.whale()
        whale2.whale()
        humbackwhale1.humpBackWhale() 
        humbackwhale2.humpBackWhale() 
        dolphin3.dolphin()
        dolphin4.dolphin()
        polarBear3.polarBear()
        polarBear4.polarBear()
        iceberg1.drawIceberg(ctx)
        iceberg2.drawIceberg(ctx)
        iceberg3.drawIceberg(ctx)
        obstacles.oniceberg();
        penguin.penguin()
        obstacles.float()
    }
    requestAnimationFrame(draw)
}

draw();

