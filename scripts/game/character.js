class Character extends Animation {
    constructor(matrix, image, x, groundY, charWidth, charHeight, widthSprite, heightSprite, smooth) {
        super(matrix, image, x, groundY, charWidth, charHeight, widthSprite, heightSprite, smooth)

        this.initialY = height - charHeight - groundY;
        this.y = this.initialY;

        this.jumpSpeed = 0;
        this.gravitySpeed = 1;
        this.doubleJumpFlag = 0;
        this.jumpHeight = -22;
        this.invinceble = false;
    }

    Jump() {
        if (this.doubleJumpFlag < 2) {
            this.jumpSpeed = this.jumpHeight;
            this.doubleJumpFlag++;
        }
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

        if (this.invinceble) {
            return false;
        }

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

    beInvinceble() {
        this.invinceble = true;

        setTimeout(() => {
            this.invinceble = false;
        }, 1000);
    }
}