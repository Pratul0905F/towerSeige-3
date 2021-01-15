class Block{
constructor(x,y,width,height){
var options={
restitution:0.4,
friction:0.0
}
this.v=255
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add(world,this.body)
}
display(){
if(this.body.speed<5){
var angle = this.body.angle
var pos = this.body.position
push()
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop()
}
else{
push()
World.remove(world,this.body)
tint(255,this.v)
this.v=this.v-5
pop()
}
if(this.v<0 && this.v>-10){
score=score+1

}
}
}