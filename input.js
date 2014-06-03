


function onClick(event, grid, radius) {
    var x = event.clientX;
    var y = event.clientY;
    var range = [];
    var result = undefined;
    range = grid.filter(function(el)
		     {return inRange(x, y, el.x, el.y,radius);});
    //console.log(range);
    range = range.filter(function(el)
			{return pointInHexagon(x,y,el.x,el.y,radius);});
    if(range.length==1) {
	//console.log(range);
	//grid[range[0].id].type = "fire";
	result = range[0];
	grid[result.id].type = "fire";
    }
    
}

function pointInHexagon(px, py, hx, hy, radius) {
    var altitude = Math.sqrt(3)*radius/2;
    var xtr = px -hx; // to set h at origin
    var ytr = py -hy;
    var result = [];
    for(var i=0;i<3;i++) {
	result[i]=((ytr<=radius)&&(ytr>=-radius));
	xtr = xtr/2-ytr*Math.sqrt(3)/2;
	ytr = xtr*Math.sqrt(3)/2+ytr/2;
    }
    return result.reduce(function(a,b){return (a && b);});
}


function inRange(clickX, clickY, x, y, radius) {
    var xl = x<=clickX+radius;
    var xg = x>=clickX-radius;
    var yl = y<=clickY+radius;
    var yg = y>=clickY-radius;
    var retval = xl && xg && yl && yg;
    return retval;
}
