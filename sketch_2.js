function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    strokeWeight(2);
}

function draw() {
    background(10, 10, 30);
    translate(width / 2, height / 2);
    
    let time = millis() * 0.001;
    let maxRadius = min(width, height) * 0.4;
    let numCircles = 8;
    let numLines = 6;
    
    for (let i = 0; i < numCircles; i++) {
        let radius = (i + 1) * maxRadius / numCircles * (1 + 0.2 * sin(time + i));
        stroke(lerpColor(color(255, 100, 200), color(100, 200, 255), i / numCircles));
        ellipse(0, 0, radius * 2);
    }
    
    for (let i = 0; i < numLines; i++) {
        let angle = TWO_PI * i / numLines + time * 0.5;
        let x = cos(angle) * maxRadius;
        let y = sin(angle) * maxRadius;
        stroke(255, 255, 150, 150);
        line(0, 0, x, y);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
