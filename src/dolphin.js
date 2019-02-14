class Dolphin {

    constructor(dolphinX, dolphinY, dolphinWidth, dolphinHeight) {
        this.img = new Image();
        this.img.src = "assets/dolphin.png"
        this.dolphinX = dolphinX;
        this.dolphinY = dolphinY;
        this.dolphinWidth = dolphinWidth;
        this.dolphinHeight = dolphinHeight;
    }

    drawDolphin(ctx) {
        ctx.drawImage(this.img, 0, 0, 170, 70, this.dolphinX, this.dolphinY, this.dolphinWidth, this.dolphinHeight)
        this.move_dolphin()

    }

    move_dolphin() {
        if (this.dolphinX < canvas.width + 100) {
            this.dolphinX = this.dolphinX + 2;
        }
        else {
            this.dolphinX = -100;
        }
    }


    dolphin() {
        this.drawDolphin(ctx)
    }

}
