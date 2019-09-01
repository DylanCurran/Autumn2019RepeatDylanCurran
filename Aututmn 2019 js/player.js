class Player
{
    constructor()
    {
        this.x = 700;
        this.y = 125;
        this.width = 50;
        this.height = 50;
        this.start = true;
        this.end = false;
        this.tutorial = false;
        this.hardMode = false;
        this.colourChanger = false;
    }

    draw(ctx)
    {
        if(this.colourChanger)
        {
            ctx.fillStyle = "#FFFF00";
        }
        else
        {
            ctx.fillStyle = "#FF0000";
        }
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

    startGameFix()
    {
        this.start = false;
    }

  

    colourChange()
    {
        this.colourChanger = true;
    }

}