class Obstacles {
  constructor(x, canvas, ctx, width) {
    this.canvas = canvas;
    this.x = x;
    this.y = 0;
    this.ctx = ctx;
    this.width = width;
    this.height = 20;
    this.speedX = 0;
    this.markedForDeletion = false;
  }
  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  move() {
    this.y += 5;
    this.y %= this.canvas.height;
  }
  update() {
    if (this.y > this.canvas.width + 150) {
      this.markedForDeletion = true;
    }
  }
}

export default Obstacles;
