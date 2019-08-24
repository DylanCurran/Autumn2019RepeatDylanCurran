class Game
{
    
    constructor()
    {
		this.boundRecursiveUpdate = this.update.bind(this);
        this.ctx = {};
        this.player = new Player();
        this.platform1 = new Platform(50,50,600,20);
        this.platform2 = new Platform(200,200,600,20);
        this.platform3 = new Platform(100,100,600,20);
        this.platform4 = new Platform(200,500,600,20);
        this.initCanvas();
    }
    initCanvas()
    {
        
        // Use the document object to create a new element canvas.
	    var canvas = document.createElement("canvas");
	    // Assign the canvas an id so we can reference it elsewhere.
	    canvas.id = 'mycanvas';
	    canvas.width = window.innerWidth;
	    canvas.height = window.innerHeight;
	    // We want this to be a 2D canvas.
	    this.ctx = canvas.getContext("2d");
	    // Adds the canvas element to the document.
		document.body.appendChild(canvas);	   
        console.log("Initialising game world")
        
        document.addEventListener("keydown", this.keyDownHandler.bind(null,this.player));

    }
    keyDownHandler(player,e)
    {
		
    // triggers when up arrow is pressed
	 if(e.keyCode === 38)
	 {
		
		player.moveUp();
	 }
	 // triggers when the right arrow key is pressed
	 if(e.keyCode === 39)
	 {
		
		 player.moveRight();
	 }
	 // triggers when the left arrow key is pressed
	 if(e.keyCode === 37)
	 {
		
		 player.moveLeft();
	 }
	 // triggers when the down arrow key is pressed
	 if(e.keyCode === 40)
	 {
		
		 player.moveDown();
     }
    }
    update()
	{
		//this.player.update(this.ctx);
        window.requestAnimationFrame(this.boundRecursiveUpdate);
        this.draw();
        
		
	}
	draw()
	{
		this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        this.player.draw(this.ctx);
        this.platform1.draw(this.ctx);
        this.platform2.draw(this.ctx);
        this.platform3.draw(this.ctx);
        this.platform4.draw(this.ctx);

    }
}