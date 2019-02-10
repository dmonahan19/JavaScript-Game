class PolarBear {

    constructor(polarBearX, polarBearY, polarBearWidth, polarBearHeight) {
        this.img = new Image();
        this.img.src = "assets/polarbear1.png"
        this.polarBearX = polarBearX;
        this.polarBearY = polarBearY;
        this.polarBearWidth = polarBearWidth;
        this.polarBearHeight = polarBearHeight;
    }

    drawPolarBear(ctx) {
        ctx.drawImage(this.img, 0, 10, 200, 95, this.polarBearX, this.polarBearY, this.polarBearWidth, this.polarBearHeight)
        this.movePolarBear()
    }

    movePolarBear() {
        if (this.polarBearX > 0 - this.polarBearWidth)  {
            this.polarBearX = this.polarBearX - 2;
        }
        else {
            this.polarBearX = canvas.width + 100
        }
    }


    // floatPolarBear() {
        

    //     if (this.polarBearX <= penguin.x + penguin.width &&
    //         this.polarBearX + this.polarBearWidth >= penguin.x &&
    //         this.polarBearY + this.polarBearHeight >= penguin.y &&
    //         this.polarBearY <= penguin.y + penguin.height) {
    //         if (penguin.x > 0) {
    //             penguin.x = penguin.x - 2
    //         }
    //     }

    //     else if(penguin.y < 600) {
    //         penguin.y = 650
    //     }
    // }

    polarBear() {
        this.drawPolarBear(ctx)
    }

}