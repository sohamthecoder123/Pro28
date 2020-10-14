
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1, ground1;
var boy1;
var stone1;
var mango1, mango2, mango3, mango4, mango5;
var launcher;

function preload()
{
	boy=loadImage("boy.png");
	tree = loadImage("tree.png");
	sun = loadImage("sun.png");
	cloud = loadImage("cloud.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//tree1 = new Tree(1300, height/2, 500, 725);

	ground1 = new Ground(width/2, height-5, width, 10);

	//boy1 = new Boy(400, tree1.y/2 + height/2 + 55, 300, 500);
	
	stone1 = new Stone(300, 470, 75, 75);

	var mangRad = 50;
	mango1 = new Mango(1300, 175, mangRad);
	mango2 = new Mango(1200, mango1.y-50, mangRad);
	mango3 = new Mango(1150, mango1.y+50, mangRad);
	mango4 = new Mango(1450, mango3.y, mangRad);
	mango5 = new Mango(1400, mango2.y, mangRad);

	launcher = new Sling(stone1.body, {x:300, y:470});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  ground1.display();
  image(boy, 250, 350, 300, 500);
  image(tree, 1050, 0, 500, 725);
  image(sun, 0, 50, 250, 250);
  image(cloud, 50, 50, 750, 250);

  //tree1.display();
  //boy1.display();
  stone1.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  launcher.display();

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body, {x:300, y:470});
		launcher.attach(stone1.body);
	}
}
function detectCollision(lstone, lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
if(distance<=lmango.r+lstone.w/2){
	Matter.Body.setStatic(lmango.body, false);
}
}