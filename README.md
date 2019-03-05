# Penguin

## Background

[Live Link](http://dmonahan19.com//JavaScript-Game/)

<img src='http://i64.tinypic.com/2draqg9.jpg'>

Penguin, a frogger clone, is set in Antartica where a penguin has to safely make its way to the igloos on the other side of the ocean. The penguin can savely cross the ocean by jumping onto sea animals. The player starts with 3 lives and if the penguin hits the water the player loses a life.

## Instructions

Press ENTER to start and use the arrow keys to move the penguin onto the sea animals.

## Technology
- HTML5 Canvas
- CSS
- JavaScript


## Features

All features were implemented using only vanilla JavaScript and HTML5 Canvas.

### Floating Detection

Floating occurs when the two objects (the penguin and a sea animal) intersect. Objects were represented as rectangles to calculate their entire areas. Floating detection is used to detect if the penguin lands on a sea animal. If the penguin lands on a sea animal then the penguins x axis on the canvas is added to the sea animals speed so that it moves with the sea animal. If the penguin was not detected on a sea animal then that meant it landed in the water and the player would lose a life and also a splash of water and sound effect would occur.

<img src='http://i66.tinypic.com/e5jt05.png'>

### Detecting a Penguin landed on an Iceberg

There are three icebergs the penguin has to land on to win the game. When the penguin lands on an iceberg the instance variable onIceBerg changes from false to true. I made an array to iterate through all three objects of the iceberg class to check if any of them have an onIceBerg value of true. If it does then using canvas built in drawImage function I create a new penguin image to stand on top of the iceberg. I also add 1 to the savePenguin varible. This is because when the savePenguin variable is equal to 3 then the player has won the game.

<img src='http://i66.tinypic.com/2a9o6sh.jpg'>

### Animation

Sprite animation was achieved by having an arrays of values with sprite dimensions taken from a sprite sheet. Each time the game loop completes a cycle, all the whale class added a tick counter. The sprite changes to the next frame when the tick counter reaches a certain value, which is defined as frame animation speed in the constructor of a the Whale class.







