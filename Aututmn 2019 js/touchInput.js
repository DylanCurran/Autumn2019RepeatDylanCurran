
function is_touch_device()
    {
        return 'ontouchstart' in window
    }
    var time1;
    var initX = 0;
    var initY = 0;
    var endX = 0;
    var endY = 0;
    var distance =0;
    var end = false;
   
    function on_touch_start(e)
    {
       
        time1 = new Date();
        var touches = e.touches;
        initX = touches[0].clientX;
        initY = touches[0].clientY;
        console.log(initX,initY);
        
    }
    var time2;
   
    
    
    function on_touch_move(ctx,e)
    {
       e.preventDefault();
        
        var touches = e.touches;
        endX = touches[0].clientX;
        endY = touches[0].clientY;
        ctx.beginPath();
        ctx.moveTo(initX,initY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
        initX = endX;
        initY = endY;
        
    }
    
    function on_touch_end()
    {
        inittX = endX;
        initY = endY;
        
    }
