let x = 300;
let y = 230;

let src;
let srcY;

let sheetWidth = 35
let sheetHeight = 150

let cols = 1;
let rows = 4;

let frameCount = 1

let width = sheetWidth / cols;
let height = sheetHeight / rows;

let currentFrame = 4

srcX = 0;
srcY = currentFrame * height;

let canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 700;
let ctx = canvas.getContext('2d')


let character = new Image();
character.src = "assets/penguin.png"

function drawImage() {
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height)

}

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

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
    let up = true
    let down = true
    let right = true
    let left = true
}

function movePenguin() {
    if (upPressed == true && up == true && y > 350) {
        y = y - 44;
        up = false;
        srcY = 147;
    }
    if (upPressed == false) {
        up = true;
    }
    if (downPressed == true && down == true && y + height < canvas.height-35) {
        y = y + 44;
        down = false;
        srcY = 5;
    }
    if (downPressed == false) {
        down = true;
    }

    if (rightPressed == true && right == true && x + width < canvas.width-25 ) {
        x = x + 44;
        right = false;
        srcY = 101
    }
    if (rightPressed == false) {
        right = true;
    }
    if (leftPressed == true && left == true && x > 20) {
        x = x - 44;
        left = false;
        srcY = 57
    }
    if (leftPressed == false) {
        left = true;
    }

}

// Starting opstacles

let dolphin = new Image();
dolphin.src = "assets/dolphin.png"
let dolphinX = 100;
function drawDolphin() {
    ctx.drawImage(dolphin, 0, 3, 157, 55, dolphinX, 550, 157, 55)
    if (dolphinX < canvas.width + 100) {
        dolphinX = dolphinX + 5;
    }
    else {
        dolphinX = 100
    }
       
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawImage();
    movePenguin();
    drawDolphin();
    requestAnimationFrame(draw);
}

draw();

