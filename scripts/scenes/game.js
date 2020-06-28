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

        character = new Character(characterMatrix, characterImage, 0, 45, 110, 135, 220, 270, 2);
        const enemy = new Enemy(enemyMatrix, enemyImage, width - 52, 45, 52, 52, 104, 104, 2, 9);
        const bigEnemy = new Enemy(bigEnemyMatrix, bigEnemyImage, width - 200, 13, 200, 200, 400, 400, 1, 6);
        const flyingEnemy = new Enemy(flyingEnemyMatrix, flyingEnemyImage, width - 46, 250, 64, 64, 32, 32, 4, 7);

        enemies.push(enemy);
        enemies.push(bigEnemy);
        enemies.push(flyingEnemy);

        scoreBoard = new ScoreBoard();
        life = new Life(3, 3);
        //gameSound.loop();

        gameState = "menu";
    }

    KeyControl() {
        if (key === " " || key === "ArrowUp") {
            jumpSound.play();
            character.Jump();
        }

        if (key === "r" || key === "R") {
            this.Reset();
        }
    }

    Draw() {
        scenery1.Show();
        scenery1.Move();
        scenery2.Show();
        scenery2.Move();
        scenery3.Show();
        scenery3.Move();
        scenery4.Show();
        scenery4.Move();

        life.Draw();

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

        if (life.lifes === 0) {
            image(gameOverImage, width / 2 - 200, height / 3);
            noLoop();
        }

        if (character.isColliding(enemy)) {
            life.LoseLife();
            character.beInvinceble();
        }

        scoreBoard.Show();
        scoreBoard.AddPoints();

        scenery5.Show();
        scenery5.Move();
        scenery6.Show();
        scenery6.Move();
    }

    Reset() {
        scenery1 = new Scenery(backgroundImage1, 0.4);
        scenery2 = new Scenery(backgroundImage2, 0.6);
        scenery3 = new Scenery(backgroundImage3, 1);
        scenery4 = new Scenery(backgroundImage4, 1.5);
        scenery5 = new Scenery(backgroundImage5, 2.5);
        scenery6 = new Scenery(backgroundImage6, 3);

        character = new Character(characterMatrix, characterImage, 0, 45, 110, 135, 220, 270, 2);

        enemies[0] = new Enemy(enemyMatrix, enemyImage, width - 52, 45, 52, 52, 104, 104, 2, 9);
        enemies[1] = new Enemy(bigEnemyMatrix, bigEnemyImage, width - 200, 13, 200, 200, 400, 400, 1, 6);
        enemies[2] = new Enemy(flyingEnemyMatrix, flyingEnemyImage, width - 46, 250, 64, 64, 32, 32, 4, 7);

        this.currentEnemy = 0;
        scoreBoard = new ScoreBoard();
        life = new Life(3, 3);
        //gameSound.loop();

        loop();
    }
}