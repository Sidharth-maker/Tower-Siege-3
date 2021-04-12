class Polygon {
  constructor(x,y,width,height) {
    var options = {
      'isStatic':false,
      'friction':1,
    }
    this.image = loadImage("polygon.png")
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);
  }
};