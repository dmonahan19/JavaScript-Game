// var canvas = document.getElementById('canvas')
// var ctx = canvas.getContext('2d')

// var penguin = new Image();
// penguin.loaded = false;
// penguin.onload = function () {
//     this.loaded = true;
// }
// penguin.src = "assets/penguins.png"



// function drawpenguin(){
//     ctx.drawImage(penguin, sx, sy, swidth, sheight, dx, dy, dwidth, dheight)
//     var sx = 0;
//     var sy = 0;
//     var swidth = 40;
//     var sheight = 40;
//     var dx = 50;
//     var dy = 444;
//     var dwidth = 30;
//     var dheight = 30;

// }

// function draw(){
//     drawpenguin();
//     requestAnimationFrame(draw);

// }

// draw();

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

function drawImage(){
    updateFrame();
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height)
}

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;


setInterval(function(){
    drawImage();
}, 1000);
