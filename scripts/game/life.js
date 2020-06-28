class Life {
    constructor(total, initial) {
        this.total = total;
        this.initial = initial;
        this.lifes = initial;

        this.imageWidth = 40;
        this.imageHeight = 40;
    }

    Draw() {
        for (let i = 0; i < this.lifes; i++) {
            image(lifeImage, i * (this.imageWidth + 10) + 10, 10, this.imageWidth, this.imageHeight);
        }
    }

    GainLife() {
        if (this.lifes < this.total) {
            this.lifes++;
        }
    }

    LoseLife(){
        this.lifes--;
    }
}