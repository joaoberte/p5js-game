class Enemy extends Animation {
    constructor(matrix, image, x, charWidth, charHeight, widthSprite, heightSprite) {
        super(matrix, image, x, charWidth, charHeight, widthSprite, heightSprite)

        this.speed = 5;
    }

    Move() {
        this.x = this.x - this.speed;

        if (this.x < -this.charWidth)
            this.x = width;
    }
}