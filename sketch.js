function setup() {
    createCanvas(600, 600);
    background(220);
  }
  
  function draw() {
    stroke("blue")
    fill("red")
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 100, 35)
    }
  }