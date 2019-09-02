function main()
{
    
    var game = new Game();
   
    window.addEventListener("keydown", function(e) {
		// Space and arrow keys
		if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
			e.preventDefault();
		}
	}, false);

    game.update();
}