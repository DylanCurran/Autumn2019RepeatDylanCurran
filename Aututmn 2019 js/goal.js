class Goal
{
    constructor()
    {
        this.x = 720;
        this.y = 120;
        this.width = 80;
        this.height = 80;
        this.active = false;
    }

    draw(ctx)
    {
        ctx.fillStyle = "#FF00FF";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}