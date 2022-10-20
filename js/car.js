class Car {
  constructor(image, canvas, ctx) {
    this.width = 40;
    this.height = 80;
    this.x = 200;
    this.y = 500;
    this.image = new Image();
    this.image.src = image;
    this.ctx = ctx;
    this.speedX = 0;
    this.canvas = canvas;
  }
  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  newPos() {
    this.x += this.speedX;
  }
  outOfBound() {
    if (this.x < 0) {
      this.speedX = 0;
    } else if (this.x > this.canvas.width - this.width) {
      this.speedX = 0;
    }
  }
}
export default Car;
