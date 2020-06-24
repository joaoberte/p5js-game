var canvas2;

function setup() {
    createCanvas(1400, 900);
    canvas2 = createGraphics(1400, 900);
    canvas2.clear();
    background(map(mouseY, 0, 900, 0, 255), map(mouseX, 0, 1400, 0, 255), 100);
}

var greenSquare = {
    x: 0,
    dir: 5
}

function draw() {
    background(map(mouseY, 0, 900, 0, 255), map(mouseX, 0, 1400, 0, 255), 100);

    //Canvas2 Objects
    if (mouseIsPressed) {
        canvas2.fill(255, 150);
        canvas2.noStroke();
        canvas2.ellipse(mouseX, mouseY, 50, 50);
    }

    image(canvas2, 0 , 0);

    //Canvas1 Objects
    stroke(200, 200, 200);
    strokeWeight(6);

    fill(200, 250, 200);

    if (greenSquare.x > 1300)
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