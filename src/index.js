

var canWidth = 800;
var canHeight = 500;

var x = 300;
var y = 230;

var srcX;
var srcY;

var sheetWidth = 35
var sheetHeight = 150

var cols = 1;
var rows = 4;

var frameCount = 1

var width = sheetWidth / cols;
var height = sheetHeight / rows;

var currentFrame = 4

srcX = 0;
srcY = currentFrame * height; 

var canvas = document.getElementById('canvas');
canvas.width = canWidth;
canvas.height = canHeight;
var ctx = canvas.getContext('2d')

// function updateFrame(){
//     // currentFrame = ++currentFrame % rows;

//     srcX = 0;
//     srcY = currentFrame * height; 

// }

var character = new Image();
character.src = "assets/penguin.png"

function drawImage(){
    // updateFrame();
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height)
}

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false )

function keyDownHandler(e){
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

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawImage()

    if (upPressed==true && up==true){
        y = y - 44;
        up = false;
    }
    if (upPressed == false) {
        up = true;
    }
    if (downPressed == true && down == true) {
        y = y + 44;
        down = false;
    }
    if (downPressed == false) {
        down = true;
    }

    if (rightPressed == true && right == true) {
        x = x + 44;
        right = false;
    }
    if (rightPressed == false) {
        right = true;
    }
    if (leftPressed == true && left == true) {
        x = x - 44;
        left = false;
    }
    if (leftPressed == false) {
        left = true;
    }


    requestAnimationFrame(draw)
}

draw();
