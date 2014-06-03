// makes the board..?

// object for a cell:
// { id:# type:fire/tree/water/rock/base 
//  player:0/1/2, perm:???, x:0, y:0}

// id's are 1-indexed

// Bad thing (maybe): I generate the coords in the draw file and add
// them there...


function genHGrid(n) {//1
    var len, cellno;
    var cells = [];
    cells[0] = {id:0, type:"base", player:0, perm:0, x:0, y:0}
    for(var i=1;i<=sizeofHGrid(n);i++)
	cells[i] = {id:i, type:"base", player:0, perm:1};
    return cells;
}

function neighborsH(id, n) {
    // this is a monstrous function...
    var neighbors = [];
    var row = getRowH(id, n);

    // General case
    if(id<(sizeofHGrid(n)/2)) {
	neighbors.push(id);//0 c
	neighbors.push(id-1);//1 l
	neighbors.push(id+1);//2 r
	neighbors.push(id-n-row+1);//3 ul
	neighbors.push(id-n-row+2);//4 ur
	neighbors.push(id+n+row-1);//5 bl
	neighbors.push(id+n+row);//6 br
    }
    else {
	neighbors.push(id);//0 c
	neighbors.push(id-1);//1 l
	neighbors.push(id+1);//2 r
	neighbors.push(id-3*n+row);//3 ul
	neighbors.push(id-3*n+row+1);//4 ur
	neighbors.push(id+3*n-row-2);//5 bl
	neighbors.push(id+3*n-row-1);//6 br
    }
    // edge cases....
    if (onEdgeH(id, "top", n)) {
	neighbors[3] = 0;
	neighbors[4] = 0;
    }
    else if (onEdgeH(id, "lup", n)) {
	neighbors[1] = 0;
	neighbors[3] = 0;
    }
    else if (onEdgeH(id, "rup", n)) {
	neighbors[2] = 0;
	neighbors[4] = 0;
    }
    else if (onEdgeH(id, "ldn", n)) {
	neighbors[1] = 0;
	neighbors[5] = 0;
    }
    else if (onEdgeH(id, "rdn", n)) {
	neighbors[2] = 0;
	neighbors[6] = 0;
    }
    else if (onEdgeH(id, "bot", n)) {
	neighbors[5] = 0;
	neighbors[6] = 0;	
    }
    // six corner cases 
    // probably redundant...
    // actually not completely, but
    if(id==1) {//ul
	neighbors[1] = 0;
	neighbors[3] = 0;
	neighbors[4] = 0;
    }
    else if(id==n) {//ur
	neighbors[2] = 0;
	neighbors[3] = 0;
	neighbors[4] = 0;
    }
    else if (id==(n-1)*(n-1)+(((n-1)*(n-2))>>1)+1) {//l
	neighbors[1] = 0;
	neighbors[3] = 0;
	neighbors[5] = 0;
    }
    else if (id==n*n+((n*(n-1))>>1)) {//r
	neighbors[2] = 0;
	neighbors[4] = 0;
	neighbors[6] = 0;
    }
    else if (id==sizeofHGrid(n)-n+1) {//bl
	neighbors[1] = 0;
	neighbors[5] = 0;
	neighbors[6] = 0;
    }
    else if (id==sizeofHGrid(n)) {//br
	neighbors[2] = 0;
	neighbors[5] = 0;
	neighbors[6] = 0;
    }
    return neighbors;
}

function sizeofHGrid(n) {
    return n*n+n*(n-1)+(n-1)*(n-1);
}

function getRowH(id, n) {
    var cno=0;
    for(var row=1;row<=2*n-1;row++) {
	if(row<n)
	    cno+=n+row-1;
	else
	    cno+=3*n-1-row;
	if(id<=cno)
	    return row;
    }
}

function onEdgeH (id, edge, n) {
    if (edge=="top") {
	return (id>0 && id<=n);
    }
    if (edge=="lup") {
	for(var i=0;i<n;i++) {
	    if (id == i*n+((i*(i-1))>>1)+1) {
		return true;
	    }
	}
    }
    if (edge=="rup") {
	for(var i=1;i<=n;i++) {
	    if (id==i*n+((i*(i-1))>>1)) {
		return true;
	    }
	}
    }
    if (edge=="ldn") {
	var bl=sizeofHGrid(n)-n+1;
	for(var i=0;i<n;i++) {
	    var tmp = bl-i*n-((i*(i-1))>>1)-i;
	    if (id==tmp) {
		return true;
	    }
	}
    }
    if (edge=="rdn") {
	var br=sizeofHGrid(n);
	for(i=0;i<n;i++) {
	    var tmp = br-i*n-((i*(i-1))>>1);
	    if (id==tmp) {
		return true;
	    }
	}
    }
    if (edge=="bot") {
	return (id<=sizeofHGrid(n) && id>=(sizeofHGrid(n)-n+1));
    }
    return false;
}
