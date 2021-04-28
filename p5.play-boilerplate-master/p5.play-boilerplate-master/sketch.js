const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var ball;


function setup() {
  engine=Engine.create();
  world = engine.world;
  createCanvas(800,400);
  var ground_options = {
  isStatic:true  
  
  }
  ground = Bodies.rectangle(150,390,500,20,ground_options)
  World.add(world,ground)
  var ball_options = {
  restitution:2, 
    
    }
    ball = Bodies.circle(200,150,20,ball_options)
    World.add(world,ball)
}

function draw() {
  background(0);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,500,20);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}