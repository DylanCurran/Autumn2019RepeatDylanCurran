class EndMenu
{
    constructor()
    {
        this.active = false;
    }

    endGame()
    {
        this.active = true;
    }

    returnToMenu()
    {
        this.active = false;
    }

    getActive()
    {
        return this.active;
    }

    screenMenuEnd(canvas)
    {
        canvas.save();
		canvas.fillStyle= "#FFFFFF";
		canvas.font = "italic 40pt Calibri";
        canvas.textBaseLine = "top";
        canvas.fillText("Game Over", 100, 100);
        canvas.fillText("Press Space to restart the game", 100, 200);
        canvas.fillText("Press Enter to return to main menu", 100, 300);
		canvas.restore();
    }

    tutorialEnd(canvas)
    {
        canvas.save();
		canvas.fillStyle= "#FFFFFF";
		canvas.font = "italic 40pt Calibri";
        canvas.textBaseLine = "top";
        canvas.fillText("Tutorial Over", 100, 100);
        canvas.fillText("Press Space to start the game", 100, 200);
        canvas.fillText("Press Enter to return to main menu", 100, 300);
		canvas.restore();
    }
}