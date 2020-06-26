const enemyMatrix = [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 418],
    [104, 418],
    [208, 418],
    [312, 418],
    [0, 522],
    [104, 522],
    [208, 522],
    [312, 522],
    [0, 626],
    [104, 626],
    [208, 626],
    [312, 626]
];

const bigEnemyMatrix = [
    [0, 0],
    [400, 0],
    [800, 0],
    [1200, 0],
    [1600, 0],
    [0, 400],
    [400, 400],
    [800, 400],
    [1200, 400],
    [1600, 400],
    [0, 800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200],
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000],
];

const characterMatrix = [
    [0, 0],
    [220, 0],
    [440, 0],
    [660, 0],
    [0, 270],
    [220, 270],
    [440, 270],
    [660, 270],
    [0, 540],
    [220, 540],
    [440, 540],
    [660, 540],
    [0, 810],
    [220, 810],
    [440, 810],
    [660, 810]
];

let backgroundImage1;
let backgroundImage2;
let backgroundImage3;
let backgroundImage4;
let backgroundImage5;
let backgroundImage6;
let scenery1;
let scenery2;
let scenery3;
let scenery4;
let scenery5;
let scenery6;

let characterImage;
let enemyImage;
let bigEnemyImage;

let gameSound;
let jumpSound;

let character;
let enemy;
let bigEnemy;

function preload() {
    backgroundImage1 = loadImage("images/cenario/Hills_Layer_01.png");
    backgroundImage2 = loadImage("images/cenario/Hills_Layer_02.png");
    backgroundImage3 = loadImage("images/cenario/Hills_Layer_03.png");
    backgroundImage4 = loadImage("images/cenario/Hills_Layer_04.png");
    backgroundImage5 = loadImage("images/cenario/Hills_Layer_05.png");
    backgroundImage6 = loadImage("images/cenario/Hills_Layer_06.png");

    characterImage = loadImage("images/personagem/correndo.png");
    enemyImage = loadImage("images/inimigos/gotinha.png")
    bigEnemyImage = loadImage("images/inimigos/troll.png")

    gameSound = loadSound("sounds/trilha_jogo.mp3");
    jumpSound = loadSound("sounds/somPulo.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    scenery1 = new Scenery(backgroundImage1, 0.3);
    scenery2 = new Scenery(backgroundImage2, 0.5);
    scenery3 = new Scenery(backgroundImage3, 0.8);
    scenery4 = new Scenery(backgroundImage4, 1.3);
    scenery5 = new Scenery(backgroundImage5, 1.9);
    scenery6 = new Scenery(backgroundImage6, 3);

    character = new Character(characterMatrix, characterImage, 0, 45, 110, 135, 220, 270);
    enemy = new Enemy(enemyMatrix, enemyImage, width - 52, 45, 52, 52, 104, 104, 5);
    bigEnemy = new Enemy(bigEnemyMatrix, bigEnemyImage, width - 200, 13, 200, 200, 400, 400, 3);

    //gameSound.loop();
}

function keyPressed() {
    if (key === " " || key === "ArrowUp") {
        jumpSound.play();
        character.Jump();
    }
    if (key === "r" || key === "R") {
        loop();
    }
}

function draw() {
    scenery1.Show();
    scenery1.Move();
    scenery2.Show();
    scenery2.Move();
    scenery3.Show();
    scenery3.Move();
    scenery4.Show();
    scenery4.Move();

    character.Show();
    character.Gravity();

    enemy.Show();
    enemy.Move();

    bigEnemy.Show();
    bigEnemy.Move();

    scenery5.Show();
    scenery5.Move();
    scenery6.Show();
    scenery6.Move();

    if (character.isColliding(enemy)) {
        //noLoop();
    }
}
