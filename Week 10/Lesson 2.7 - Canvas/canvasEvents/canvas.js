const canvas = document.querySelector("#myCanvas");
const c = canvas.getContext('2d'); //c or ctx = context


let getRandomNum = (max) =>{
	return Math.floor(Math.random()*(max+1));
};

const getRandomColor = () => {
	const val1 = getRandomNum(255);
	const val2 = getRandomNum(255);
	const val3 = getRandomNum(255);
	const rgb = `rgb(${val1}, ${val2}, ${val3})`;
	return rgb;
};

canvas.addEventListener("mousemove", function(e){
	// console.log(e);
	const x = e.clientX; //can also use offsetX or pageX or screenX
	const y = e.clientY; //can also use offsetY or pageY or screenY
	c.beginPath();
	c.fillStyle = getRandomColor();
	c.arc(x, y, 25, 0, Math.PI * 2, false);
	c.fill();
	c.closePath();
});

