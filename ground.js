class ground{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
          'restitution':0,
          'density':1,
          'friction':0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
       
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
      }
}
// in sketch can u modify the ground place it a little bit  high its too low and whne i press the up arrow then its going up 
// ill put a pic in whatsapp check it 
// should i take u to the sketch ???
//ok
//change the name of the class to small letter of first coz else it does show error but gives error
//your file name is 'ground' but class is'Ground'
//do this for dustbin and paper also
//ok