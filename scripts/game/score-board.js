class ScoreBoard{
    constructor(){
        this.points = 0;
    }

    Show(){
        textAlign(RIGHT);
        fill("#222222");
        textSize(50);
        text(parseInt(this.points), width - 30, 50);
    }

    AddPoints(){
        this.points = this.points + 0.02;
    }
}