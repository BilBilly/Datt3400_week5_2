let circles = [];
let lines = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    circles.push(new Circle(random(width), random(height), random(30, 80)));
  }
  for (let i = 0; i < 10; i++) {
    lines.push(new MovingLine());
  }
}

function draw() {
  background(30, 30, 80);
  for (let line of lines) {
    line.update();
    line.display();
  }
  for (let circle of circles) {
    circle.update();
    circle.display();
    circle.drawFace();
  }
}

class Circle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  }
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > height) this.ySpeed *= -1;
  }
  display() {
    fill(255, 204, 0);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
  drawFace() {
    fill(0);
    ellipse(this.x - this.size / 4, this.y - this.size / 4, this.size / 10); // Left eye
    ellipse(this.x + this.size / 4, this.y - this.size / 4, this.size / 10); // Right eye
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(this.x, this.y, this.size / 2, this.size / 3, 0, PI); // Smile
  }
}

class MovingLine {
  constructor() {
    this.x1 = random(width);
    this.y1 = random(height);
    this.x2 = random(width);
    this.y2 = random(height);
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);
  }
  update() {
    this.x1 += this.xSpeed;
    this.y1 += this.ySpeed;
    this.x2 += this.xSpeed;
    this.y2 += this.ySpeed;
    if (this.x1 < 0 || this.x1 > width || this.x2 < 0 || this.x2 > width) this.xSpeed *= -1;
    if (this.y1 < 0 || this.y1 > height || this.y2 < 0 || this.y2 > height) this.ySpeed *= -1;
  }
  display() {
    stroke(255);
    strokeWeight(2);
    line(this.x1, this.y1, this.x2, this.y2);
  }
}
