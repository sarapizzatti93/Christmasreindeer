var myImage;
var myImage2;
var myImage3;

function preload(){
    myImage=loadImage("assets/faccia.png");
    myImage2=loadImage("assets/neve.png");
    myImage3=loadImage("assets/filo.png");
    myImage4=loadImage("assets/corpo.png");
}

function setup() {
  createCanvas(360,640);
  colorMode(HSB);
    angleMode(DEGREES);
    noStroke();
    
  //Deal with microphone
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var volume = mic.getLevel();
  
  //If the volume is not enought, re-map it (set a higher newMax).
  var newMax = 2;
  volume = map(volume,0,1,0,newMax);
  
  background(184,63,64);
    
  image(myImage2,0,0,360,640)    
  image(myImage4,0,0,360,640)    
  image(myImage3,0,0,360,640)
  
  
  textAlign(CENTER);
  textSize(32);
  textFont("Pacifico")
  fill(255)
  text("Marry Christmas",width/2,180)
  
  //faccia
  push()
 translate(width/2,3*height/4);
  imageMode(CENTER);
  var r=map(volume,0,1,0,40)
  rotate(r)
 
  image(myImage,0,-height/4,360,640)
  
  //bocca
  var size = map(volume,0,1,10,50);
  fill(59,6,11)
  ellipse(0,200-height/4,size);
    
  //naso    
  var b=map(volume,0,1,20,100)
  fill(357,81,b)
  ellipse(0,100-height/4,70,60);    
  pop()      
    
  //luci
  if(volume>=0.1){
      fill(357,81,65)
       ellipse(280,70,20,20);
       ellipse(57,120,20,20); 
      fill(48,99,99)
      ellipse(115,85,20,20);
      ellipse(189,105,20,20); 
  }else if(0.4<=volume<=1){
      fill(238,99,99);
      ellipse(57,120,20,20); 
      ellipse(189,105,20,20); 
      fill(158,85,85);
      ellipse(280,70,20,20);
      ellipse(115,85,20,20);
  }else{
      fill(0)
      ellipse(280,70,20,20);
      ellipse(57,120,20,20); 
      ellipse(115,85,20,20);
      ellipse(189,105,20,20); 
  }
  
  
}