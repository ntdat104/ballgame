let canvas = document.getElementById("game");
let context = canvas.getContext("2d");

const radius = 15;

const randomMinMax = (min, max) => {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
}

const balls = [
    {
        color: "red",
        x: randomMinMax(radius, canvas.clientWidth - radius),
        y: randomMinMax(radius, canvas.clientHeight - radius),
        dx: randomMinMax(2, 10),
        dy: randomMinMax(2, 10),
    },
    {
        color: "green",
        x: randomMinMax(radius, canvas.clientWidth - radius),
        y: randomMinMax(radius, canvas.clientHeight - radius),
        dx: randomMinMax(2, 10),
        dy: randomMinMax(2, 10),
    },
    {
        color: "blue",
        x: randomMinMax(radius, canvas.clientWidth - radius),
        y: randomMinMax(radius, canvas.clientHeight - radius),
        dx: randomMinMax(2, 10),
        dy: randomMinMax(2, 10),
    },
    {
        color: "yellow",
        x: randomMinMax(radius, canvas.clientWidth - radius),
        y: randomMinMax(radius, canvas.clientHeight - radius),
        dx: randomMinMax(2, 10),
        dy: randomMinMax(2, 10),
    },
    {
        color: "white",
        x: randomMinMax(radius, canvas.clientWidth - radius),
        y: randomMinMax(radius, canvas.clientHeight - radius),
        dx: randomMinMax(2, 10),
        dy: randomMinMax(2, 10),
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