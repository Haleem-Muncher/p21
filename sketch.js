var bullet,wall;
var speed,thick,weight;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random (30,52);
  thick = random (22,83);
  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor="blue";

  wall = createSprite (1200,200,thick,height/2);
  wall.shapeColor = "purple";
}

function draw() {
  background(0);  

if (hasCollided(bullet,wall)) {
  bullet.velocityX=0;
  var damage= 0.5 * weight * speed * speed /(thick * thick * thick);

  if (damage > 10){
    wall.shapeColor=color(255,0,0);
  }

  if (damage < 10 ){
    wall.shapeColor = color(0,255,0);
  }

  
}

  drawSprites();
}

function hasCollided (lbullet, lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge ){
 return true;
  }
  return false;
}