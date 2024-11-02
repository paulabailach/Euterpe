setup = function() {
  createCanvas(100, 100).parent('espai2');
  
  }
  
  draw = function() {
    background("#6fa4ac");
  
    noStroke();
    fill("black");
    circle(width / 2, height / 2, 100);
    fill("#3d5b60");
    circle(width / 2, height / 2, 30);
    fill("white");
    circle(width / 2, height / 2, 2);
  }
  