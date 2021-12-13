var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score = 0;
var player, form, game;
var player1,player2;
var players;
var player_img;
var player1score =0;
var player2score =0;
var jet1_Img, jet2_Img;
var alien_Img;
var aliens;
var aliensGroup;
var bulletGroup;
var bullet; 
var bulletImg;
var back_img;
function preload(){
 back_img = loadImage("images/space_img.jpg");
 jet1_Img = loadImage("images/Jet1.png");
 jet2_Img = loadImage("images/Jet2.png");
 alien_Img = loadImage("images/alien_img.png");
 bg_Img = loadImage("images/wallpaper1.png");
 bulletImg = loadImage("images/Ohb8MN.png");
 aliensGroup = new Group();
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  bullet = createSprite(0, 0, 20, 20);
  bullet.addImage(bulletImg);
  bullet.velocityY = -6;
  game.getState();
  game.start();
  }

function draw() {
  background(bg_Img);

  if (frameCount % 40 === 0) {
    aliens = createSprite(random(100, 1500), 0, 20, 20);
    aliens.addImage(alien_Img);
    aliens.velocityY = 3;
    aliens.scale = 0.5;
    aliensGroup.add(aliens);
}

  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
  if (playerCount === 2) {
    game.update(1);
  }
    
}
