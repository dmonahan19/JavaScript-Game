


// let x = 300;
// let y = 230;

// let srcX;
// let srcY;

// let sheetWidth = 35
// let sheetHeight = 150

// let cols = 1;
// let rows = 4;

// let frameCount = 1

// let width = sheetWidth / cols;
// let height = sheetHeight / rows;

// let currentFrame = 4

// srcX = 0;
// srcY = currentFrame * height;


// let character = new Image();
// character.src = "assets/penguin.png"

// function drawImage() {
//     ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height)

// }

// let rightPressed = false;
// let leftPressed = false;
// let upPressed = false;
// let downPressed = false;

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

// function movePenguin() {
//     if (upPressed == true && up == true && y > 350) {
//         y = y - 44;
//         up = false;
//         srcY = 147;
//     }
//     if (upPressed == false) {
//         up = true;
//     }
//     if (downPressed == true && down == true && y + height < canvas.height-35) {
//         y = y + 44;
//         down = false;
//         srcY = 5;
//     }
//     if (downPressed == false) {
//         down = true;
//     }

//     if (rightPressed == true && right == true && x + width < canvas.width-25 ) {
//         x = x + 44;
//         right = false;
//         srcY = 101
//     }
//     if (rightPressed == false) {
//         right = true;
//     }
//     if (leftPressed == true && left == true && x > 20) {
//         x = x - 44;
//         left = false;
//         srcY = 57
//     }
//     if (leftPressed == false) {
//         left = true;
//     }

// }

// Starting opstacles

// let dolphin = new Image();
// dolphin.src = "assets/dolphin.png"
// let dolphinWidth = 157
// let dolphinHeight = 45
// let dolphinX1 = 500;
// let dolphinY1 = 550
// let dolphinX2 = 250
// let dolphinY2 = 550
// let dolphinX3 = 0
// let dolphinY3 = 550
// function drawDolphin() {
//     let dolphinX = [dolphinX1, dolphinX2, dolphinX3]
//     let dolphinY = [dolphinY1, dolphinY2, dolphinY3]
//     for (i = 0; i < dolphinX.length; i++){
//         ctx.drawImage(dolphin, 0, 3, 157, 55, dolphinX[i], dolphinY[i], dolphinWidth, dolphinHeight)
//     }

//     if (dolphinX1 < canvas.width + 100) {
//         dolphinX1 = dolphinX1 + 2;
//     }
//     else {
//         dolphinX1 = -100
//     }
//     if (dolphinX2 < canvas.width + 100) {
//         dolphinX2 = dolphinX2 + 2;
//     }
//     else {
//         dolphinX2 = -100
//     }
//     if (dolphinX3 < canvas.width + 100) {
//         dolphinX3 = dolphinX3 + 2;
//     }
//     else {
//         dolphinX3 = -100
//     }

// }



// dolphin x = 200
// dolphin width = 157
// dolphin height = 45
// dolphin y = 550

// penguin 
// x = 250 
// y = 580
// width = 35
// height = 38

// where I start collision information

// function float() {
//     if (dolphinX1 <= x + width &&
//          dolphinX1 + dolphinWidth >= x &&
//          dolphinY1 + dolphinHeight >= y &&
//          dolphinY1 <= y + height){
//              if(x < canvas.width-30){
//                 x = x + 2
//              }
//     }
//     else if (dolphinX2 <= x + width && 
//                 dolphinX2 + dolphinWidth >= x &&
//         dolphinY2 + dolphinHeight >= y &&
//                 dolphinY2 <= y + height) {
//                     if(x < canvas.width - 30){
//                         x = x + 2
//                     }
//                 }
//     else if (dolphinX3 <= x + width &&
//         dolphinX3 + dolphinWidth >= x &&
//         dolphinY3 + dolphinHeight >= y &&
//         dolphinY3 <= y + height) {
//         if (x < canvas.width - 30) {
//             x = x + 2
//         }
//     }
//     else{
//         y = 600
//     }


// }

// function createDolphin() {
//     dolphin1 = new Dolphin(100, 550, 157, 45)
//     dolphin1.moveDolphin()
// }


const dolphin1 = new Dolphin(100, 550, 157, 45)

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.dolphin()
    // movePenguin();
    // createDolphin();
    // drawDolphin();
    // drawImage();
    // float();
    requestAnimationFrame(draw);
}

draw();
