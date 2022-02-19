var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground(400,670, 800,10)
	 left_wall = new Ground(600,630,10,90)
	 right_wall = new Ground(700,630,10,90)
	 

	Engine.run(engine);

var ball_options={ 

	isStatic:false,
	restitution: 0.3,
	friction: 0,
	density: 1.2  
} 
  
ball = Bodies.circle(200,100,20,ball_options);
World.add(world, ball);


}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
 ground.display()
 left_wall.display()
 right_wall.display()
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:35,y:-35})
  }

}


