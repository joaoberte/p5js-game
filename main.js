function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);

    game = new Game();
    game.Setup();
}

function keyPressed() {
    game.KeyControl();
}

function draw() {
    game.DrawBackground();

    game.DrawGame();

    game.DrawFloor();
}
