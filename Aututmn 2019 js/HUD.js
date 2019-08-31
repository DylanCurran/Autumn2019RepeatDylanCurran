class Hud
{
    constructor()
    {

    }

    HUDText(canvas,count,lives)
	{
		canvas.save();
		canvas.fillStyle= "#FFFF00";
		canvas.font = "italic 40pt Calibri";
        canvas.textBaseLine = "top";
        canvas.fillText("Bananas Collected: " + count + "/3", 400, 350);
        canvas.fillText("Lives left: " + lives + "/3", 400,300);
		canvas.restore();
	}
}