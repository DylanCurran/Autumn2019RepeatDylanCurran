class Banana
{
    constructor(canvas, imageOptions)
    {
        this.image = new Image();
        this.xStart = imageOptions.xStart;
        this.yStart = imageOptions.yStart;
        this.startWidth = imageOptions.startWidth;
        this.startHeight = imageOptions.startHeight;
        this.x = imageOptions.x;
        this.y = imageOptions.y;
        this.width = imageOptions.width;
        this.height = imageOptions.height; 
        this.ctx = canvas;
        this.image.src = imageOptions.image;
        this.image.style.opacity = imageOptions.opacity;
    }
    update()
    {

    }
    draw(counter, canvas)
    {
      
       
        canvas.drawImage(this.image, this.xStart + counter * 45 ,this.yStart,
            this.startWidth,this.startHeight,this.x,
            this.y, this.width, this.height);
            
            
    }
}