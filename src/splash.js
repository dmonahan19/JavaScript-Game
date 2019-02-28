
class Splash {
    constructor(img, srcY, srcX, width, height, posX, posY, animalWidth, animalHeight, movementSpeed, frameTicks = 4) {
        this.img = img;
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
    }

    handleDying() {
        ctx.drawImage(splash, [28, 44, 53, 34, 34, 34, 15, 15], [27, 29, 35, 93, 53, 54, 60, 12], 29, 40, penguin.posX, penguin.posY, 29, 40);
        this.tickCount += 1;
        let count = 0;
        if (this.tickCount <= count) {
            count += 1;
        }
    }


}
