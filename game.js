function setup() {
    createCanvas(800, 600);
}

var greenSquare = {
    x: 0,
    dir: 5
}

function draw() {
    background(map(mouseY, 0, 600, 0, 255), map(mouseX, 0, 800, 0, 255), 100);

    stroke(200, 200, 200);
    strokeWeight(6);

    fill(200, 250, 200);

    if (greenSquare.x > 700)
        greenSquare.dir = -5;
    else if (greenSquare.x < 0)
        greenSquare.dir = 5;

    greenSquare.x = greenSquare.x + greenSquare.dir;

    square(greenSquare.x, 250, 100);

    noFill();
    circle(mouseX, mouseY, 100);

    stroke(250, 250, 200);
    line(mouseX, mouseY, greenSquare.x + 50, 300);

    stroke(200, 200, 200);
    fill(250, 200, 200, 150);
    rect(400, 200, 150, 200);
}

  //function mousePressed() {
  //  background(100, 100, 150);
  //}