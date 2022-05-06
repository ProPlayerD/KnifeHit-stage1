var knifeOutline = 5

function preload(){
  LogImg = loadImage('assets/log.png');
  bgImg = loadImage('assets/Bg0.png')
  knifeImg = loadImage('assets/knife2.png') 
  outlineImg = loadImage('assets/knife4.png')
}

function setup() {
  createCanvas(400,600);
  log = createSprite(200, 200, 50, 50);
  log.addImage(LogImg)
  log.scale = 0.3

  knife = createSprite(200,500,20,100)
  knife.addImage(knifeImg)
  knife.scale = 0.022
  knife.rotation = 510
  knife.mirrorX(-1)

  for(var i = 0 ; i < knifeOutline ; i++){
    kunai = createSprite(50,25*i+400,5,10)
    kunai.addImage(outlineImg)
    kunai.scale = 0.05
  }
  
}

function draw() {
  background(bgImg); 
  log.rotation=log.rotation+3
  drawSprites();
}
