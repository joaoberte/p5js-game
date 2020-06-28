function setup() {
    createCanvas(windowWidth, windowHeight);

    game = new Game();
    game.Setup();

    menu = new Menu();

    states = {
        game,
        menu
    }

    buttonState = new ButtonState("Start", width, height / 1.4);
}

function keyPressed() {
    game.KeyControl();
}

function draw() {
    states[gameState].Draw();
}
