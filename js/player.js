class Player{
    constructor(){
this.name=null
this.distance=0
this.index=null 
}

getCount() {
    var databaseref = database.ref('playerCount')
    databaseref.on("value", (data) => {
        playerCount = data.val()

    })
}

updateCount(count) {
    database.ref('/').update({
        playerCount: count
    })
}

update(){
	var playerindex='players/player' + this.index
	database.ref(playerindex).set({
        name: this.name,
		distance:this.distance

})
}

static getPlayerInfo(){
    var databaseref = database.ref('players')
    databaseref.on("value", (data) => {
        allPlayers = data.val()
})
}
}
