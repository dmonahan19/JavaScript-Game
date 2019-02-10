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
        ctx.drawImage(this.img, 0, 10, 400, 350, this.whaleX, this.whaleY, this.whaleWidth, this.whaleHeight)
        this.move_whale()
    }

    move_whale() {
        if (this.whaleX < canvas.width + 100) {
            this.whaleX = this.whaleX + 2;
        }
        else {
            this.whaleX = -100
        }
    }


    whale() {
        this.drawwhale(ctx)
    }

}