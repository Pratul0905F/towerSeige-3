 const Engine = Matter.Engine     
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world,Matter
var holder,ball,ground
var stand1,stand2
var ball
var slingshot
var polygon_img
var score=0
function preload() {
//polygon_img=loadImage("polygon.png")    
}
function setup () {
createCanvas(900,400)    
engine = Engine.create()
world = engine.world
ground = new Ground()
stand1 = new Stand(390,300,250,10)
stand2 = new Stand(700,300,200,10)
//level one 
block1 = new Block(300,275,30,40)
block2 = new Block(330,275,30,40)
block3 = new Block(360,275,30,40)
block4 = new Block(390,275,30,40)
block5 = new Block(420,275,30,40)
block6 = new Block(450,275,30,40)
//level two
block7 = new Block(330,235,30,40)
block8 = new Block(360,235,30,40)
block9 = new Block(390,235,30,40)
block10 = new Block(420,235,30,40)
block11 = new Block(450,235,30,40)
block12 = new Block(480,235,30,40)
//level three
block13 = new Block(360,195,30,40)
block14 = new Block(390,195,30,40)
block15 = new Block(420,195,30,40)
//top
block16 = new Block(390,155,30,40)
//set 2 for second stand
// level one
block17 = new Block(640,275,30,40)
block18 = new Block(670,275,30,40)
block19 = new Block(700,275,30,40)
block20 = new Block(730,275,30,40)
block21 = new Block(760,275,30,40)
//level two
block22 = new Block(670,200,30,40)
block23 = new Block(700,200,30,40)
block24 = new Block(730,200,30,40)
//top
block25 = new Block(700,150,30,40)
//ball holder with slings
ball = Bodies.circle(50,200,20)
World.add(world,ball)

slingshot = new Slingshot(this.ball,{x:100,y:200})
Engine.run(engine)

}
function draw(){
background(56,44,44)
textSize(20)
text("Score:" +score,800,100)
textSize(20)
fill("lightyellow")
text("Drag the Hexagonal Stone and Release it, to launch it toward the block",100,30)

ground.display()
stand1.display()
stand2.display()
 
fill("skyblue")
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
fill("pink")
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
fill("turquoise")
block13.display()
block14.display()
block15.display()
fill("grey")
block16.display()
fill("skyblue")
block1.display()
block18.display()
block19.display()
block20.display()
block21.display()
fill("turquoise")
block22.display()
block23.display()
block24.display()
fill("pink")
block25.display()
fill("gold")
imageMode(CENTER)
//image(polygon_img,ball.position.x,ball.position.y,40,40)
slingshot.display()
ellipse(ball.position.x,ball.position.y,20)
}
function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingshot.fly()
console.log("working")
}

function keyPressed(){
slingshot.attach(this.ball)
}





