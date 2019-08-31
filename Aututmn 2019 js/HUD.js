class Hud
{
    constructor()
    {

    }

    HUDText(canvas,count)
	{
		canvas.save();
		canvas.fillStyle= "#FFFF00";
		canvas.font = "italic 40pt Calibri";
        canvas.textBaseLine = "top";
        canvas.fillText("Bananas Collected: " + count + "/3", 400, 350);
		canvas.restore();
	}
}