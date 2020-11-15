var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var redBox1,redBox2,redBox3; 
 
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor= "black"


	boxOptions ={
			//'restitution':1,
			'isStatic':true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , boxOptions);
	World.add(world, packageBody);
	
groundOptions ={
	'isStatic' : true
}	
	ground = Bodies.rectangle(width/2, 650, width, 10 , groundOptions );
 World.add(world, ground);


	Engine.run(engine);

redPanelOptions ={
	'isStatic' : true
	}
		box = Bodies.rectangle(20,200,400,650, redPanelOptions);
		World.add(world,box);

	redBox1 = createSprite(400,650,200,20)
	redBox1.shapeColor = "red"	
	redBox2 = createSprite(300,615,20,90)
	redBox2.shapeColor = "red"
	redBox3 = createSprite(500,615,20,90)
	redBox3.shapeColor = "red"
	
}



function draw() {
Engine.update(engine)

  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  drawSprites();
 
}

function keyPressed() {
 	if (keyCode === DOWN_ARROW) {
     //Look at the hints in the document and understand how to make the package body fall only on
		Matter.Body.setStatic(packageBody,false);
 }
}


