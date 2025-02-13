const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.font = '80px Arial';
ctx.fillText = ('Sample Text!', 50, 50)

ctx.fillStyle = 'red'
ctx.fillRect(50, 100, 200, 100);

ctx.moveTo(200, 1400);
ctx.lineTo(200, 30);
ctx.lineWidth = 20;
ctx.strokeStyle = 'blue';
ctx.lineCap = 'round';
ctx.stroke();

ctx.fillStyle = 'green';
ctx.beginPath()
ctx.arc(50, 50, 10, 0, 2 * Math.PI);
ctx.fill()

ctx.strokeStyle = 'purple'
ctx.lineWidth = 20;
ctx.strokeRect (10,10, 100, 100)

ctx.fillStyle = "yellow"
ctx.fillRect (10,10, 100, 100)
ctx.clearRect(32.5, 35, 50, 50);

//gradient
const grad = ctx.createLinearGradient(0, 25, 300, 100);
grad.addColorStop(0, 'lightblue');
grad.addColorStop(1, 'red');
ctx.fillStyle = grad;
ctx.fillRect(250, 40, 100, 100);

let gradient = ctx.createLinearGradient(100, 100, 300, 300);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'green');
ctx.fillStyle = gradient;
ctx.fillRect(200, 100, 200, 100)

