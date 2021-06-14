var wallpaper, bg, downpipe1,downpipe2,downpipe4,dp1

function preload(){
   wallpaper=loadImage("backgreounfimg.png")
   downpipe1= loadImage("downpipe1.png")
   downpipe2= loadImage("d1.png")
   //downpipe4= loadImage("downwardpipe4.png")
   //dwp5= loadImage("downwardpipe5small.png")
   fb= loadImage("fappy.png")
   up1= loadImage("upwardimg1.png")
  // up3= loadImage("upwardimg3.gif")
up2= loadImage("upwardpipe2img.png")


}

function setup() {
  createCanvas(1200, 500);
bg=createSprite(600,300,50,50)
bg.addImage(wallpaper);
bg.scale=4.5;
bird= createSprite(200,200,20,20)
bird.addImage(fb);
bird.scale= 0.3;


  
}

function draw() {
  
  background(180);
  bg.velocityX= - 5;
  if (bg.x < 0){
    bg.x = bg.width/2;
    
  }
  if(keyDown("space")) {
    bird.velocityY = -12;
   
}
bird.velocityY = bird.velocityY + 0.8

  spawnPipes();
  
  
  
  

  drawSprites();
}
function spawnPipes(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(1200,350,10,40);
    obstacle.velocityX = -(6  );
    
     //generate random obstacles
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: obstacle.addImage(downpipe1);
               break;
       case 2: obstacle.addImage(downpipe2);
               break;
       case 3: obstacle.addImage(downpipe4);
               break;
       case 4: obstacle.addImage(dwp5);
               break;
       
       
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     //obstacle.scale = 0.5;
     //obstacle.lifetime = 300;
    
    //add each obstacle to the group
     //obstaclesGroup.add(obstacle);
  }
 }
 

