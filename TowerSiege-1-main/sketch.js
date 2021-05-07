const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function preload(){
    polygonImg= loadImage("polygon.png")
}
function setup(){
var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;






    ground = new Ground(600,height,1200,20);
    stand1 = new Stand(400,300,250,10)
    b1 = new Block(300,275,30,40)
    b2 = new Block(330,275,30,40)
    b3 = new Block(360,275,30,40)
    b4 = new Block(390,275,30,40)
    b5 = new Block(420,275,30,40)
    b6 = new Block(450,275,30,40)
    b7 = new Block(480,275,30,40)
    b8 = new Block(360,235,30,40)
    b9 = new Block(390,235,30,40)
    b10 = new Block(420,235,30,40)
    b11 = new Block(390,195,30,40)

    



    polygon= Bodies.circle(50,200,20)
    World.add(world,polygon)
    sling= new SlingShot(this.polygon,{x:100,y:200})
}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    stand1.display();
    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)
    b1.display();
    b2.display();
    b3.display();
    b5.display();
    b6.display();
    b7.display();
    b4.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    sling.display();

}