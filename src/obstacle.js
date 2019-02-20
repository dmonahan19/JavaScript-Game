let save = 0;
let savePenguins = 0;

class Obstacle{
    

    float() {

        if (dolphin1.posX <= penguin.x + penguin.width &&
            dolphin1.posX + dolphin1.animalWidth >= penguin.x &&
            dolphin1.posY + dolphin1.animalHeight >= penguin.y &&
            dolphin1.posY <= penguin.y + penguin.height) {
            if (penguin.x < canvas.width - 30) {
                penguin.x = penguin.x + dolphin1.movementSpeed;
            }
        }
        else if (dolphin2.posX <= penguin.x + penguin.width &&
            dolphin2.posX + dolphin2.animalWidth >= penguin.x &&
            dolphin2.posY + dolphin2.animalHeight >= penguin.y &&
            dolphin2.posY <= penguin.y + penguin.height) {
            if (penguin.x < canvas.width - 30) {
                penguin.x = penguin.x + dolphin1.movementSpeed;
            }
        }
        else if (polarBear1.posX <= penguin.x + penguin.width &&
            polarBear1.posX + polarBear1.animalWidth >= penguin.x &&
            polarBear1.posY + polarBear1.animalHeight >= penguin.y &&
            polarBear1.posY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x + polarBear1.movementSpeed;
            }
        }
        else if (polarBear2.posX <= penguin.x + penguin.width &&
            polarBear2.posX + polarBear2.animalWidth >= penguin.x &&
            polarBear2.posY + polarBear2.animalHeight >= penguin.y &&
            polarBear2.posY <= penguin.y + penguin.height) {
           if (penguin.x > 0) {
                penguin.x = penguin.x + polarBear2.movementSpeed;
            }
        }
        else if (whale1.posX <= penguin.x + penguin.width &&
            whale1.posX + whale1.animalWidth >= penguin.x &&
            whale1.posY + whale1.animalHeight >= penguin.y &&
            whale1.posY <= penguin.y + penguin.height) {
            if (penguin.x < canvas.width - 30) {
                penguin.x = penguin.x + whale1.movementSpeed;
            }
        }
        else if (whale2.posX <= penguin.x + penguin.width &&
            whale2.posX + whale2.animalWidth >= penguin.x &&
            whale2.posY + whale2.animalHeight >= penguin.y &&
            whale2.posY <= penguin.y + penguin.height) {
            if (penguin.x < canvas.width - 30) {
                penguin.x = penguin.x + whale1.movementSpeed;
            }
        }
        else if (humpbackwhale1.posX <= penguin.x + penguin.width &&
            humpbackwhale1.posX + humpbackwhale1.animalWidth >= penguin.x &&
            humpbackwhale1.posY + humpbackwhale1.animalHeight >= penguin.y &&
            humpbackwhale1.posY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x + humpbackwhale1.movementSpeed;
            }
        }
        else if (humpbackwhale2.posX <= penguin.x + penguin.width &&
            humpbackwhale2.posX + humpbackwhale2.animalWidth >= penguin.x &&
            humpbackwhale2.posY + humpbackwhale2.animalHeight >= penguin.y &&
            humpbackwhale2.posY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x + humpbackwhale2.movementSpeed;
            }
        }
        else if (dolphin3.posX <= penguin.x + penguin.width &&
            dolphin3.posX + dolphin3.animalWidth >= penguin.x &&
            dolphin3.posY + dolphin3.animalHeight >= penguin.y &&
            dolphin3.posY <= penguin.y + penguin.height) {
            if (penguin.x < canvas.width - 30) {
                penguin.x = penguin.x + dolphin3.movementSpeed;
            }
        }
        else if (dolphin4.posX <= penguin.x + penguin.width &&
            dolphin4.posX + dolphin4.animalWidth >= penguin.x &&
            dolphin4.posY + dolphin4.animalHeight >= penguin.y &&
            dolphin4.posY <= penguin.y + penguin.height) {
            if (penguin.x < canvas.width - 30) {
                penguin.x = penguin.x + dolphin4.movementSpeed;
            }
        }

        else if (polarBear3.posX <= penguin.x + penguin.width &&
            polarBear3.posX + polarBear3.animalWidth >= penguin.x &&
            polarBear3.posY + polarBear3.animalHeight >= penguin.y &&
            polarBear3.posY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x + polarBear3.movementSpeed;
            }
        }
        else if (polarBear4.posX <= penguin.x + penguin.width &&
            polarBear4.posX + polarBear4.animalWidth >= penguin.x &&
            polarBear4.posY + polarBear4.animalHeight >= penguin.y &&
            polarBear4.posY <= penguin.y + penguin.height) {
            if (penguin.x > 0) {
                penguin.x = penguin.x + polarBear4.movementSpeed;
            }
        }
        else if (iceberg1.icebergX <= penguin.x + penguin.width &&
            iceberg1.icebergX + iceberg1.icebergWidth >= penguin.x &&
            iceberg1.icebergY + iceberg1.icebergHeight >= penguin.y &&
            iceberg1.icebergY <= penguin.y + penguin.height) {
            iceberg1.onIceBerg = true;
            penguin.y = 700;
        }
        else if (iceberg2.icebergX <= penguin.x + penguin.width &&
            iceberg2.icebergX + iceberg2.icebergWidth >= penguin.x &&
            iceberg2.icebergY + iceberg2.icebergHeight >= penguin.y &&
            iceberg2.icebergY <= penguin.y + penguin.height) {
            iceberg2.onIceBerg = true;
            penguin.y = 700;
        }
        else if (iceberg3.icebergX <= penguin.x + penguin.width &&
            iceberg3.icebergX + iceberg3.icebergWidth >= penguin.x &&
            iceberg3.icebergY + iceberg3.icebergHeight >= penguin.y &&
            iceberg3.icebergY <= penguin.y + penguin.height) {
            iceberg3.onIceBerg = true;
            penguin.y = 700;
        }

        else if (penguin.y < 650 && penguin.y > 409) {
            penguin.y = 700;
            livesLost += 1;

        }

    }


    oniceberg() {
        let icebergs = [iceberg1, iceberg2, iceberg3];
        let character = new Image();
        character.src = "assets/penguin.png";
        for (let i = 0; i < icebergs.length; i++)
            if (icebergs[i].onIceBerg === true) {
                ctx.drawImage(character, 0, 5, 35, 37, (icebergs[i].icebergX + 100), (icebergs[i].icebergY - 10), 35, 38);
                if(savePenguins === save){
                    savePenguins += 1;
                }
            }
    }   

    winner(){
        if (iceberg1.onIceBerg && iceberg2.onIceBerg && iceberg3.onIceBerg){
            ctx.fillstyle = "white";
            ctx.font = "30px Arial";
            ctx.fillText("You Won! ", (canvas.width / 2) - 60, 200)
            winner = true;
            play = false;
            setTimeout(() => {
                document.getElementById("gameOver").classList.remove("off");
                document.getElementById("gameOver").classList.add("on");
                document.getElementById("game").classList.remove("on");
                document.getElementById("game").classList.add("off");
            }, 2000);
        }
    }


}