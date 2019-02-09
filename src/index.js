

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






const penguin = new Penguin(0, 152, 35, 37, 300, 650, 35, 38)
const dolphin1 = new Dolphin(300, 595, 157, 48)
const dolphin2 = new Dolphin(40, 595, 157, 48)



// const dolphin2 = new Dolphin(400, 550, 157, 48)
const polarBear1 = new PolarBear(100, 300, 400, 250)
const whale1 = new Whale(100, 500, 500, 350)

function draw() {
    requestAnimationFrame(draw)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dolphin1.dolphin()
    dolphin2.dolphin()
    // // dolphin2.float()
    // polarBear1.polarBear()
    // whale1.whale()
    penguin.penguin()
    // requestAnimationFrame(draw);
}

draw();

