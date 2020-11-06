var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1 = createSprite (0,400,50,30);
  rect1.shapeColor = "yellow"
  
  rect2 = createSprite (1200,400,50,30);
  rect2.shapeColor = "hotpink"
  
rect1.velocityX = 4
rect2.velocityX = -4

}

function draw() {
  background(0,0,0);  

bounceOff(rect1,rect2)
bounceOff(movingRect,fixedRect)
 
  drawSprites();
}

