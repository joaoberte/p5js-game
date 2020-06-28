class Enemy extends Animation {
    constructor(matrix, image, x, groundY, charWidth, charHeight, widthSprite, heightSprite, smooth, speed) {
        super(matrix, image, x, groundY, charWidth, charHeight, widthSprite, heightSprite, smooth)

        this.speed = speed;
        this.x = width;
    }

    Move() {
        this.x = this.x - this.speed;

        if (this.x < - this.charWidth - 100)
            this.x = width;
    }
}