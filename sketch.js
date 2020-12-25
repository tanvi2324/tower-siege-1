const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,ground1,ground2;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var  slingShot;

function preload(){
    polygon=loadImage("polygon.png")

}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(600,height,1200,20);
    
    block8 = new Box(330,235,30, 40);
    block9 = new Box(360,235,30, 40);
    block10 = new Box(390,235,30, 40);
    block11 = new Box(420,235,30, 40);
    block12 = new Box(450,235,30, 40);
    block13 = new Box(360,195,30, 40);
    block14 = new Box(390,195,30, 40);
    block15 = new Box(410,195,30, 40);
    block16 = new Box(390,155,30, 40);

polygon=Bodies.circle(50,200,20);
World.add(world,polygon)
    slingshot = new Slingshot(this.polygon,{x:100, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    ground1.display();
    ground2.display();

    polygon.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
