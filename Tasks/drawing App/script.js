const canvas = document.getElementById("canvas");

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const clear = document.getElementById("clear");
const size = document.getElementById("size");
const color = document.getElementById("color");

const ctx = canvas.getContext("2d");

let radius = 20;
let isPressed = false;
let colors;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = colors;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = colors;
  ctx.lineWidth = radius * 2;
  ctx.stroke();
}

increase.addEventListener("click", (e) => {
  if (radius < 6) {
    radius = radius + 5;
  } else {
    radius = 60;
  }
  size.innerHTML = `${radius}`;
});
decrease.addEventListener("click", (e) => {
  if (radius > 5) {
    radius = radius - 5;
  } else {
    radius = 5;
  }

  size.innerHTML = `${radius}`;
});
color.addEventListener("change", (e) => {
  colors = e.target.value;
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
