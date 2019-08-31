class Game
{
    
    constructor()
    {
		this.boundRecursiveUpdate = this.update.bind(this);
        this.ctx = {};
		this.player = new Player();
		this.platformSetup();
		this.bananaSetup();
		this.initCanvas();
		this.spriteCounter;
		this.animationDelay;
		this.platformsArray;
    }
    initCanvas()
    {
		this.spriteCounter = 0;
		this.animationDelay = 0;
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
		this.platformCollider();
		this.draw();
        
		
	}
	draw()
	{
		this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		this.platformDraw();
		this.bananaDraw();
        this.player.draw(this.ctx);

	}
	
	platformSetup()
	{
		this.platform1 = new Platform(200,100,600,20);
        this.platform2 = new Platform(300,200,500,20);
        this.platform3 = new Platform(300,400,500,20);
		this.platform4 = new Platform(200,500,600,20);
		this.platform5 = new Platform(200,100,20,400);
		this.platform6 = new Platform(300,200,20,200);
		this.platform7 = new Platform(800,100,20,120);
		this.platform8 = new Platform(800,400,20,120);

		this.platformsArray = [this.platform1, this.platform2, this.platform3, this.platform4, this.platform5, this.platform6, this.platform7, this.platform8];
	}

	platformDraw()
	{
		for(var i = 0; i < this.platformsArray.length; i++)
		{
			this.platformsArray[i].draw(this.ctx);
		}

	}

	platformCollider()
	{
			for(var i = 0; i < this.platformsArray.length; i++)
			{
				if(this.player.x < this.platformsArray[i].x + this.platformsArray[i].width &&
				this.player.x + this.player.width > this.platformsArray[i].x &&
				this.player.y < this.platformsArray[i].y + this.platformsArray[i].height &&
				this.player.y + this.player.height > this.platformsArray[i].y)
				{
					console.log("colliding");
					this.player.resetPosition();
				}
			}
			
	}

	bananaSetup()
	{
		this.imageStuff1 = {image: 'banana sprite sheet.png', xStart: 0, yStart: 0, startWidth: 45, startHeight:75,  
		x: 300, y: 125,width: 60, height: 59 , opacity: 1};
		this.imageStuff2 = {image: 'banana sprite sheet.png', xStart: 0, yStart: 0, startWidth: 45, startHeight:75,  
		x: 600, y: 425,width: 60, height: 59 , opacity: 1};
		this.imageStuff3 = {image: 'banana sprite sheet.png', xStart: 0, yStart: 0, startWidth: 45, startHeight:75,  
		x: 225, y: 300,width: 60, height: 59 , opacity: 1};

		this.banana1 = new Banana(this.ctx, this.imageStuff1);
		this.banana2 = new Banana(this.ctx, this.imageStuff2);
		this.banana3 = new Banana(this.ctx, this.imageStuff3);

	}

	bananaDraw()
	{
		if(this.spriteCounter >= 10)
		{
			this.spriteCounter = 0;
		}
			this.banana1.draw(this.spriteCounter, this.ctx);
			this.banana2.draw(this.spriteCounter, this.ctx);
			this.banana3.draw(this.spriteCounter,this.ctx);
			this.animationDelay++;
			if(this.animationDelay >= 5)
			{
			this.spriteCounter++;
			this.animationDelay = 0;
			}

		
	}
}