class Background {
  constructor(image, canvas, ctx) {
    this.x = 0;
    this.y = 0;
    this.image = new Image();
    this.image.src = image;
    this.canvas = canvas;
    this.ctx = ctx;
  }
  draw() {
    this.ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.canvas.width,
      this.canvas.height
    );
    this.ctx.drawImage(
      this.image,
      this.x,
      this.y - this.canvas.height,
      this.canvas.width,
      this.canvas.height
    );
  }
  move() {
    this.y += 5;
    this.y %= canvas.height;
  }
}

export default Background;
