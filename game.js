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

let backgroundImage;
let characterImage;
let enemyImage;
let gameSound;

let scenery;
let character;
let enemy;


function preload() {
    backgroundImage = loadImage("images/cenario/floresta.png");
    characterImage = loadImage("images/personagem/correndo.png");
    enemyImage = loadImage("images/inimigos/gotinha.png")
    gameSound = loadSound("sounds/trilha_jogo.mp3");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    scenery = new Scenery(backgroundImage, 3);
    character = new Character(characterMatrix, characterImage, 0, 110, 135, 220, 270);
    enemy = new Enemy(enemyMatrix, enemyImage, width - 52, 52, 52, 104, 104)
    //gameSound.loop();
}

function draw() {
    scenery.Show();
    scenery.Move();

    character.Show();

    enemy.Show();
}
