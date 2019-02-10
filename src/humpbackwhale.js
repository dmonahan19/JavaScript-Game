class HumpBackWhale {

    constructor(humpBackWhaleX, humpBackWhaleY, humpBackWhaleWidth, humpBackWhaleHeight) {
        this.img = new Image();
        this.img.src = "assets/humpbackwhale.png"
        this.humpBackWhaleX = humpBackWhaleX;
        this.humpBackWhaleY = humpBackWhaleY;
        this.humpBackWhaleWidth = humpBackWhaleWidth;
        this.humpBackWhaleHeight = humpBackWhaleHeight;
    }

    drawHumpBackWhale(ctx) {
        ctx.drawImage(this.img, 0, 10, 300, 150, this.humpBackWhaleX, this.humpBackWhaleY, this.humpBackWhaleWidth, this.humpBackWhaleHeight)
        this.movehumpBackWhale()
    }

    movehumpBackWhale() {
        if (this.humpBackWhaleX > 0 - this.humpBackWhaleWidth) {
            this.humpBackWhaleX = this.humpBackWhaleX - 2;
        }
        else {
            this.humpBackWhaleX = canvas.width + 100
        }
    }


    humpBackWhale() {
        this.drawHumpBackWhale(ctx)
    }

}