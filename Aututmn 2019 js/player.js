class Player
{
    constructor()
    {
        this.x = 20;
        this.y = 20;
        this.width = 150;
        this.height = 150;
    }

    draw(ctx)
    {
        
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }

    moveUp()
    {
        this.y -= 15;
    }
    moveDown()
    {
        this.y += 15;
    }
    moveLeft()
    {
        this.x -= 15;
    }
    moveRight()
    {
        this.x += 15;
    }

}