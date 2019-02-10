let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let up = true
let down = true
let right = true
let left = true

let canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 750;
let ctx = canvas.getContext('2d')
let snow = new Image();
snow.src = "assets/snow3.png"


class Penguin{
    constructor(srcX,srcY, width, height, x, y) {
        this.img = new Image();
        this.img.src = "assets/penguin.png"
        this.x = x;
        this.y = y;
        this.width = width
        this.height = height
        this.srcX = srcX
        this.srcY = srcY

    }


    drawPenguin(ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.x, this.y, 35, 38)
        this.movePenguin()
    }
    drawPenguin1(ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.x, this.y, 35, 38)
    }
   
    drawSnow() {
        ctx.drawImage(snow, 150, 75 ,300, 200, 0, 600, 800, 200)
    }

     movePenguin() {
        if (upPressed == true && up == true && this.y > 350) {
            this.y = this.y - 44;
            up = false;
            this.srcY = 147;
        }
        if (upPressed == false) {
            up = true;
        }
        if (downPressed == true && down == true && this.y + this.height < canvas.height - 35) {
            this.y = this.y + 44;
            down = false;
            this.srcY = 5;
        }
        if (downPressed == false) {
            down = true;
        }

        if (rightPressed == true && right == true && this.x + this.width < canvas.width - 25) {
            this.x = this.x + 44;
            right = false;
            this.srcY = 101
        }
        if (rightPressed == false) {
            right = true;
        }
        if (leftPressed == true && left == true && this.x > 20) {
            this.x = this.x - 44;
            left = false;
            this.srcY = 57
        }
        if (leftPressed == false) {
            left = true;
        }

    }

    penguin(){
      this.drawSnow();
      this.drawPenguin(ctx)
    }
}

// const penguin = new Penguin(0, 152, 35, 38, 300, 230, 38, 35)

// function draw(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     penguin.draw(ctx)
//     requestAnimationFrame(draw);
// }

// draw();