const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var diver,bg;
var gamestate = 100;
var pirate1,pirate2,pirate3,pirate4;
var boat1,boat2,boat3,boat4;
var form,game,database,playerCount,player,d1,d2,d3,d4,divers;


function preload()
{
   diver = loadImage("IMAGES/diver.png");
   bg = loadImage("IMAGES/BhQ8iO.jpg");
   bg2 = loadImage("IMAGES/bg2.jpg");
   p1img = loadImage("IMAGES/p1.png");
   p2img = loadImage("IMAGES/p2.png");
   p3img = loadImage("IMAGES/p3.png");
   p4img = loadImage("IMAGES/p4.png");
   bimg = loadImage("IMAGES/boat.png");
}


function setup() 
{
  createCanvas(windowWidth,windowHeight);

  database = firebase.database();
  game = new Game();
  game.getState();
  //game.start();


  engine = Engine.create();
  world = engine.world;
   
  
 
  

}

function draw()
 {

  Engine.update(engine);
 
  
  
 // if(gameState === 2){
   // game.end();
 // }
if(gamestate === 100)
  {
    background(bg2);

    textSize(30);
    fill(255,128,62);
    text("UNDERWATER TREASURE HUNT",windowWidth/2-240,30);

    textSize(25);
    fill(111,255,162);
    text("Goal of the Game: Help the pirate to collect the maximum treasure in the specified time and protect him ",30,100);
    text("from the sea monsters.",30,130)

    textSize(25);
    fill(255,187,187);
    text("Instructions:",30,195);

    textSize(20);
    fill("red");
    text("1. Press the 'START' button to start the game.",30,230);
    fill("orange");
    text("2. Use right, up and down arrow keys to move the diver.",30,260);
    fill("yellow");
    text("3. Overcome the obstacles and collect the treasure within the time limit.",30,290);
    fill(119,255,69);
    text("4. Collect the money bags to get extra lives(collecting 3 bags will give 1 extra life).",30,320);
    fill(96,233,255);
    text("5. Beware of the treasure guarded by the crabs.",30,350);

    textSize(25);
    fill(217,255,91);
    text("BEST OF LUCK!",windowWidth/2-130,400);

    button1 = createButton('START');
    button1.position(windowWidth/2-80,450);

    button1.mousePressed(()=>{
      button1.hide();
      console.log("hello");
      gamestate=0;
      console.log(gamestate);
      game.update(0);
      game.start();
    })

    

    drawSprites();
  }

 else if(gamestate === 0)
 {
  console.log(gamestate);
  background(bg);  

 

  boat1 = createSprite(70,80,10,10);
  boat1.addImage("b1",bimg);
  boat1.scale = 0.25;

  boat2 = createSprite(70,230,10,10);
  boat2.addImage("b2",bimg);
  boat2.scale = 0.25;

  boat3 = createSprite(70,380,10,10);
  boat3.addImage("b3",bimg);
  boat3.scale = 0.25;

  boat4 = createSprite(70,530,10,10);
  boat4.addImage("b4",bimg);
  boat4.scale = 0.25;

  
  pirate1 = createSprite(150,75,10,10);
  pirate1.addImage("p1",p1img);
  pirate1.scale = 0.18;

  pirate2 = createSprite(130,230,10,10);
  pirate2.addImage("p2",p2img);
  pirate2.scale = 0.1;

  pirate3 = createSprite(140,370,10,10);
  pirate3.addImage("p3",p3img);
  pirate3.scale = 0.18;

  pirate4 = createSprite(140,510,10,10);
  pirate4.addImage("p4",p4img);
  pirate4.scale = 0.2;


  /*this.input = createInput("Name");
  //this.button = createButton('Play');
  this.greeting = createElement('h2');
  this.title = createElement('h2');
  this.reset = createButton('Reset');


  this.title.html("Underwater Treasure Hunt");
  this.title.position(displayWidth/2 - 50, 0);

  this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
  //this.button.position(displayWidth/2 + 30, displayHeight/2);
  this.reset.position(displayWidth-100,20);

  /*this.button.mousePressed(()=>{
    this.input.hide();
    //this.button.hide();
    player.name = this.input.value();
    playerCount+=1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("Hello " + player.name)
    this.greeting.position(displayWidth/2 - 70, displayHeight/4);

  //})
*/

  

  drawSprites();

  if(playerCount === 4){
    game.update(1);
  }

 

 }

 else if(gamestate === 1){
  clear();
  game.play();
}

}