const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var backgroundImg; 
var shuttleImg; 
var missileImg;
var asteroidImg;
score = 0;

function preload(){
    backgroundImg = loadImage("background.jpg")
    shuttleImg = loadImage("space shuttle.png")
    missileImg = loadImage("missile.png")
    asteroidImg = loadImage("asteroid.png")
}

function setup(){
    createCanvas(1000,1000);
    
    missile = createSprite(500,900,40,40)
    missile.addImage("missile",missileImg);
    missile.scale = 0.4; 

   
   shuttle = createSprite(500,900,40,40)
    shuttle.addImage("shuttle",shuttleImg);
    shuttle.scale = 0.8; 

   asteroid = createSprite(500,200,20,20)
    asteroid.addImage("asteroid",asteroidImg);
   asteroid.scale = 1.0; 
}

function draw() {
  background(backgroundImg);
  text("score"+score,200,100,50)

 if(keyIsDown(LEFT_ARROW)){
    shuttle.x = shuttle.x-10
    missile.x = missile.x-10
    
 }

 if(keyIsDown(RIGHT_ARROW)){
  shuttle.x = shuttle.x+10
  missile.x = missile.x+10
  
 }
 if(keyIsDown(UP_ARROW)){
  missile.y = missile.y-150

 }


 //if ( keyIsDown("SPACE")){
 // missile.y = missile.y+50;

 //}
  /*if( frameCount%80===0){
      asteroid.push(new aster(700,200,50));{
    for (var j = 0; j> asteroid.length;j++)
    asteroid[j].display();

      }
  }*/
 /* asteroid = createSprite(500,200,20,20)
   asteroid.addImage("asteroid",asteroidImg);
   asteroid.scale = 1.0;*/

   asteroid.y+=5;
  // missile.y = shuttle.y-50;
   if(asteroid.isTouching(missile)){
   asteroid.destroy();
   missile.destroy();
   score=1 
   text("score"+score,200,100,50 );
   }
   
   
   
drawSprites();
}
