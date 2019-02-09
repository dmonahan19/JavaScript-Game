

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



const penguin = new Penguin(0, 152, 35, 37, 300, 230, 35, 38)

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   allDolphins.map(dolphin => {
       dolphin.drawDolphin(ctx)
   })
    penguin.penguin()
    // movePenguin();
    // createDolphin();
    // drawDolphin();
    // drawImage();
    // float();
    requestAnimationFrame(draw);
}

draw();

