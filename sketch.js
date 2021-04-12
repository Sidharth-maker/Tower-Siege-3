
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var polygon
var ground1,ground2,ground3
var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10,rect11,rect12,rect13,rect14,rect15,rect16,rect17,rect18,rect19,rect20,rect21,rect22,rect23,rect24,rect25
var slingshot
var backgroundImg
var bg = "bg.png"
var Score = 0;

function preload() {
  getBackGroundColor();
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(405,530,200,10);
	ground2 = new Ground(630,450,150,10);
	ground3 = new Ground(400,698,900,20);

	rect1 = new Rect(345,520,20,40);
	rect2 = new Rect(365,520,20,40);
	rect3 = new Rect(385,520,20,40);
	rect4 = new Rect(405,520,20,40);
	rect5 = new Rect(425,520,20,40);
	rect6 = new Rect(445,520,20,40);
	rect7 = new Rect(465,520,20,40);

	
	rect8 = new Rect(365,480,20,40);
	rect9 = new Rect(385,480,20,40);
	rect10 = new Rect(405,480,20,40);
	rect11 = new Rect(425,480,20,40);
	rect12 = new Rect(445,480,20,40);

	rect13 = new Rect(385,440,20,40);
	rect14 = new Rect(405,440,20,40);
	rect15 = new Rect(425,440,20,40);

	rect16 = new Rect(405,400,20,40);

	rect17 = new Rect(590,440,20,40);
	rect18 = new Rect(610,440,20,40);
	rect19 = new Rect(630,440,20,40);
	rect20 = new Rect(650,440,20,40);
	rect21 = new Rect(670,440,20,40);

	rect22 = new Rect(610,400,20,40);
	rect23 = new Rect(630,400,20,40);
	rect24 = new Rect(650,400,20,40);

	rect25 = new Rect(630,360,20,40);

	polygon = new Polygon(100,360,50,50)

	slingshot = new SlingShot(polygon.body,{x:150,y:400})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);

  fill(255);
    textSize(35);
    text("Score: "+ Score, width-300,50 );

  ground1.display();
  ground2.display();
  ground3.display();

  stroke(4)
  fill("red");
  rect1.display();
  rect1.score();
  rect2.display();
  rect2.score();
  rect3.display();
  rect3.score();
  rect4.display();
  rect4.score();
  rect5.display();
  rect5.score();
  rect6.display();
  rect6.score();
  rect7.display();
  rect7.score();

  stroke(4)
  fill("blue");
  rect8.display();
  rect8.score();
  rect9.display();
  rect9.score();
  rect10.display();
  rect10.score();
  rect11.display();
  rect11.score();
  rect12.display();
  rect12.score();

  stroke(4)
  fill("white");
  rect13.display();
  rect13.score();
  rect14.display();
  rect14.score();
  rect15.display();
  rect15.score();

  stroke(4)
  fill("black");
  rect16.display();
  rect16.score();

  stroke(4)
  fill("yellow");
  rect17.display();
  rect17.score();
  rect18.display();
  rect18.score();
  rect19.display();
  rect19.score();
  rect20.display();
  rect20.score();
  rect21.display();
  rect21.score();

  stroke(4)
  fill("green");
  rect22.display();
  rect22.score();
  rect23.display();
  rect23.score();
  rect24.display();
  rect24.score();

  stroke(4)
  fill("red");
  rect25.display();
  rect25.score();

  polygon.display();

  slingshot.display();

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:150,y:400})
    slingshot.launch(polygon.body);
  }
  
  }

  async function getBackGroundColor(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsejson = await response.json();
    console.log(responsejson);

    var datetime = responsejson.datetime ;

    var hour = datetime.slice(11,13);

    if (hour >= 06 && hour <= 18){
        bg = "bg1.png"
    }

    else{
        bg = "bg2.png"
    }

    backgroundImg = loadImage(bg);
     console.log(backgroundImg);
}