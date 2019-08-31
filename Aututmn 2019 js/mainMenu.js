class MainMenu
{
    constructor()
    {
        this.active = true;
    }

    startGame()
    {
        this.active = false;
    }

    returnToMenu()
    {
        this.active = true;
    }

    getActive()
    {
        return this.active;
    }

    screenMenu(canvas)
    {
        canvas.save();
		canvas.fillStyle= "#FFFFFF";
		canvas.font = "italic 40pt Calibri";
        canvas.textBaseLine = "top";
        canvas.fillText("Welcome to the main Menu", 100, 100);
        canvas.fillText("Press Space to start the game", 100, 200);
        canvas.fillText("Press Enter to change player Colour", 100, 300);
		canvas.restore();
    }
}