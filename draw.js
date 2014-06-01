


function initialize() {
    var c = document.getElementById("gamearea");
    var ctx = c.getContext("2d");
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight - 20;
    ctx.fillStyle = "#FF0077";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
    drawHexagon(ctx, 50, 50, 10, "#000000", "#FFFFFF");
    drawHexagon(ctx, 200, 200, 10, "#FFFFFF", "#000000");
    drawHexagonStrip(ctx, 100, 100, 10, "#00FF00", "#FF00FF", 10);
}





function drawHexagonStrip(ctx, x, y, radius, border, fill, n) {
    ctx.save();
    var i;
    for(i = 0; i < n; i++) {
	drawHexagon(ctx, x + 2 * i * radius, y, radius, border, fill);
    }
    ctx.restore();
}


function drawHexagon(ctx, x, y, radius, border, fill) {
    // radius is from center to corner
    ctx.save();
    var altitude = Math.sqrt(3 * radius * radius / 4);
    ctx.strokeStyle = border;
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.moveTo(x, y - radius);
    ctx.lineTo(x + altitude ,y - radius / 2);
    ctx.lineTo(x + altitude, y + radius / 2);
    ctx.lineTo(x, y + radius);
    ctx.lineTo(x - altitude, y + radius / 2);
    ctx.lineTo(x - altitude, y - radius / 2);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}
