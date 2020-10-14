class Stone{
    constructor(x, y, w, h) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.2,
            'isStatic':false
        }
        this.w = w;
        this.h = h;
        this.image = loadImage("stone.png");
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
      }
}