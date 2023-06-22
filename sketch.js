var bg1,bgImg1;
var bg2,bgImg2;
var olivierImg1,olivierImg2,olivierImg3,olivierImg4;
var ocultistaImg;
var zumbiDeSangueImg;
var amigoImaginárioImg;
var coracaoImg;
var borda1,borda2,borda3;


function preload(){
  
  olivierImg1 = loadImage("assets/OLIVIER1.webp");
  olivierImg2 = loadImage("assets/OLIVIER2.webp");
  olivierImg3 = loadImage("assets/OLIVIER3.webp");
  olivierImg4 = loadImage("assets/OLIVER4.webp");

  ocultistaImg = loadImage("assets/OCULTISTA.webp");

  zumbiDeSangueImg = loadImage("assets/ZUMBIDESANGUE.webp");

  amigoImaginárioImg = loadImage("assets/AMIGOIMAGINARIO.webp");

  bgImg1 = loadImage("assets/red.praia.jpg");
  bgImg2 = loadImage("assets/PRAIAred.jpg");
  coracaoImg = loadImage("assets/heart_1.png");

}

function setup() {

  
    createCanvas(1200,900);

    //adicionando a imagem de fundo
    //bg1 = createSprite(400,450,800,1200);
    //bg1.addImage(bgImg1);
    //bg1.scale = 0.3;

    bg2 = createSprite(600,500,900,1200)
    bg2.addImage(bgImg2)
    bg2.scale = 0.5
  

    ocultista = createSprite(200,200,50,50);
    ocultista.addImage(ocultistaImg);
    ocultista.scale = 0.2;
    ocultista.debug = true;
    ocultista.setCollider("rectangle",0,0,300,300);
    //ocultista.velocityX = 3;
    ocultista.bounceOff(borda2);
    
    zumbidesangue = createSprite(100,100,50,50);
    zumbidesangue.addImage(zumbiDeSangueImg);
    zumbidesangue.scale = 0.2;
    zumbidesangue.debug = true;
    zumbidesangue.setCollider("rectangle",0,0,300,300);

    amigoimaginario = createSprite(400,400,50,50);
    amigoimaginario.addImage(amigoImaginárioImg);
    amigoimaginario.scale = 0.9;
    amigoimaginario.debug = true;
    amigoimaginario.setCollider("rectangle",0,0,300,300);

  

  
  
  

  //criando o sprite do jogador
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(olivierImg1);
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle",0,0,300,300)

 
    

}

function draw() {
  background('#43A6BD'); 
  
  ocultista.velocityX = 3
  //ocultista.bounceOff(borda2);

  borda1 = createSprite(150,height,50,height+1200)
  player.collide(borda1);
  borda1.visible = false;

  borda2 = createSprite(1050,height,50,height+1200)
  player.collide(borda2);
  borda2.visible = false;

  borda3 = createSprite(0,900,height+1200,50)
  player.collide(borda3);
  borda3.visible = false;
  
  borda4 = createSprite(20,10,height+1200,50)
  player.collide(borda4);
  borda4.visible = false;
  



  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
  player.y = player.y+30
  }

  if(keyDown("RIGHT_ARROW")||touches.length>0){
    player.x = player.x+30
  }

  if(keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x-30
  }


  //solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
  if(keyWentDown("space")){
  
    player.addImage(shooter_shooting)
  
  }

  //o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
  else if(keyWentUp("space")){
    player.addImage(shooterImg)
  }

  drawSprites();

}
