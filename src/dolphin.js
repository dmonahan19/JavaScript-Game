

class Dolphin{

    constructor(dolphinX,dolphinY,dolphinWidth,dolphinHeight){
        this.img = new Image();
        this.img.src = "assets/dolphin.png"
        this.dolphinX = dolphinX; 
        this.dolphinY = dolphinY;
        this.dolphinWidth = dolphinWidth;
        this.dolphinHeight = dolphinHeight;
    }

    drawDolphin(ctx) {
            ctx.drawImage(this.img, 0, 3, 157, 55, this.dolphinX, this.dolphinY, this.dolphinWidth, this.dolphinHeight)
            this.move_dolphin()
            this.float()

    }

    move_dolphin(){
        if (this.dolphinX < canvas.width + 100) {
            this.dolphinX = this.dolphinX + 2;
        }
        else {
            this.dolphinX = -100
        }
    }


    float() {
            if (this.dolphinX <= penguin.x + penguin.width &&
                this.dolphinX + this.dolphinWidth >= penguin.x &&
                this.dolphinY + this.dolphinHeight >= penguin.y &&
                this.dolphinY <= penguin.y + penguin.height) {
                if (penguin.x < canvas.width - 30) {
                    penguin.x = penguin.x + 2
                }
            }
            else if(penguin.y < 600) {
                penguin.y = 650
            }
    }
    dolphin() {
        this.drawDolphin(ctx)
    }

}





// const dolphin1 = new Dolphin(100, 550, 157, 45)

// dolphin(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     dolphin1.drawDolphin(ctx)
//     requestAnimationFrame(dolphin);
// }

// dolphin();
