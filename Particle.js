class Particle {
    constructor() {
        var options = {
            restitution: 2,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.part = Bodies.circle(mouseX, 50, this.r, options);
         this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.part);
    }
    fly(){
        this.part = null;
       // isStatic:false
    }
    display() {

        //var pos = this.particle.position;
        //var angle = this.particle.angle;

        push();
        translate(mouseX,50);
        rotate(PI/2);
        imageMode(CENTER);
        noStroke();
        fill(random(0,255));
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};