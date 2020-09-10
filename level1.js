class Level1 {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.8,
          friction:1.0,
          density:1.0
      }
      this.body = Bodies.rectangle(x,y,30,50,options);

      this.image = loadImage("l1.png");
      this.visibility = 255;

      World.add(world, this.body);


    }
    display(){
      if(this.body.speed<3){
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, 30, 50);
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        image(this.image, this.body.position.x, this.body.position.y, 30, 50);
        pop();
      }
    }
  };