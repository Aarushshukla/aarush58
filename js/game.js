class Game {
	constructor() {
	}
	getState() {
		var databaseref = database.ref('gameState')
		databaseref.on("value", (data) => {
			gameState = data.val()

		})
	}

	updateState(state) {
		database.ref('/').update({
			gameState: state
		})
	}

	start() {
		form = new Form()

		form.display()

		player = new Player()
		player.getCount()


		car1=createSprite(100,200)
		car2=createSprite(300,200)
		car3=createSprite(400,200)
		car4=createSprite(700,200)
cars=[car1,car2,car3,car4]

	}

play(){

Player.getPlayerInfo()
if (allPlayers !== undefined){

var index=0
var x=100;
var y;

for(var plr in allPlayers){


index=index+1	
x=x+100
y=displayHeight-allPlayers[plr].distance

cars[index-1].x=x;
cars[index-1].y=y;

if (index === player.index){
	cars[index - 1].shapeColor = "red";
	camera.position.x = displayWidth/2;
	camera.position.y = cars[index-1].y;
  }
 
}



}

	drawSprites()
}







}