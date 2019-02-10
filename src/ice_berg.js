
class IceBerg {

    constructor(icebergX, icebergY, icebergWidth, icebergHeight) {
        this.img = new Image();
        this.img.src = "assets/iceberg.png"
        this.icebergX = icebergX;
        this.icebergY = icebergY;
        this.icebergWidth = icebergWidth;
        this.icebergHeight = icebergHeight;
        this.onIceberg = false
    }

    drawIceberg(ctx) {
        ctx.drawImage(this.img, 0, 0, 700, 150, this.icebergX, this.icebergY, this.icebergWidth, this.icebergHeight)
    }
   
}