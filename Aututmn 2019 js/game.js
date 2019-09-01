class Game
{
    
    constructor()
    {
		this.boundRecursiveUpdate = this.update.bind(this);
		this.ctx = {};
		this.spriteCounter;
		this.animationDelay;
		this.platformsArray;
		this.tutorialArray;
		this.bananaArray;
		this.bananaCount;
		this.lives;
		this.pickupSound;
		this.soundBuffer;
		this.audioCtx = new AudioContext();
		this.TOTAL_BANANAS = 3;
		this.atMainMenu = true;
		this.player = new Player();
		this.mainMenu = new MainMenu();
		this.hud = new Hud();
		this.goal = new Goal();
		this.endScreen = new EndMenu();
		//this.loadSound('pickup.ogg');
		this.platformSetup();
		this.bananaSetup();
		this.initCanvas();
		

    }
    initCanvas()
    {
		this.spriteCounter = 0;
		this.animationDelay = 0;
		this.bananaCount = 0;
		this.lives = 3;
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
		canvas.addEventListener("touchstart", on_touch_start);
    	canvas.addEventListener("touchend", on_touch_end);
   		canvas.addEventListener("touchmove", on_touch_move.bind(null,this.ctx));

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
	 if(e.keyCode == 32 && player.start )
	 {
		player.start = false;
	 }
	 //restart game
	 if(e.keyCode == 32 && player.end)
	 { 
		 player.resetPosition();
		 player.end = false;
		 player.tutorial = false;
	 }
	 if(e.keyCode == 13 && player.start)
	 {
		 player.colourChange();
	 }
	 //return to menu
	 if(e.keyCode == 13 && player.end)
	 {
		player.start = true;
		player.end = false;
		player.tutorial = false;
	 }
	 if(e.keyCode == 32 && player.start)
	 {
		 player.start = false;
	 }
	 if(e.keyCode == 84)
	 {
		 console.log("Keypress");
		player.tutorial = true;
		player.start = false;
	 }

	}
	
	  	
	
    update()
	{
		if(this.lives == 0)
		{
			this.player.end = true;
		}
		window.requestAnimationFrame(this.boundRecursiveUpdate);
		this.platformCollider();
		this.bananaCollider();
		this.goalCollider();
		this.draw();

	}
	draw()
	{
		this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		if(!this.player.start && this.player.end == false)
		{
			this.platformDraw();
			this.bananaDraw();
			this.hud.HUDText(this.ctx,this.bananaCount,this.lives,this.player.tutorial);
			if(this.bananaCount == this.TOTAL_BANANAS)
			{
				this.goal.active = true;
				this.goal.draw(this.ctx);
			}
			this.player.draw(this.ctx);
		}
		else if(this.player.start)
		{
			this.mainMenu.screenMenu(this.ctx);
		}
		else
		{
			if(!this.player.tutorial)
			{
				this.endScreen.screenMenuEnd(this.ctx);
			}
			else
			{
				this.endScreen.tutorialEnd(this.ctx);
			}
		}

	}
	/*
	loadSound(url)
	{
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		var context = new AudioContext();
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.responseType = 'arraybuffer';
		request.onload = function() {
			// request.response is encoded... so decode it now
			context.decodeAudioData(request.response, function(buffer) {
			  this.pickupSound = buffer;
			}, function(err) {
			  throw new Error(err);
			});
		  }
		
		  request.send();
	}
	playSound(sound)
	{
		const playSound = this.audioCtx.createBufferSource();
		playSound.buffer = audio;
		playSound.connect(this.audioCtx.destination);
		playSound.start(this.audioCtx.currentTime);
	}
	*/
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
		this.platform9 = new Platform(200,100,600,20);
		this.platform10 = new Platform(200,500,600,20);
		this.platform11 = new Platform(200,100,20,400);
		this.platform12 = new Platform(800,100,20,420);

		this.platformsArray = [this.platform1, this.platform2, this.platform3, this.platform4, 
			this.platform5, this.platform6, this.platform7, this.platform8];

		this.tutorialArray = [this.platform9,this.platform10,this.platform11,this.platform12];
	}

	platformDraw()
	{
		if(!this.player.tutorial)
		{
			for(var i = 0; i < this.platformsArray.length; i++)
			{
				this.platformsArray[i].draw(this.ctx);
			}
		}
		else{
			for(var i = 0; i < this.tutorialArray.length; i++)
			{
				this.tutorialArray[i].draw(this.ctx);
			}
		}

	}

	platformCollider()
	{
		if(!this.player.tutorial)
		{
			for(var i = 0; i < this.platformsArray.length; i++)
			{
				if(this.player.x < this.platformsArray[i].x + this.platformsArray[i].width &&
				this.player.x + this.player.width > this.platformsArray[i].x &&
				this.player.y < this.platformsArray[i].y + this.platformsArray[i].height &&
				this.player.y + this.player.height > this.platformsArray[i].y)
				{
					this.player.resetPosition();
					this.lives--;
				}
			}
		}
		else{
			for(var i = 0; i < this.tutorialArray.length; i++)
			{
				if(this.player.x < this.tutorialArray[i].x + this.tutorialArray[i].width &&
					this.player.x + this.player.width > this.tutorialArray[i].x &&
					this.player.y < this.tutorialArray[i].y + this.tutorialArray[i].height &&
					this.player.y + this.player.height > this.tutorialArray[i].y)
					{
						this.player.resetPosition();
						this.lives--;
					}
			}
		}
			
	}

	bananaSetup()
	{
		this.imageStuff1 = {image: 'banana sprite sheet.png', xStart: 0, yStart: 0, startWidth: 45, startHeight:75,  
		x: 300, y: 125,width: 45, height: 75 , opacity: 1};
		this.imageStuff2 = {image: 'banana sprite sheet.png', xStart: 0, yStart: 0, startWidth: 45, startHeight:75,  
		x: 600, y: 425,width: 45, height: 75 , opacity: 1};
		this.imageStuff3 = {image: 'banana sprite sheet.png', xStart: 0, yStart: 0, startWidth: 45, startHeight:75,  
		x: 225, y: 300,width: 45, height: 75 , opacity: 1};

		this.banana1 = new Banana(this.ctx, this.imageStuff1);
		this.banana2 = new Banana(this.ctx, this.imageStuff2);
		this.banana3 = new Banana(this.ctx, this.imageStuff3);

		this.bananaArray = [this.banana1, this.banana2,this.banana3];
		
	}

	bananaDraw()
	{
		if(this.spriteCounter >= 10)
		{
			this.spriteCounter = 0;
		}
			for(var i = 0; i < this.bananaArray.length; i++)
			{
				this.bananaArray[i].draw(this.spriteCounter, this.ctx);
			}
			this.animationDelay++;
			if(this.animationDelay >= 5)
			{
			this.spriteCounter++;
			this.animationDelay = 0;
			}

		
	}

	bananaCollider()
	{
		for(var i = 0; i < this.bananaArray.length; i++)
			{
				if(this.player.x < this.bananaArray[i].x + this.bananaArray[i].startWidth &&
					this.player.x + this.player.width > this.bananaArray[i].x &&
					this.player.y < this.bananaArray[i].y + this.bananaArray[i].startHeight &&
					this.player.y + this.player.height > this.bananaArray[i].y)
					{
						this.bananaArray[i].isActive = false;
						if(!this.bananaArray[i].firstCollisonCheck)
						{
						this.bananaCount++;
						this.bananaArray[i].firstCollisonCheck = true;
						//this.playSound(this.pickupSound);
						}
					}
			}
	}

	goalCollider()
	{
		if(this.player.x < this.goal.width + this.goal.x && this.player.x + this.player.width  > this.goal.x
			&& this.player.y + this.player.height > this.goal.y && this.player.y  < this.goal.y + this.goal.height &&
			this.goal.active)
			{
				this.player.end = true;
				this.ResetGame();
			}
	}

	ResetGame()
	{
		this.player.resetPosition();
		this.lives = 3;
		this.bananaCount = 0;
		for(var i = 0; i < this.TOTAL_BANANAS; i++)
		{
			this.bananaArray[i].isActive = true;
			this.bananaArray[i].firstCollisonCheck = false;
		}	
		this.goal.active = false;
	}
}