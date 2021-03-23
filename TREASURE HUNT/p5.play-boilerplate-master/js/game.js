class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gamestate');
      gameStateRef.on("value",function(data){
         gamestate = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gamestate: state
      });
    }
  
    async start(){
      if(gamestate === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      d1 = createSprite(100,200);
      d1.addImage("car1",diver);
      d2 = createSprite(300,200);
      d2.addImage("car2",diver);
      d3 = createSprite(500,200);
      d3.addImage("car3",diver);
      d4 = createSprite(700,200);
      d4.addImage("car4",diver);
      divers = [d1,d2,d3,d4];
      
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
     // player.getCarsAtEnd();
      
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          divers[index-1].x = x;
          divers[index-1].y = y;
         // console.log(index, player.index)
  
         
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            divers[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10;
        player.update();
      }
  
      if(player.distance > 3860){
        gameState = 2;
        player.rank +=1;
        Player.updateCarsAtEnd(player.rank);
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      console.log(player.rank);
    }
  }