class Box{
    constructor(x,y,width,height){
        var options = {
            restitution:  0.5,
            friction: 1.3,
            density:1.0
          }
          this.Body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
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
            fill("orange");
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }

}