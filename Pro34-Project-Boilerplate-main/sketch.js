
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundd
var helicopter
var medicine
function preload (){

  backgroundd = loadImage("background.webp")
  helicopter = loadImage("helicopter.webp")
  medicine = loadImage("medicine.png")
}


function setup() {
  createCanvas(1530,630);

  engine = Engine.create();
  world = engine.world;
 var  helicopter_options = {
    isStatic:true,
  }
  helicopter = Bodies.rectangle(50,-150,10,10,helicopter_options)
  helicopter.scale=0.5
  World.add(world,helicopter)
 
 //creating medicine 
  var medicine_options = {
    restitution:0.05,
  }
 // medicine = createImg(medicine.png)
 // medicine.position(50,50)
 // medicine.size(50,50)
  
  if(keyIsDown(RIGHT_ARROW)){
  medicine = Bodies.rectangle(50,50,50,50,medicine_options)
  World.add(world,medicine)
  }
}


function draw() 
{
  background(backgroundd);
  Engine.update(engine);
 
  
 image (helicopter.position.x,helicopter.position.y,200,200)
  rect(medicine.position.x,medicine.position.y,50,50)
}

