var ball

function setup() {
  createCanvas(400, 400);
  ball=new Bounce()
}

function draw() {
  background(220);
  ball.show()
  ball.move()
  ball.turn()
}