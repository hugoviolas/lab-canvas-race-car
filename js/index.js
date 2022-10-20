import Background from "./background.js";
import Car from "./car.js";
import Obstacles from "./obstacles.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const background = new Background("../images/road.png", canvas, ctx);
const car = new Car("../images/car.png", canvas, ctx);
let frames = null;
let obstacles = [];

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    background.draw();
    car.draw();
    animate();
  }
};
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();
  background.move();
  obstacles.forEach((obstacle) => {
    obstacle.draw();
    obstacle.move();
    obstacle.update();
  });
  car.newPos();
  car.draw();
  car.outOfBound();
  frames = requestAnimationFrame(animate);
  obstacles = obstacles.filter((obstacle) => !obstacle.markedForDeletion);
  console.log(obstacles);
}
setInterval(addObstacle, 1200);
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    car.speedX += 10;
  } else if (event.code === "ArrowLeft") {
    car.speedX -= 10;
  }
});
document.addEventListener("keyup", (e) => {
  car.speedX = 0;
});

function addObstacle() {
  let randomObstaclePosition = Math.floor(Math.random() * 250);
  let randomObstacleWidth = Math.floor(Math.random() * 250) + 100;
  obstacles.push(
    new Obstacles(randomObstaclePosition, canvas, ctx, randomObstacleWidth)
  );
}
