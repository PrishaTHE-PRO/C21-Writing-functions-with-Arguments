var frect,mrect;
var G1,G2,G3,G4;


function setup() {
  createCanvas(1200,800);
frect = createSprite(500,200,50,80);
mrect = createSprite(400,200,80,30);

G1 = createSprite(200,100,50,50);
G2 = createSprite(300,100,50,50);
G3 = createSprite(400,100,50,50);
G4 = createSprite(500,100,50,50);

G1.shapeColor = "red";
G2.shapeColor = "yellow";
G3.shapeColor = "green";
G4.shapeColor = "blue";



frect.shapeColor="blue";
mrect.shapeColor="yellow";

mrect.debug=true;
frect.debug=true;

frect.velocityY=5;
mrect.velocityY=-5;
}

function draw() {
  background(0);  

  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  if(isTouching(mrect,G4)){
    mrect.shapeColor="red";
    G4.shapeColor="pink";
  }
  else{
    G4.shapeColor="blue";
mrect.shapeColor="yellow";
  }
  BounceOff(mrect,frect);
  drawSprites();
}