var canWidth = 800;
var canHeight = 500;

var x = 300;
var y = 230;

var srcX;
var srcY;

var sheetWidth = 35
var sheetHeight = 176

var cols = 1;
var rows = 4;

var frameCount = 1

var width = sheetWidth / cols;
var height = sheetHeight / rows;

var currentFrame = 0

var canvas = document.getElementById('canvas');
canvas.width = canWidth;
canvas.height = canHeight;
var ctx = canvas.getContext('2d')

function updateFrame(){
    // currentFrame = ++currentFrame % rows;

    srcX = 0;
    srcY = currentFrame * height; 

}

var character = new Image();
character.src = "assets/penguin.png"

function drawImage() {
    updateFrame();
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height)
}

setInterval(function () {
    drawImage();
}, 1000);

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

function keyDownHandler(e) {
    if (e.keyCode == 39) { rightPressed = true; }
    if (e.keyCode == 37) { rightPressed = true; }
    if (e.keyCode == 38) { rightPressed = true; }
    if (e.keyCode == 40) { rightPressed = true; }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) { rightPressed = false; }
    if (e.keyCode == 37) { rightPressed = false; }
    if (e.keyCode == 38) { rightPressed = false; }
    if (e.keyCode == 40) { rightPressed = false; }
    let up = true;
    let down = true;
    let right = true;
    let left = true;
}

document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyUpHandler", keyUpHandler, false)




