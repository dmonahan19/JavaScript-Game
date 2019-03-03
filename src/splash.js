let pos;
class Splash {
    constructor(img, srcY, srcX, width, height, animalWidth, animalHeight, frameTicks) {
        this.img = img;
        this.posX = penguin.x;
        this.posY = penguin.y;
        this.srcY = srcY;
        this.srcX = srcX;
        this.width = width;
        this.height = height;
        this.animalWidth = animalWidth;
        this.animalHeight = animalHeight;
        this.frameTicks = frameTicks;
        this.frameIndex = 0;
        this.tickCount = 0;
    }

    drawSplash() {
        ctx.drawImage(this.img, this.srcX[this.frameIndex], this.srcY[this.frameIndex], this.width, this.height, penguin.x, pos, this.animalWidth, this.animalHeight);
            this.tickCount += 1;
            if (this.tickCount === this.frameTicks) {
                this.tickCount = 0;
                this.frameIndex = (this.frameIndex + 1) % this.srcX.length;
            }
        // if (this.tickCount === this.frameTicks) {
        //     this.tickCount = 0;
        //     this.frameIndex = (this.frameIndex + 1) % this.srcX.length;
        // }
    }
}