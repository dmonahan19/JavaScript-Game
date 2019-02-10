class Obstacles{
    
    static float() {

    if (dolphin1.dolphinX <= penguin.x + penguin.width &&
        dolphin1.dolphinX + dolphin1.dolphinWidth >= penguin.x &&
        dolphin1.dolphinY + dolphin1.dolphinHeight >= penguin.y &&
        dolphin1.dolphinY <= penguin.y + penguin.height) {
        if (penguin.x < canvas.width - 30) {
            penguin.x = penguin.x + 2
        }
    }
    else if (polarBear1.polarBearX <= penguin.x + penguin.width &&
        polarBear1.polarBearX + polarBear1.polarBearWidth >= penguin.x &&
        polarBear1.polarBearY + polarBear1.polarBearHeight >= penguin.y &&
        polarBear1.polarBearY <= penguin.y + penguin.height) {
        if (penguin.x > 0) {
            penguin.x = penguin.x - 2
        }
    }
    else if (penguin.y < 600) {
        penguin.y = 650

    }
}
}