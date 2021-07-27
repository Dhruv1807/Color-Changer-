var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400); 
  
  red = createSprite(100, 50, 30, 10);
  red.shapeColor = "red";
  green = createSprite(250, 50, 30, 10);
  green.shapeColor = "green";
  //btn_red = createButton("RED");
 // btn_red.position(100, 50);
  

 // btn_green = createButton("GREEN");
 // btn_green.position(250, 50);
 

}
/*function red_bg()
{
  r = 255;
  g = 0;
  b = 0;
}
function green_bg()
{
  r = 0;
  g = 255;
  b = 0;
} */
function draw() {
  background(r,g,b);

  if(mousePressedOver(red)){
    r = 255;
    g = 0;
    b = 0;
  }
  if (mousePressedOver(green)){
    r = 0;
    g = 255;
    b = 0;
  }

  drawSprites();
}
