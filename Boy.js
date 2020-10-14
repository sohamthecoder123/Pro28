class Boy{
    constructor(x, y, w, h){
        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("boy.png");
        this.sunImg = loadImage("sun.png");
        this.cloudImg = loadImage("cloud.png");
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    display(){
        //var pos = this.body.position
        push();
        //translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.w, this.h);
        image(this.sunImg, this.x-200, this.y - 450, 250, 250);
        image(this.cloudImg, width/2 - 250, this.y - 450, 700, 250);
        pop();
    }
}
