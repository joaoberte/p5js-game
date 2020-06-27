class Character extends Animation {
    constructor(matrix, image, x, groundY, charWidth, charHeight, widthSprite, heightSprite) {
        super(matrix, image, x, groundY, charWidth, charHeight, widthSprite, heightSprite)

        this.initialY = height - charHeight - groundY;
        this.y = this.initialY;

        this.jumpSpeed = 0;
        this.gravitySpeed = 1;
        this.doubleJumpFlag = 0;
        this.jumpHeight = -22;
    }

    Jump() {
        if (this.doubleJumpFlag < 2) {
            this.jumpSpeed = this.jumpHeight;
            this.doubleJumpFlag++;
        }
    }

    DashFront() {
        this.x = this.x + 130;
    }

    DashBack() {
        this.x = this.x - 130;
    }

    Gravity() {
        this.y = this.y + this.jumpSpeed;
        this.jumpSpeed = this.jumpSpeed + this.gravitySpeed;

        if (this.y > this.initialY) {
            this.y = this.initialY;
        }

        if (this.y == this.initialY) {
            this.doubleJumpFlag = 0;
        }
    }

    isColliding(enemy) {
        const precision = 0.7;
        // noFill();
        // rect(this.x + this.charWidth * 0.2,
        //     this.y + this.charHeight * 0.2,
        //     this.charWidth * precision,
        //     this.charHeight * precision);
        // rect(enemy.x + enemy.charWidth * 0.2,
        //     enemy.y + enemy.charHeight * 0.2,
        //     enemy.charWidth * precision,
        //     enemy.charHeight * precision);

        return collideRectRect(
            this.x + this.charWidth * 0.2,
            this.y + this.charHeight * 0.2,
            this.charWidth * precision,
            this.charHeight * precision,
            enemy.x + this.charWidth * 0.2,
            enemy.y + this.charHeight * 0.2,
            enemy.charWidth * precision,
            enemy.charHeight * precision);
    }
}