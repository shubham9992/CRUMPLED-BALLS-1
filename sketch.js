
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;
//var ground,ball;
var ground;
var paper,count=1;
var dustbinM,dustbinL,dustbinR;

function preload()
{
	
}

 function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

 	//Create the Bodies Here.


	ground=new Ground(800,height-10,1600,10);
	dustbinL=new Dustbin(1290,610,20,100);
	dustbinM=new Dustbin(1400,660,200,20);
	dustbinR=new Dustbin(1510,610,20,100);
	paper=new PAPER(50,600,15);
	Engine.run(engine);

	// var group_options={
// 	isStatic:true
// }
// var ball_options={
// 	restitution:1.5
// }
// ground=Bodies.rectangle(200,390,200,20,group_options);
// World.add(world,ground);

// ball=Bodies.circle(200,100,20,ball_options);
// World.add(world,ball);
  
 }


 function draw() {
   rectMode(CENTER);
   Engine.update(engine);
   background(0);
//    rect(ground.position.x,ground.position.y,200,20);
//    ellipseMode(RADIUS);
//    ellipse(ball.position.x,ball.position.y,20,20);

	ground.display();
	dustbinL.display();
	dustbinM.display();
	dustbinR.display();
	paper.display();
	// if(keyPressed()==1)
	// {
	// 	;
	// }
	
    drawSprites();
 
}
 function keyPressed(){
     if(keyCode===UP_ARROW){
           Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
		//    Body.setAngle(paper.body,PI/4);
		  // return true;
        }
		//return false;
    }   