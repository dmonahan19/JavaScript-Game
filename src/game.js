let lives = 3
let livesLost = 0
let play = true 
let winner = false

class Game{
    // constructor(){
    //     this.lives = 3;
    //     this.livesLost = 0;
    // }

    lives(){
        if (lives - livesLost != 0){
            ctx.fillstyle = "white";
            ctx.font = "30px Arial";
            ctx.fillText("LIVES: " + (lives - livesLost), (canvas.width/2) -70, 200)
        }
    }

    gameOver(){
        if (lives - livesLost === 0){
            play = false
            ctx.fillstyle = "white";
            ctx.font = "72px Arial";
            ctx.fillText("GAME OVER", (canvas.width / 2) - 200 , 200)
        }
    }




}