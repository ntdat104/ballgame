let canvas = document.getElementById("game");
let context = canvas.getContext("2d");

const radius = 15;

const balls = [
    {
        color: "red",
        x: Math.floor(Math.random() * (Math.floor(canvas.clientWidth - radius) - Math.ceil(radius)) + Math.ceil(radius)),
        y: Math.floor(Math.random() * (Math.floor(canvas.clientHeight - radius) - Math.ceil(radius)) + Math.ceil(radius)),
        dx: Math.floor(Math.random() * (Math.floor(10) - Math.ceil(2)) + Math.ceil(2)),
        dy: Math.floor(Math.random() * (Math.floor(10) - Math.ceil(2)) + Math.ceil(2)),
    },
    {
        color: "green",
        x: Math.floor(Math.random() * (Math.floor(canvas.clientWidth - radius) - Math.ceil(radius)) + Math.ceil(radius)),
        y: Math.floor(Math.random() * (Math.floor(canvas.clientHeight - radius) - Math.ceil(radius)) + Math.ceil(radius)),
        dx: Math.floor(Math.random() * (Math.floor(10) - Math.ceil(2)) + Math.ceil(2)),
        dy: Math.floor(Math.random() * (Math.floor(10) - Math.ceil(2)) + Math.ceil(2)),
    },
    {
        color: "blue",
        x: Math.floor(Math.random() * (Math.floor(canvas.clientWidth - radius) - Math.ceil(radius)) + Math.ceil(radius)),
        y: Math.floor(Math.random() * (Math.floor(canvas.clientHeight - radius) - Math.ceil(radius)) + Math.ceil(radius)),
        dx: Math.floor(Math.random() * (Math.floor(10) - Math.ceil(2)) + Math.ceil(2)),
        dy: Math.floor(Math.random() * (Math.floor(10) - Math.ceil(2)) + Math.ceil(2)),
    },
    {
        color: "yellow",
        x: Math.floor(Math.random() * (Math.floor(canvas.clientWidth - radius) - Math.ceil(radius)) + Math.ceil(radius)),
        y: Math.floor(Math.random() * (Math.floor(canvas.clientHeight - radius) - Math.ceil(radius)) + Math.ceil(radius)),
        dx: Math.floor(Math.random() * (Math.floor(10) - Math.ceil(2)) + Math.ceil(2)),
        dy: Math.floor(Math.random() * (Math.floor(10) - Math.ceil(2)) + Math.ceil(2)),
    },
    {
        color: "white",
        x: Math.floor(Math.random() * (Math.floor(canvas.clientWidth - radius) - Math.ceil(radius)) + Math.ceil(radius)),
        y: Math.floor(Math.random() * (Math.floor(canvas.clientHeight - radius) - Math.ceil(radius)) + Math.ceil(radius)),
        dx: Math.floor(Math.random() * (Math.floor(10) - Math.ceil(2)) + Math.ceil(2)),
        dy: Math.floor(Math.random() * (Math.floor(10) - Math.ceil(2)) + Math.ceil(2)),
    }
]

const drawBall = () => {
    for (let ball of balls){
        context.beginPath();
        context.arc(ball.x, ball.y, radius, 0, Math.PI*2);
        context.fillStyle = ball.color;
        context.fill();
        context.closePath();

        ball.x += ball.dx;
        if(ball.x < radius || ball.x > canvas.clientWidth - radius){
            ball.dx = -ball.dx;
        }

        ball.y += ball.dy;
        if(ball.y < radius || ball.y > canvas.clientHeight - radius){
            ball.dy = -ball.dy;
        }
    }
}   

const draw = () => {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    drawBall();
    requestAnimationFrame(draw);
}

draw();