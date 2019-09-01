class Hud
{
    constructor()
    {

    }

    HUDText(canvas,count,lives, bool)
	{
		canvas.save();
		canvas.fillStyle= "#FFFF00";
		canvas.font = "italic 40pt Calibri";
        canvas.textBaseLine = "top";
        if(!bool)
        {
        canvas.fillText("Bananas Collected: " + count + "/3", 300, 350);
        canvas.fillText("Lives left: " + lives + "/3", 300,300);
        }
        else
        {
            canvas.font = "italic 30pt Calibri";
            canvas.fillText("Move player with arrow keys", 300, 250);
            canvas.fillText("Collect all Bananas", 300, 300);
            canvas.fillText("Then Reach the goal ", 300,350);
            canvas.fillText("that appears to win",300,400);
        }
		canvas.restore();
	}
}