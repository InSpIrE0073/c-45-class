var BGimage
var Tosan,Tosanimage;
var Scubby,Scubbyimage;
var obstacles,obstaclesimage;

function preload (){
BGimage=  loadImage("Images/BAckground.jpg")
Tosanimage=  loadImage("Images/chursh.png")
Scubbyimage = loadImage("Images/CT.png")
obstaclesimage = loadImage("Images/GLow.gif")
}


function setup() {
  createCanvas(displayWidth,displayHeight);
Tosan=createSprite(50,displayHeight-240,50,80);
Tosan.addImage(Tosanimage);
Tosan.scale = 0.5;
Scubby=createSprite(displayWidth-100,displayHeight-240,50,80);
Scubby.addImage(Scubbyimage);
Scubby.scale = 0.5;
obstacles=createSprite(displayWidth/2,displayHeight-240,50,80);
obstacles.addImage(obstaclesimage);
obstacles.scale = 0.1;


  } 
 

function draw() {
  background(BGimage);  
drawSprites()

}