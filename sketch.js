var roof,
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200,100,50)
	bobObject2 = new Bob(300,100,50)
	bobObject3 = new Bob(400,100,50)
	bobObject4 = new Bob(500,100,50)
	bobObject5 = new Bob(600,100,50)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
}



