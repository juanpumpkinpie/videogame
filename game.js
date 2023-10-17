const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");
console.log(context);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGTH = (canvas.heigth = 600);

const ImagePlayer = new Image();
ImagePlayer.src = "./assets/shadow_dog.png";

function animate() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
  context.fillRect(50, 50, 100, 100);
  requestAnimationFrame(animate);
}

animate();
