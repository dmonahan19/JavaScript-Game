// class Whale {


    

//     constructor(srcX, srcY,  whaleX, whaleY, whaleWidth, whaleHeight, frameTicks = 4) {
//         this.img = new Image();
//         this.img.src = "assets/whale-sprite.png"
//         this.srcX = srcX
//         this.srcY = srcY
//         this.whaleX = whaleX;
//         this.whaleY = whaleY;
//         this.whaleWidth = whaleWidth;
//         this.whaleHeight = whaleHeight;
//         this.frameTicks = frameTicks

//         this.frameIndex = 0
//         this.tickCount = 0
        
//     }

//     // const whale1 = new Whale([11, 100, 201, 293, 385, 481], [95, 98, 97, 95, 96, 97], 400, 532, 150, 30)
//     // const whale2 = new Whale([11, 100, 201, 293, 385, 481], [95, 98, 97, 95, 96, 97], 100, 532, 150, 30)

//     drawwhale(ctx) {
//         ctx.drawImage(this.img, this.srcX[this.frameIndex], this.srcY[this.frameIndex], this.whaleX, this.whaleY, this.whaleWidth, this.whaleHeight)
//         this.move_whale()
//     }

//     move_whale() {
//         if (this.whaleX < canvas.width + 100) {
//             this.whaleX = this.whaleX + 2;
//             this.tickCount +=1
//             if(this.tickCount === this.frameTicks){
//                 this.tickCount = 0
//                 this.frameIndex = (this.frameIndex + 1) % this.srcX.length
//             }

//         }
//         else {
//             this.whaleX = -100
//         }
//     }


//     whale() {
//         this.drawwhale(ctx)
//     }

// }

class Whale {
    constructor(srcY, srcX, width, height, posX, posY, animalWidth, animalHeight, movementSpeed, frameTicks = 4) {
        this.img= new Image();
        this.img.src= './assets/whale-sprite.png';
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

    drawWhale() {
        ctx.drawImage(this.img, this.srcX[this.frameIndex], this.srcY[this.frameIndex], this.width, this.height, this.posX, this.posY, this.animalWidth, this.animalHeight);
        this.posX += this.movementSpeed;
        this.tickCount += 1;
        if (this.tickCount === this.frameTicks) {
            this.tickCount = 0;
            this.frameIndex = (this.frameIndex + 1) % this.srcX.length;
        }
        if (this.posX > canvas.width + 100) {
            this.posX = -100;
        }

    }

}

