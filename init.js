


function initialize() {
    var radius = 20;
    var size = 6;
    var c = document.getElementById("gamearea");
    var ctx = c.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    var gameHGrid = genHGrid(size);
    c.addEventListener("click", function(evt)
		       {onClick(evt, gameHGrid, radius)
			mainLoop(ctx, gameHGrid, size, radius)});
    mainLoop(ctx, gameHGrid, size, radius);
//     ctx.fillStyle = "#FF0077";
//     ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
//     // draw game grid before calling eventlistener?
//     var gameHGrid = genHGrid(2);
//     drawHGrid(ctx, 400, 200, 10, gameHGrid, 2);
//     c.addEventListener("click", function(evt)
// 		       {onClick(evt, gameHGrid, 10);
// //		       drawHGrid(ctx, 400, 200, 10, gameHGrid, 2);
// 		       });




//     drawHexagon(ctx, 50, 50, 10, "#000000", "#FFFFFF");
//     drawHexagon(ctx, 200, 200, 10, "#FFFFFF", "#000000");
//     drawHexagonStrip(ctx, 100, 100, 10, "#00FF00", "#FF00FF", 10);
//     for(var i=6;i<7;i++) {
// 	drawHGrid(ctx, (i-1)*200, 200, 10, genHGrid(i), i);
// 	ctx.beginPath();
// 	ctx.arc((i-1)*200, 200, 2, 0, Math.PI*2, true);
// 	ctx.stroke();	
//     }

}

function mainLoop(ctx, grid, size, radius) {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    ctx.fillStyle = "#FF0080";
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
    //var gameHGrid = genHGrid(6);
    drawHGrid(ctx, 400, 200, radius, grid, size);
}
