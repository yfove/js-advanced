
//global variables
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d'); //context

//resize canvas
const canvasResize = () =>{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

canvasResize();
//-----------
//rectangles
//-----------

//change color
ctx.fillStyle = "rgba(255, 0, 0, 0.1)";
// drawing rectangle
// ctx.fillRect(x, y, width, height);
ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = "rgba(255, 225, 0, 0.5)";
ctx.fillRect(300, 400, 100, 100);

//--------------
// drawing line
//--------------

// begin line
ctx.beginPath();
// move to line start point
// ctx.moveTo(x, y);
ctx.moveTo(50, 300);
// ctx.lineTo(x, y);
ctx.lineTo(300,100);
ctx.lineTo(400,300);
ctx.lineTo(700,100);
//adding color
ctx.strokeStyle = "blue";
//draw the actual line
ctx.stroke();

//-------------
// arc/ circle
//-------------
//ctx.arc(x:Int, y:Int, r:Int, startAngle:Float, endAngle:Float, drawCounterClockwise: bool (false));
ctx.beginPath();
ctx.arc(600, 100, 30, 0, Math.PI*2, false);
ctx.strokeStyle = "pink";
ctx.stroke();

for (let i = 0; i < 2; i++) {
	//randomize x and y
	const x  = Math.random() * window.innerWidth;
	const y = Math.random() * window.innerHeight;
	console.log(x, y);
	//draw random circles in a loop
	ctx.beginPath();
	ctx.arc(x, y, 30, 0, Math.PI*2, false);
	ctx.strokeStyle = "red";
	ctx.stroke();
};

//------------
// animation
//------------

let x = 200;
let y = 200;
const radius = 30;

let dx = 4;// x velocity
let dy = 4;// y velocity

//this creates a loop
const animate = () => {
	requestAnimationFrame(animate);
	//clearing canvas each time
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	//start circle creation
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.strokeStyle = "blue";
	ctx.stroke();

	//x and y velocity
	if (x + radius > innerWidth || x - radius < 0){
		dx = -dx;
	}

	if ( y + radius > innerHeight || y - radius < 0){
		dy = -dy;
	}
	
//change x and y position 
	x+= dx;
	y+= dy;

};

animate();

