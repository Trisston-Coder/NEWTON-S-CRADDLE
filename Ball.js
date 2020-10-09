class Ball{

    constructor(x,y){
      var options ={
         isStatic: false,
         restitution: 0.7,
         friction: 0.9,
         density: 1.4
        }
      this.body = Bodies.circle(150, 200, 25,options);
      World.add(world, this.body);
    }

    display(){
       this.radius = 27;
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       ellipseMode(RADIUS);
       fill("grey");
       ellipse(0,0, this.radius, this.radius)
       pop();
    }
}