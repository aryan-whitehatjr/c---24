
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var Paper, d1,d2,d3;
var Ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Paper = new paper(100,670,10);
d1 = new dustbin(600,670,200,20);
d2 = new dustbin(500,660,20,200);
d3 = new dustbin(700,660,20,200);
Ground = new ground(400,690,2500,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,0);
  // if(keyDown(32))
  // {
  // Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
  // }
  Paper.display();
  d1.display();
  d2.display();
  d3.display();
  Ground.display();  
  drawSprites();
 
}
function keyPressed(){
 	if(keyCode === UP_ARROW) {
   Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});

	}
  }


