class ButtonState {
    constructor(text, x, y) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.button = createButton(this.text);
        this.button.addClass("btn-menu");
    }

    Draw() {
        this.button.position(this.x, this.y);
        this.button.center('horizontal');

        this.button.mousePressed(() => this._changeScene());
    }

    _changeScene() {
        this.button.remove();
        gameState = "game"
    }
}