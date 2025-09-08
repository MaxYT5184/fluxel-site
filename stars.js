// stars.js - animated galaxy background ✨

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];
let w, h;

function resizeCanvas() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  initStars();
}

function initStars() {
  stars = [];
  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 2,
      speed: Math.random() * 0.6 + 0.2, // drift speed
      opacity: Math.random() * 0.8 + 0.2
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, w, h);

  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.shadowColor = "#9333ea"; // purple glow
    ctx.shadowBlur = 12;
    ctx.fill();

    // move star
    star.y += star.speed;
    if (star.y > h) {
      star.y = 0;
      star.x = Math.random() * w;
    }
  }

  requestAnimationFrame(drawStars);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawStars();
