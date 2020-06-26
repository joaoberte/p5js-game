class Animation {
    constructor(matrix, image, x, groundY, charWidth, charHeight, widthSprite, heightSprite) {
        this.matrix = matrix;
        this.image = image;
        this.charWidth = charWidth;
        this.charHeight = charHeight;
        this.widthSprite = widthSprite;
        this.heightSprite = heightSprite;
        this.x = x;
        this.y = height - charHeight - groundY;

        this.currentFrame = 0;
    }

    Show() {
        image(this.image, this.x, this.y, this.charWidth, this.charHeight,
            this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], this.widthSprite, this.heightSprite);

        this.Animate();
    }

    Animate() {
        if (this.currentFrame >= this.matrix.length - 1)
            this.currentFrame = 0;

        this.currentFrame++;
    }
}