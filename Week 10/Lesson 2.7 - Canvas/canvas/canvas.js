const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext('2d'); //ctx = context
//can also set context to 3d by using 'webgl'

// ctx.lineWidth = 20;
ctx.fillStyle = "darkcyan";
ctx.strokeStyle = "orange";
// ctx.fillRect(0, 0, 100, 100);
ctx.strokeRect (300, 300, 100, 100);

ctx.fillStyle = "darkcyan";
ctx.strokeStyle = "red";

ctx.beginPath();
ctx.lineTo(30, 30);
ctx.lineTo(290, 300);
ctx.lineTo(290, 400);
ctx.lineTo(30, 30);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineTo(30,30);
ctx.lineTo(300, 290);
ctx.lineTo(400, 290);
ctx.lineTo(30, 30);
ctx.stroke();
ctx.closePath();

ctx.moveTo(0,0);


ctx.beginPath();
//radiant for start and end angle
ctx.fillStyle = "darkcyan";
ctx.strokeStyle = "blue";
ctx.arc(300, 300, 40, 2, Math.PI * 1, false);
ctx.closePath();
ctx.moveTo(0, 0);

ctx.beginPath();
ctx.arc(400, 400, 40, 0, Math.PI * 2, false);
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.moveTo(0, 0);

//smiley
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
ctx.moveTo(65, 65);
ctx.fill()

ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
// ctx.fill()
ctx.stroke();

