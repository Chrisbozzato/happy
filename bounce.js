class Bounce{
  constructor(xSpeed,ySpeed){
  this.pos=createVector(width/2,height/2)
  this.vel=createVector(1,1)  
  this.acc=createVector(0.01,0.01)
  }


show(){
  fill(255)
  ellipse(this.pos.x,this.pos.y, 55,70)
  fill(0)
  ellipse(this.pos.x+10,this.pos.y-10,10,10)
  ellipse(this.pos.x-10,this.pos.y-10,10,10)
  noFill();
  arc(this.pos.x, this.pos.y+20, 10, 10, 0, PI + QUARTER_PI, CHORD)
  
}
  move(){
   this.pos.x += this.vel.x
   this.pos.y += this.vel.y
   this.vel.add(this.acc)
  }
  turn(){
   if(this.pos.x+26 >= width || this.pos.x-26 <= 0){
     this.vel.x *= -1
     this.acc.x *= -1
   }
   if(this.pos.y+35 >= height || this.pos.y-35 <= 0){
     this.vel.y *= -1
     this.acc.y *= -1
   }
    if(this.acc.x >= 5 || this.acc.x <= -5) this.acc.x -= 0.1
    if(this.acc.y >= 5 || this.acc.y <= -5) this.acc.y -= 0.1

  }
}