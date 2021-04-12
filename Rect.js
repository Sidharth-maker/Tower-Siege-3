class Rect {
    constructor(x,y,width,height) {
      var options = {
        'isStatic':false,
        'friction':10,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed < 5){
        var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
      }
      
      else{
        push();
        this.Visiblity = this.Visiblity-5;
        tint(255,this.Visiblity);
        World.remove(world,this.body);
        pop();
      }

    }

    score(){
      if(this.Visiblity < 0 && this.Visiblity > -1005 ){
        Score++;
      }
    } 

  };
