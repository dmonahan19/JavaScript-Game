let lives = 3;
let livesLost = 0;
let play = false;
let winner = false;
let time = 200;

class Game{
    // constructor(){
    //     this.lives = 3;
    //     this.livesLost = 0;
    // }

    lives(){
        if (lives - livesLost != 0){
            ctx.fillstyle = "white";
            ctx.font = "30px Arial";
            ctx.fillText("LIVES: " + (lives - livesLost), (canvas.width/2) -70, 200);
        }
    }

    gameOver(){
        if (lives - livesLost === 0 || time < 1){
            play = false;
            ctx.fillstyle = "white";
            ctx.font = "72px Arial";
            ctx.fillText("GAME OVER", (canvas.width / 2) - 200 , 250);
            setTimeout(() => {
                document.getElementById("gameOver").classList.remove("off");
                document.getElementById("gameOver").classList.add("on");
                document.getElementById("game").classList.remove("on");
                document.getElementById("game").classList.add("off");
                document.getElementById("foot").classList.remove("footer");
                document.getElementById("foot").classList.add("footer1");
            }, 2000);
        }
    }


    timer() {
        if (time >= 0 && play === true) {
            ctx.fillStyle = "#0fb9fc";
            ctx.fillText("TIMER:", 210, 250);
            ctx.fillRect(320, 230, time, 20);
            ctx.fillText(Math.floor(time), time+325, 250);
            time = time - 0.1;
        }
    }


}