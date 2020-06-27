class Game {
    constructor() {
        this.currentEnemy = 0;
    }

    Setup() {
        scenery1 = new Scenery(backgroundImage1, 0.4);
        scenery2 = new Scenery(backgroundImage2, 0.6);
        scenery3 = new Scenery(backgroundImage3, 1);
        scenery4 = new Scenery(backgroundImage4, 1.5);
        scenery5 = new Scenery(backgroundImage5, 2.5);
        scenery6 = new Scenery(backgroundImage6, 3);

        character = new Character(characterMatrix, characterImage, 0, 45, 110, 135, 220, 270);
        const enemy = new Enemy(enemyMatrix, enemyImage, width - 52, 45, 52, 52, 104, 104, 9, 100);
        const bigEnemy = new Enemy(bigEnemyMatrix, bigEnemyImage, width - 200, 13, 200, 200, 400, 400, 6, 100);
        const flyingEnemy = new Enemy(flyingEnemyMatrix, flyingEnemyImage, width - 46, 250, 64, 64, 32, 32, 7, 100);

        enemies.push(enemy);
        enemies.push(bigEnemy);
        enemies.push(flyingEnemy);

        scoreBoard = new ScoreBoard();
        //gameSound.loop();
    }

    KeyControl() {
        if (key === " " || key === "ArrowUp") {
            jumpSound.play();
            character.Jump();
        }

        if (key === "ArrowRight") {
            dashSound.play();
            character.DashFront();
        }

        if (key === "ArrowLeft") {
            dashSound.play();
            character.DashBack();
        }

        if (key === "r" || key === "R") {
            loop();
        }
    }

    DrawGame() {
        character.Show();
        character.Gravity();

        const enemy = enemies[this.currentEnemy];

        if (enemy.x < -enemy.charWidth) {
            this.currentEnemy = parseInt(random(2.99));

            enemy.speed = random(8, 28);

            if (this.currentEnemy == 2) {
                enemies[2].y = random(height * 0.3, height * 0.7);
            }
        }

        enemy.Show();
        enemy.Move();

        if (character.isColliding(enemy)) {
            //noLoop();
            image(gameOverImage, width / 2 - 200, height / 3);
        }

        scoreBoard.Show();
        scoreBoard.AddPoints();
    }

    DrawBackground(){
        scenery1.Show();
        scenery1.Move();
        scenery2.Show();
        scenery2.Move();
        scenery3.Show();
        scenery3.Move();
        scenery4.Show();
        scenery4.Move();
    }

    DrawFloor(){
        scenery5.Show();
        scenery5.Move();
        scenery6.Show();
        scenery6.Move();
    }
}