class Enemy extends Animation {
    constructor(matrix, image, x, groundY, charWidth, charHeight, widthSprite, heightSprite, speed) {
        super(matrix, image, x, groundY, charWidth, charHeight, widthSprite, heightSprite)

        this.speed = speed;
    }

    Move() {
        this.x = this.x - this.speed;

        if (this.x < -this.charWidth)
            this.x = width;
    }
}