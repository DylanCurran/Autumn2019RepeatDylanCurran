class Player
{
    constructor()
    {
        this.x = 0;
        this.y = 125;
        this.width = 50;
        this.height = 50;
    }

    draw(ctx)
    {
        
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }

    moveUp()
    {
        this.y -= 5;
    }
    moveDown()
    {
        this.y += 5;
    }
    moveLeft()
    {
        this.x -= 5;
    }
    moveRight()
    {
        this.x += 5;
    }

    resetPosition()
    {
        this.x = 700;
        this.y = 125;
    }

}