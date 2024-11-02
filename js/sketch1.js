setup = function() {
createCanvas(100, 100).parent('espai1');

}

draw = function() {
  background("#6fa4ac");

  noStroke();
  fill("black");
  circle(width / 2, height / 2, 100);
  fill("#6fa4ac");
  circle(width / 2, height / 2, 30);
  fill("white");
  circle(width / 2, height / 2, 2);
}
