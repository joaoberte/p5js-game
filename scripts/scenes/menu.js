class Menu {
    constructor() {

    }

    Draw() {
        this._backgroundImage();
        this._text();
        this._button();
    }

    _backgroundImage() {
        image(menuImage, 0, 0, width, height);
        image(starsImage, map(mouseX, 0, width, -20, 20), map(mouseY, 0, height, -20, 20), width, height);
    }

    _text() {
        textAlign(CENTER);
        textFont(menuFont);
        textSize(90);
        text("Hipsta's", width / 2 + map(mouseX, 0, width, -5, 5), height / 4 + map(mouseY, 0, height, -5, 5));
        textSize(70);
        text("adventure", width / 2 + map(mouseX, 0, width, -5, 5), height / 3 + map(mouseY, 0, height, -5, 5));
    }

    _button(){
        buttonState.Draw();
    }
}