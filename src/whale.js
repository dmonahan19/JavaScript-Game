class Whale {

    constructor(whaleX, whaleY, whaleWidth, whaleHeight) {
        this.img = new Image();
        this.img.src = "assets/whale.png"
        this.whaleX = whaleX;
        this.whaleY = whaleY;
        this.whaleWidth = whaleWidth;
        this.whaleHeight = whaleHeight;
    }

    drawwhale(ctx) {
        ctx.drawImage(this.img, 0, 10, 500, 350, this.whaleX, this.whaleY, this.whaleWidth, this.whaleHeight)
        this.move_whale()
        this.floatwhale()
    }

    move_whale() {
        if (this.whaleX > 0 - this.whaleWidth) {
            this.whaleX = this.whaleX - 2;
        }
        else {
            this.whaleX = canvas.width + 100
        }
    }


    floatwhale() {


        if (this.whaleX <= penguin.x + penguin.width &&
            this.whaleX + this.whaleWidth >= penguin.x &&
            this.whaleY + this.whaleHeight >= penguin.y &&
            this.whaleY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x - 2
            }
        }
        else {
            penguin.y = 600
        }
    }

    whale() {
        this.drawwhale(ctx)
    }

}