var fixrect,movingrect,rect1,rect2,rect3;
function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(300,200,40,40);
  rect1=createSprite(250,200,40,40);
  rect2=createSprite(200,200,50,50);
  rect3=createSprite(100,200,50,50);
  fixrect.shapeColor="red"
  movingrect.shapeColor="red"
  rect1.shapeColor="orange"
  rect2.shapeColor="pink"
  rect3.shapeColor="blue"


  fixrect.debug=true
  movingrect.debug=true
}

function draw() {
  background(00);
  rect2.x=mouseX
  rect2.y=mouseY
  if (isTouching(rect1,rect2)){
  rect1.shapeColor="green"; rect2.shapeColor="green";

  }
 else {
     rect1.shapeColor="orange"
    rect2.shapeColor="pink"


 }


  drawSprites();
}
