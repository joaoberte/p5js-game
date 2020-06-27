class Enemy extends Animation {
    constructor(matrix, image, x, groundY, charWidth, charHeight, widthSprite, heightSprite, speed, delay) {
        super(matrix, image, x, groundY, charWidth, charHeight, widthSprite, heightSprite)

        this.speed = speed;
        this.delay = delay;
        this.x = width + this.delay;
    }

    Move() {
        this.x = this.x - this.speed;

        if (this.x < - this.charWidth - this.delay)
            this.x = width;
    }
}