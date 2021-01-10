class Pig{
    constructor(x,y){
        var options = {
            restitution:  0.8,
            friction: 0.3,
            density:1.0
          }
          this.Body = Bodies.rectangle(x,y,50,50,options);
          this.width = 50;
          this.height = 50;
          World.add(myWorld,this.Body);
        
    }
        display(){
            var pos = this.Body.position;
            var angle = this.Body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            stroke("green");
            strokeWeight(3);
            fill("green");
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }

}