var box;

function setup() {
  createCanvas(400, 400);
  box= createSprite(200,200,50,50);
}

function draw() {
  background(220);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x= box.position+5
  }

  drawsprites();
}