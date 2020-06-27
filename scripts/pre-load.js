function preload() {
    backgroundImage1 = loadImage("images/cenario/Hills_Layer_01.png");
    backgroundImage2 = loadImage("images/cenario/Hills_Layer_02.png");
    backgroundImage3 = loadImage("images/cenario/Hills_Layer_03.png");
    backgroundImage4 = loadImage("images/cenario/Hills_Layer_04.png");
    backgroundImage5 = loadImage("images/cenario/Hills_Layer_05.png");
    backgroundImage6 = loadImage("images/cenario/Hills_Layer_06.png");

    menuImage = loadImage("images/assets/telaInicial.png");
    menuFont = loadFont("images/assets/fonteTelaInicial.otf");
    starsImage = loadImage("images/assets/stars.png");
    gameOverImage = loadImage("images/assets/game-over.png");
    characterImage = loadImage("images/personagem/correndo.png");
    enemyImage = loadImage("images/inimigos/gotinha.png");
    bigEnemyImage = loadImage("images/inimigos/troll.png");
    flyingEnemyImage = loadImage("images/inimigos/bird.png");

    gameSound = loadSound("sounds/trilha_jogo.mp3");
    jumpSound = loadSound("sounds/somPulo.mp3");
    dashSound = loadSound("sounds/dash.mp3");
}