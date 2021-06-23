class dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      this.image = loadImage ("sprites/dustbingreen.png")
      
      World.add(world, this.body);
    }
    display(){
     
      imageMode(CENTER);
      fill(255);
      image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
     
    }
  };//