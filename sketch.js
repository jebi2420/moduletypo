let modules = [];
let photo;

function preload(){
  photo = loadImage("ballerina.png");
}

function setup() {
  createCanvas(800, 1100);
  background(0);
  
  fill(255);

  
  imageMode(CENTER);
  image(photo, width/2, height/2);
  
  let gap = 10;
  
  for(let y=0; y < height; y+=gap){
    for(let x=0; x < width; x+=gap){
      let c = get(x,y);
      let b = brightness(c);
      
      if(b == 100){
        modules.push(new Module(new p5.Vector(x,y)))     
      }
    }
  }  

}

function draw(){
  background(0);
  for(let i=0; i<modules.length; i++){
    modules[i].update();
    modules[i].display();
  }
}