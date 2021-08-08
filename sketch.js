var trackImage, pathImg
var boy, boyRunning

function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  boyRunning = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path= createSprite(200,200,200,600);
  path.addImage(pathImg)
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(50,180,20,50);
  boy.addAnimation("running", boyRunning);
  boy.scale = 0.1;
}


function draw() {
  background(0);

  boy.x = World.mouseX

  edges= createEdgeSprites();
  boy.collide(edges);

  if (path.y > 600){
    path.y = 200;
 }
  drawSprites();
}
 