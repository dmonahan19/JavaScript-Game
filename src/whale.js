
class Whale {
    constructor(img,srcY, srcX, width, height, posX, posY, animalWidth, animalHeight, movementSpeed, frameTicks = 4) {
        this.img= img;
        this.posX = posX;
        this.posY = posY;
        this.srcY = srcY;
        this.srcX = srcX;
        this.width = width;
        this.height = height;
        this.animalWidth = animalWidth;
        this.animalHeight = animalHeight;
        this.movementSpeed = movementSpeed;
        this.frameTicks = frameTicks;
        this.frameIndex = 0;
        this.tickCount = 0;  
        this.prevSpeed = this.movementSpeed;
    }

    drawWhale() {
        ctx.drawImage(this.img, this.srcX[this.frameIndex], this.srcY[this.frameIndex],
             this.width, this.height, this.posX, this.posY, this.animalWidth, this.animalHeight);
        this.posX += this.movementSpeed;
        this.tickCount += 1;
        if (this.tickCount === this.frameTicks) {
            this.tickCount = 0;
            this.frameIndex = (this.frameIndex + 1) % this.srcX.length;
        }
        if (this.posX > canvas.width + 100) {
            if (savePenguins === 1 && this.prevSpeed === this.movementSpeed) {
                this.movementSpeed += 2;
            }
            this.posX = -100;
        }
    }

}

