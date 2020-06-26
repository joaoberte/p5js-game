class Character extends Animation {
    constructor(matrix, image, x, charWidth, charHeight, widthSprite, heightSprite) {
        super(matrix, image, x, charWidth, charHeight, widthSprite, heightSprite)

        this.initialY = height - charHeight;
        this.y = this.initialY;

        this.jumpSpeed = 0;
        this.gravitySpeed = 2;
        this.doubleJumpFlag = 0;
    }

    Jump() {
        if (this.doubleJumpFlag < 2) {
            this.jumpSpeed = - 30;
            this.doubleJumpFlag++;
        }
    }

    Gravity() {
        this.y = this.y + this.jumpSpeed;
        this.jumpSpeed = this.jumpSpeed + this.gravitySpeed;

        if (this.y > this.initialY) {
            this.y = this.initialY;
        }

        if(this.y == this.initialY){
            this.doubleJumpFlag = 0;
        }
    }

    isColliding(enemy) {
        const precision = 0.7;

        return collideRectRect(
            this.x,
            this.y,
            this.charWidth * precision,
            this.charHeight * precision,
            enemy.x,
            enemy.y,
            enemy.charWidth * precision,
            enemy.charHeight * precision);
    }
}