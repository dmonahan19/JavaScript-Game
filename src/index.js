

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


function float() {
    
    if (dolphin1.dolphinX <= penguin.x + penguin.width &&
        dolphin1.dolphinX + dolphin1.dolphinWidth >= penguin.x &&
        dolphin1.dolphinY + dolphin1.dolphinHeight >= penguin.y &&
        dolphin1.dolphinY <= penguin.y + penguin.height) {
        if (penguin.x < canvas.width - 30) {
            penguin.x = penguin.x + 2
        }
    }

    if (dolphin2.dolphinX <= penguin.x + penguin.width &&
        dolphin2.dolphinX + dolphin2.dolphinWidth >= penguin.x &&
        dolphin2.dolphinY + dolphin2.dolphinHeight >= penguin.y &&
        dolphin2.dolphinY <= penguin.y + penguin.height) {
        if (penguin.x < canvas.width - 30) {
            penguin.x = penguin.x + 2
        }
    }
    else if (polarBear1.polarBearX <= penguin.x + penguin.width &&
        polarBear1.polarBearX + polarBear1.polarBearWidth >= penguin.x &&
        polarBear1.polarBearY + polarBear1.polarBearHeight >= penguin.y &&
        polarBear1.polarBearY <= penguin.y + penguin.height) {
        if (penguin.x > 0) {
            penguin.x = penguin.x - 2
        }
    }
    else if (penguin.y < 600) {
        penguin.y = 650

    }
}






const penguin = new Penguin(0, 152, 35, 37, 300, 650, 35, 38)
const dolphin1 = new Dolphin(300, 610, 157, 30)
const dolphin2 = new Dolphin(40, 610, 157, 30)
const polarBear1 = new PolarBear(100, 566, 400, 30)
// const whale1 = new Whale(100, 500, 500, 350)

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dolphin1.dolphin()
    dolphin2.dolphin()
    polarBear1.polarBear()
    // whale1.whale()
    penguin.penguin()
    float()
    requestAnimationFrame(draw)
}

draw();

