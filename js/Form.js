class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("Space Shooter");
        this.title.position(400, 100);
        this.title.style('font-size', '70px');
        this.title.style('font-family', 'Rockwell');
        this.title.style('color', 'Blue');
        this.input.position(550,300);
        this.input.style('width', '200px');
        this.input.style('height', '30px');
        this.input.style('background', 'white');
        this.button.position(610,380);
        this.button.style('width', '100px');
        this.button.style('height', '40px');
        this.button.style('background', 'Blue');
        this.button.style('font-family', 'Arial Black');
        this.reset.position(900, 500);
        this.reset.style('width', '100px');
        this.reset.style('height', '40px');
        this.reset.style('font-family', 'Arial Black');
        this.reset.style('background', 'Blue');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(500,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-family', 'Arial');
            this.greeting.style('font-size', '50px');
        });


        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            database.ref("/").update({
            players: null,
            finishedPlayers: 0,
          });});
    }
}