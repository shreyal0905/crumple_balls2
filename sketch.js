var line1Sprite,line2Sprite,line3Sprite

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boxdown = new dustbin(610,380,100,20);
	rightbox = new dustbin(670,360,20,100);
	leftbox = new dustbin(550, 360,20,100);
	paper = new paper(100,390,20)
    groundy = new ground(400,400,800,20);
	

	Engine.run(engine);
  
}
//check now.If any position is wrong then tell me
// wht abt the up arrow that is not working 
// can u change the ground positions 
// wait lemme check it
// i did it but the up arrow is not working the paper should move right and fall in the dustbin right ???
//Yup but it will depend on how long you press the up key, if you press it for too long then it will fo far away
function draw() {

  rectMode(CENTER);
  background(255)
  boxdown.display();
  rightbox.display();
  leftbox.display();
  paper.display();
  groundy.display();
  
   	
  
  drawSprites();
  keyPressed();
 
}

function keyPressed(){
	if(keyDown("up") ){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
	}
}
//there was a spelling mistake in applyForce.I just corrected it. check now
// it worked yaay but when i pressed i show th epic in whatsapp chcek  it 
// yaaaaaay it worked tqsm 
// for the next project u just hv to add the images right ????
// no i am taking abt the crumbled balls 2
// ohhk did u finish it 
// but its continuous right 
// oh good tank your btw and sry for wasting ypur time and u helped a lot and i owe u 
//okay
//check now
//u there Shreyal??
//welcome :)
//no its a bit tricky I am working on the next project
//yeah but it is a bit tricky coz you have to get the radius right otherwise the paper will look like a sword XD
// nope but I finished Newton's Cradle project.
//yeah but Newton's Cradle was a bit easy though
// how many times do I have to say, in friendship,no sry & no thank q
// its Okay
//:-/  :) \^-^/
// just trying emojies 
//no problem. I'll teach you some of them in whatsapp
//BTW do you have skype??
// na my skype was hacked so i had to close the acc 
// i hv google meet and zoom 
// Well ok
// BTW Happy Ugadi to you

//it was yesterday but tq and same tou 
// welcome
//if you want help with the Newton's Cradle project, just text me anytime :)
// sure will do 
// ok bye then
 //bye:)
 
 //stop the share