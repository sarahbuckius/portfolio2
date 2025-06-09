function setup() {
  createCanvas(400, 500);
  background(245, 240, 230);
  noLoop();

  drawFace();
  drawHair();
  drawEyesAsClocks();
  drawMouth();
  drawMoonPhases();
}

function drawFace() {
  fill(255, 220, 200);
  stroke(220, 180, 170);
  strokeWeight(1);
  ellipse(200, 260, 180, 220); // face shape
}

function drawHair() {
  noFill();
  stroke(150, 100, 180, 100);
  strokeWeight(1.5);
  for (let i = -40; i < 40; i += 8) {
    bezier(200 + i, 140, 150, 100 + i * 1.5, 250, 400 - i, 200 + i, 500);
  }
}

function drawEyesAsClocks() {
  let eyeY = 240;
  drawClock(150, eyeY, 40);
  drawClock(250, eyeY, 40);
}

function drawClock(x, y, r) {
  push();
  translate(x, y);
  fill(255);
  stroke(80);
  ellipse(0, 0, r, r);

  strokeWeight(2);
  line(0, 0, 0, -r/3); // hour hand
  strokeWeight(1);
  line(0, 0, r/4, 0);  // minute hand

  pop();
}

function drawMouth() {
  noFill();
  stroke(200, 80, 100);
  strokeWeight(2);
  arc(200, 310, 40, 20, 0, PI);
}

function drawMoonPhases() {
  let cx = 200;
  let cy = 180;
  let radius = 40;
  for (let i = 0; i < 5; i++) {
    let x = cx - 40 + i * 20;
    fill(80);
    ellipse(x, cy, 12, 12);
    fill(245, 240, 230);
    if (i === 1) ellipse(x, cy, 6, 12);
    if (i === 3) ellipse(x, cy, 6, 12);
    if (i === 2) fill(80); // full moon
    ellipse(x, cy, 12, 12);
  }
}
