class Platform
{
    constructor(xPos,yPos,width,height)
    {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
    }

    draw(ctx)
    {
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(this.xPos,this.yPos,this.width,this.height);
    }
}