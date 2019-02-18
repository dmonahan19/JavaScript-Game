

class Object {
    constructor(img,srcY, srcX, width, height, posX, posY, animalWidth, animalHeight, movementSpeed) {
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
        this.prevSpeed = this.movementSpeed;
    }

    drawObject() {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.animalWidth, this.animalHeight);
        if (this.movementSpeed > 0) {
            if (this.posX < canvas.width + 100) {
                if(savePenguins === 1 && this.prevSpeed === this.movementSpeed){
                    this.movementSpeed += 1;
                }
                if (savePenguins === 2 && this.prevSpeed + 1 === this.movementSpeed) {
                    this.movementSpeed += 10;
                }
                this.posX = this.posX + this.movementSpeed;
            }
            else{
                this.posX = -100;
            }
        }
        else{
            if (this.posX > 0 - this.animalWidth) {
                this.posX = this.posX + this.movementSpeed;
            }
            else {
                this.posX = canvas.width + 100;
            }
        }
    }

}