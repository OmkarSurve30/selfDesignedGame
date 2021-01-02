var blueballoon, greenballoon, pinkballoon, redballoon, akm, bomb,
Bullet, background;

var blueballoonImage, greenballoonImage, pinkballoonImage, redballoonImage, bombImage, akmImage, backgroundImage, BulletImage;

var bulletFiringSound, burstingBalloonSound;

var score = 0;

function preload(){
 backgroundImage = loadImage("../images/ground.png");
 akmImage = loadImage("../images/gun.png");
 blueballoonImage = loadImage("../images/blue_balloon0.png");
 greenballoonImage = loadImage("../images/green_balloon0.png");
 pinkballoonImage = loadImage("../images/pink_balloon0.png");
 redballoonImage = loadImage("../images/red_balloon0.png");
 BulletImage = loadImage("../images/bullet.png");
 bombImage = loadImage("../images/bomb.png");

 bulletFiringSound = loadSound("bulletfiring.wav");
 burstingBalloonSound = loadSound("burstingballoon.wav");
 //checkPointSound = loadSound("checkPoint.mp3")
}

function setup() {
  createCanvas(displayWidth, 350);
  
  
  
  //Creating background
  background = createSprite(0,0,1000,800);
  background.addImage(backgroundImage);
  background.scale = 1;
  
  // creating akm  
  akm = createSprite(100,400,20,50);
  akm.addImage(akmImage); 
  akm.scale = 0.1;
  
  
  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group(); 
  BombGroup = new Group();
  BulletGroup= new Group();
  
 
}

  

function draw() {

  
  
   //moving the ground
   background.velocityX = -4;

if (background.x < 0){
    background.x = background.width/2;
    }
  
 
  akm.y = World.mouseY;
  
  
  
  
//release the arrow on pressing the space key 
if (keyDown("space")) {
    createBullet();
    bulletFiringSound.play(); 
  }

//creating balloons randomly
var select_balloon = Math.round(random(1,4));

  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      createBomb();
    } 
  }
  
   if (BulletGroup.isTouching(redB)) {
      redB.destroyEach();
      BulletGroup.destroyEach();
      burstingBalloonSound.play();
      score = score+4;
}




   if (BulletGroup.isTouching(greenB)) {
      greenB.destroyEach();
      BulletGroup.destroyEach();
      burstingBalloonSound.play();
      score = score+1;
}



    if (BulletGroup.isTouching(blueB)) {
       blueB.destroyEach();
       BulletGroup.destroyEach();
       burstingBalloonSound.play();
       score = score+2;
}



    if (BulletGroup.isTouching(BombGroup)) {
       BombGroup.destroyEach();
       burstingBalloonSound.play();
       BulletGroup.destroyEach();
       score = score-5;
}
  
  
  
  
  drawSprites();
  console.log(score);
  text("Score " + score,500,30)
  
  
//creating redBallon  
function redBalloon() {
  var red = createSprite(950,Math.round(random(20, 370)), 10, 10);
  red.addImage(redballoonImage);
  red.velocityX = -3;
  red.lifetime = 250;
  red.scale = 0.1;
  redB.add(red);
}

//creating blueBallon
function blueBalloon() {
  var blue = createSprite(950,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueballoonImage);
  blue.velocityX = -3;
  blue.lifetime = 250;
  blue.scale = 0.1;
  blueB.add(blue);
}

//creating greenBallon
function greenBalloon() {
  var green = createSprite(950,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenballoonImage);
  green.velocityX = -3;
  green.lifetime = 250;
  green.scale = 0.1;
  greenB.add(green);
}

function createBomb() {
  var Bomb = createSprite(950,Math.round(random(20, 370)), 10, 10);
  Bomb.addImage(bombImage);
  Bomb.velocityX = -3;
  Bomb.lifetime = 250;
  Bomb.scale = 0.01;
  BombGroup.add(Bomb);
  console.log("hi");
}
  

function createBullet() {
  Bullet= createSprite(100, 400, 1, 1);
  Bullet.addImage(BulletImage);
  Bullet.scale = 0.7;
  Bullet.x = 360;
  Bullet.y = akm.y;
  Bullet.velocityX=4;
  Bullet.scale=0.3;
  Bullet.lifetime=200;
  BulletGroup.add(Bullet);
  return Bullet
 }
  
  
}



