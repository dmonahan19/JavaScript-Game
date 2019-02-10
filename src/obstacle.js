
const penguin = new Penguin(0, 152, 35, 37, 300, 700, 35, 38)
const dolphin1 = new Dolphin(350, 620, 157, 30)
const dolphin2 = new Dolphin(40, 620, 157, 30)
const polarBear1 = new PolarBear(100, 576, 150, 30)
const polarBear2 = new PolarBear(400, 576, 150, 30)
const whale1 = new Whale(400, 532, 150, 30)
const whale2 = new Whale(100, 532, 150, 30)
const humbackwhale1 = new HumpBackWhale(0, 488, 150, 30)
const humbackwhale2 = new HumpBackWhale(350, 488, 150, 30)
const dolphin3 = new Dolphin(350, 444, 157, 30)
const dolphin4 = new Dolphin(40, 444, 157, 30)
const polarBear3 = new PolarBear(100, 405, 150, 30)
const polarBear4 = new PolarBear(400, 405, 150, 30)
const iceberg1 = new IceBerg(5, 365, 250, 30)
const iceberg2 = new IceBerg(275, 365, 250, 30)
const iceberg3 = new IceBerg(550, 365, 250, 30)

class Obstacle{
    

    float() {

        if (dolphin1.dolphinX <= penguin.x + penguin.width &&
            dolphin1.dolphinX + dolphin1.dolphinWidth >= penguin.x &&
            dolphin1.dolphinY + dolphin1.dolphinHeight >= penguin.y &&
            dolphin1.dolphinY <= penguin.y + penguin.height) {
            if (penguin.x < canvas.width - 30) {
                penguin.x = penguin.x + 2
            }
        }

        else if (dolphin2.dolphinX <= penguin.x + penguin.width &&
            dolphin2.dolphinX + dolphin2.dolphinWidth >= penguin.x &&
            dolphin2.dolphinY + dolphin2.dolphinHeight >= penguin.y &&
            dolphin2.dolphinY <= penguin.y + penguin.height) {
            if (penguin.x < canvas.width - 30) {
                penguin.x = penguin.x + 2
            }
        }
        else if (polarBear1.polarBearX <= penguin.x + penguin.width &&
            polarBear1.polarBearX + polarBear1.polarBearWidth >= penguin.x &&
            polarBear1.polarBearY + polarBear1.polarBearHeight >= penguin.y &&
            polarBear1.polarBearY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x - 2.5
            }
        }
        else if (polarBear2.polarBearX <= penguin.x + penguin.width &&
            polarBear2.polarBearX + polarBear2.polarBearWidth >= penguin.x &&
            polarBear2.polarBearY + polarBear2.polarBearHeight >= penguin.y &&
            polarBear2.polarBearY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x - 2.5
            }
        }
        else if (whale1.whaleX <= penguin.x + penguin.width &&
            whale1.whaleX + whale1.whaleWidth >= penguin.x &&
            whale1.whaleY + whale1.whaleHeight >= penguin.y &&
            whale1.whaleY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x + 2
            }
        }
        else if (whale2.whaleX <= penguin.x + penguin.width &&
            whale2.whaleX + whale2.whaleWidth >= penguin.x &&
            whale2.whaleY + whale2.whaleHeight >= penguin.y &&
            whale2.whaleY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x + 2
            }
        }
        else if (humbackwhale1.humpBackWhaleX <= penguin.x + penguin.width &&
            humbackwhale1.humpBackWhaleX + humbackwhale1.humpBackWhaleWidth >= penguin.x &&
            humbackwhale1.humpBackWhaleY + humbackwhale1.humpBackWhaleHeight >= penguin.y &&
            humbackwhale1.humpBackWhaleY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x - 2
            }
        }
        else if (humbackwhale2.humpBackWhaleX <= penguin.x + penguin.width &&
            humbackwhale2.humpBackWhaleX + humbackwhale2.humpBackWhaleWidth >= penguin.x &&
            humbackwhale2.humpBackWhaleY + humbackwhale2.humpBackWhaleHeight >= penguin.y &&
            humbackwhale2.humpBackWhaleY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x - 2
            }
        }
        else if (dolphin3.dolphinX <= penguin.x + penguin.width &&
            dolphin3.dolphinX + dolphin3.dolphinWidth >= penguin.x &&
            dolphin3.dolphinY + dolphin3.dolphinHeight >= penguin.y &&
            dolphin3.dolphinY <= penguin.y + penguin.height) {
            if (penguin.x < canvas.width - 30) {
                penguin.x = penguin.x + 2
            }
        }
        else if (dolphin4.dolphinX <= penguin.x + penguin.width &&
            dolphin4.dolphinX + dolphin4.dolphinWidth >= penguin.x &&
            dolphin4.dolphinY + dolphin4.dolphinHeight >= penguin.y &&
            dolphin4.dolphinY <= penguin.y + penguin.height) {
            if (penguin.x < canvas.width - 30) {
                penguin.x = penguin.x + 2
            }
        }

        else if (polarBear3.polarBearX <= penguin.x + penguin.width &&
            polarBear3.polarBearX + polarBear3.polarBearWidth >= penguin.x &&
            polarBear3.polarBearY + polarBear3.polarBearHeight >= penguin.y &&
            polarBear3.polarBearY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x - 2.5
            }
        }
        else if (polarBear4.polarBearX <= penguin.x + penguin.width &&
            polarBear4.polarBearX + polarBear4.polarBearWidth >= penguin.x &&
            polarBear4.polarBearY + polarBear4.polarBearHeight >= penguin.y &&
            polarBear4.polarBearY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x - 2.5
            }
        }
        else if (iceberg1.icebergX <= penguin.x + penguin.width &&
            iceberg1.icebergX + iceberg1.icebergWidth >= penguin.x &&
            iceberg1.icebergY + iceberg1.icebergHeight >= penguin.y &&
            iceberg1.icebergY <= penguin.y + penguin.height) {
            iceberg1.onIceBerg = true;
            penguin.y = 700
        }
        else if (iceberg2.icebergX <= penguin.x + penguin.width &&
            iceberg2.icebergX + iceberg2.icebergWidth >= penguin.x &&
            iceberg2.icebergY + iceberg2.icebergHeight >= penguin.y &&
            iceberg2.icebergY <= penguin.y + penguin.height) {
            iceberg2.onIceBerg = true;
            penguin.y = 700
        }
        else if (iceberg3.icebergX <= penguin.x + penguin.width &&
            iceberg3.icebergX + iceberg3.icebergWidth >= penguin.x &&
            iceberg3.icebergY + iceberg3.icebergHeight >= penguin.y &&
            iceberg3.icebergY <= penguin.y + penguin.height) {
            iceberg3.onIceBerg = true;
            penguin.y = 700
        }

        else if (penguin.y < 650 && penguin.y > 409) {
            penguin.y = 700
            livesLost += 1

        }

    }


    oniceberg() {
        const icebergs = [iceberg1, iceberg2, iceberg3]
        let character = new Image();
        character.src = "assets/penguin.png"
        for (let i = 0; i < icebergs.length; i++)
            if (icebergs[i].onIceBerg === true) {
                ctx.drawImage(character, 0, 5, 35, 37, (icebergs[i].icebergX + 100), (icebergs[i].icebergY - 10), 35, 38)
            }
    }   

    winner(){
        if (iceberg1.onIceBerg && iceberg2.onIceBerg && iceberg3.onIceBerg){
            ctx.fillstyle = "white";
            ctx.font = "30px Arial";
            ctx.fillText("You Won! ", (canvas.width / 2) - 60, 200)
            winner = true
            play = false
        }
    }


}