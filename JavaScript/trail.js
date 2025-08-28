// ===== Trail Animation =====
window.addEventListener("load", () => {
  const canvas = document.getElementById("trail");
  if (!canvas) return; // Stops if no canvas on page

  const ctx = canvas.getContext("2d");

  // Set initial canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Mouse position
  let mouse = { x: 0, y: 0 };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Particle class
  class Particle {
    constructor() {
      this.x = mouse.x;
      this.y = mouse.y;
      this.size = Math.random() * 5 + 2;
      this.speedX = (Math.random() - 0.5) * 2;
      this.speedY = (Math.random() - 0.5) * 2;
      this.color = "rgba(241,196,15,0.8)"; // Yellow
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.size *= 0.95;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Particle management
  let particles = [];
  function handleParticles() {
    particles.push(new Particle());
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      if (particles[i].size < 0.5) {
        particles.splice(i, 1);
        i--;
      }
    }
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
  }

  animate();
});
