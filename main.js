function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);

    game = new Game();
    game.Setup();

    menu = new Menu();

    states = {
        game,
        menu
    }

    buttonState = new ButtonState("Start", width, height/1.4);
}

function keyPressed() {
    game.KeyControl();
}

function draw() {
    states[gameState].Draw();
}
