



function drawHGrid(ctx, x, y, radius, cells, n) {
    // TODO: complete colors for cells
    // draws from center
    var cell = 1;
    for (var row=0;row<2*n-1;row++) {
	var len;
	if (row<n)
	    len = n + row;
	else
	    len = 3*n-row-2;
	for (var i=0;i<len;i++) {
	    cells[cell].x = rowStart(row,n,x,y,radius).x+2*radius*i;
	    cells[cell].y = rowStart(row,n,x,y,radius).y;
	    var color = "#FFFFFF";
	    if (cells[cell].type!="base") {
		color = "#00FF00";
	    }
	    drawHexagon(ctx,
			(rowStart(row,n,x,y,radius).x+2*radius*i),
			(rowStart(row,n,x,y,radius).y),
			radius, "#000000", color );
	    cell++;
	}
    }
}

function rowStart(row, n, x, y ,radius) {
    if (row<n) { // above halfway
	var origin = {x:x-(radius*n-radius),
		      y:y-(Math.sqrt(3)*(radius*n-radius))};
	var offset = {x:(radius),
		      y:(radius*Math.sqrt(3))};
	return {x:(origin.x-offset.x*row),
		y:(origin.y+offset.y*row)};
    }
    else {
	var lefty = {x:x-(2*radius*n-2*radius),
		     y:y};
	var offset = {x:(radius),
		      y:(radius*Math.sqrt(3))};
	return {x:(lefty.x+offset.x*(row-n+1)),
		y:(lefty.y+offset.y*(row-n+1))};
    }
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




// is this even useful anymore?
function drawHexagonStrip(ctx, x, y, radius, border, fill, n) {
    ctx.save();
    var i;
    for(i = 0; i < n; i++) {
	drawHexagon(ctx, x + 2 * i * radius, y, radius, border, fill);
    }
    ctx.restore();
}
