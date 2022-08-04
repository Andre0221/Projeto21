
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var engine, world;

function preload(){
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options ={

    restitution:0.5,
    density:1.2
		
	}

	var ground_options ={

		isStatic:true
			
		}



	ball = Bodies.circle(200,250,20,ball_options);
	World.add(world ,ball);

	Engine.run(engine);

	groundObj=new Ground(400,470,400,10,ground_options);
	leftSide=new Ground(10,20,10,20,ground_options);
}


function draw() {
  rectMode(CENTER);
  background(0);

   groundObj.display();
   leftSide.display();

   elipse(ball.position.x, ball.position.y, 20);

  drawSprites();
 
}



