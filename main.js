let canvas = document.getElementById("game");
let context = canvas.getContext("2d");

let x = 20, y = 20;
let dx = 5, dy = 2;
const radius = 15;

const drawBall = () => {
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI*2);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}


const draw = () => {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    drawBall();

    if(x < radius || x > canvas.clientWidth - radius) {
        dx = -dx;
    }

    if(y < radius || y > canvas.clientHeight - radius) {
        dy = -dy;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(draw);
}

draw();