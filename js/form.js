class Form{
constructor(){
  this.input=createInput("name") 
  this.button=createButton("start")
  this.button1=createButton("reset")
  this.greeting=createElement('h3')

}
display(){

	var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);

this.input.position(250,250)	
this.button.position(280,280)
this.button1.position(380,290)

this.button.mousePressed( ()=>{
this.input.hide()
this.button.hide()	

player.name=this.input.value()
playerCount=playerCount+1
player.index=playerCount
player.update()
player.updateCount(playerCount)
this.greeting.html("hello" + player.name)	
this.greeting.position(250,250)
})
this.button1.mousePressed(()=>{
  player.updateCount(0)
game.updateState(0)
})
}

}