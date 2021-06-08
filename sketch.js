const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies 

var play;
var gameState = 0;
function preload(){
}

function setup(){
    createCanvas(1600,800)
    engine = Engine.create();
    world = engine.world;
    hi = createSprite(20,20,20,20);
    play = createButton("PLAY");

}

function draw(){
    background(0);
    Engine.update(engine);

    if(gameState===10){
        test1 = new between();
        test1.display();
        play.hide();
    }
    if(gameState===0){
        textSize(25);
        text("Game",800,80);
        play.position(750,280);
        play.size(200,50);
        play.mousePressed(test);
    }
    
    drawSprites();
}

function test(){
    gameState = 10;
}
