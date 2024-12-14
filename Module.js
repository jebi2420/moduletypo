class Module{
  // 생성자 함수
  constructor(pos){
    this.pos = pos;
    this.vel = new p5.Vector(0,0);
    
    this.angle = random( radians(360) );
    this.defaultSize = 5;
    this.size = this.defaultSize;
    
    this.isMoving = false;
    this.origin = this.pos.copy();

  }
  
  update(){
    let mouse = new p5.Vector(mouseX, mouseY);
    let d = mouse.dist(this.pos);
    
    if(mouseIsPressed && d < 50){
      this.isMoving = true;
      
      // target - 기준점 -> 방향
      let dir = this.pos.copy();
      dir.sub(mouse);
      dir.mult(0.1);
      
      this.vel.add(dir);
    }
    else{
      let dir = this.origin.copy();
      dir.sub(this.pos);
      dir.mult(0.002); // 속도
      
      this.vel.add(dir);
    }
    
    if(this.isMoving){
      this.vel.mult(0.9);// 마찰력 추가
      this.pos.add(this.vel);
    }
      
  }
  
  display(){
    push();
      translate(this.pos.x, this.pos.y);
      rotate(this.angle);
      rectMode(CENTER);
      rect(0,0, this.size, this.size)
    pop();
  }
}
