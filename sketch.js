//https://drive.google.com/file/d/1rumRPNTvSbSJekUrhw4LBi9fexvAZWat/view?usp=sharing
//http://colabeduc.org/projeto/show/1016

//Telas do jogo
var tela = 0; 
var telaEnsino; 

//imagem
var img;
var img1;
var img3;

//controle
var op = 1;
var b = 270;
var x = 20; 
var y = 20;

//som
var btnSnd;
var btnSnd1;
var sound1;
var sound2;

//Números Aleatorios 
var alt_c;
var alt_e1;
var alt_e2;
var alt_e3;



//Vetores do jogo

//monossílabas tônicas
let mT = ["pá","má", "lá", "cá", "chás", "vê", "lê", "sê", "dê", "três"];  //acentuadas corretamente
//Oxítonas terminadas
let oT = ["cipós","crachás","dominó","filé", "jacaré", "metrô", "purê", "crochê",  "complô", "sofá"];

let alt_erradas = ["batom", "jejum", "cupom", "gurû", "tabu", "rubí", "gibí", "alí", "inóx", "raíz", "lei", "luz", "bom", "bem", "dar", "flor"];



function preload(){
  //pixilarts feita pelo artista abner-santeliz - https://www.pixilart.com/abner-santeliz
  img = loadImage('img/sala-de-aula.jfif');
  img1 = loadImage('img/dev.jpg'); 
  img3 = loadImage('img/quadro-instruções.jfif');
  btnSnd = loadSound('som/16982_1461335347.mp3');
  btnSnd1 = loadSound('som/16980_1461335347.mp3');
  sound1 = loadSound('som/acerto.mp3'); 
  sound2 = loadSound('som/erro.mp3');
}

function setup() {
  createCanvas(400, 400);
}

function draw() { //Loop infinito
  switch(tela) {
    case 0:
      menu();
      break;
    case 1:
      preplay();
      break;
    case 2:
      instrucoes();
      break;
    case 3:
      creditos();
      break;
    case 4:
      play1();
      break;
    case 5:
      ensinando();
      break;
    case 6:
      play2();
      break;
    case 7:
      play3();
      break;
    case 8:
      play4();
      break;
    case 9:
      end();
      break;
  }
  
}

function randomNumber(){

  alt_c = parseInt(random(1, 10));
  
  alt_e1 = parseInt(random(1, 16));
  
  alt_e2 = parseInt(random(1, 16));
  while( alt_e2 === alt_e1) {
    alt_e2 = parseInt(random(1, 16));
  }
  
  alt_e3 = parseInt(random(1, 16));
  while(alt_e3 === alt_e1 || alt_e3 === alt_e2) {
    alt_e3 = parseInt(random(1, 16));
  }
  
} 

function menu(){
  background(img);
  fill('0');
  textSize(50);
  text('Acentuação', 80, 50);
  fill('#35A101');
  rect(140 , b, 110, 30, 50);
  fill('0');
  textSize(20);
  text('Jogar', 150, 290);
  text('Instruções', 150, 330);
  text('Créditos', 150, 370); 
}

//bloco movimento usando setas 
function keyPressed() {
  if(tela === 0){
    if(keyCode === UP_ARROW && b > 290){ 
      b = b - 40;
      op = op - 1; 
      btnSnd1.play();
    }else if(keyCode === DOWN_ARROW && b < 350){
      b = b + 40;
      op = op + 1;
      btnSnd1.play();
    }else if(keyCode === ENTER){
      tela = op;
      btnSnd.play();
    }   
  }else {
    if(keyCode === ESCAPE){
      btnSnd.play();
      switch(tela) {
        case 1:
        case 2:
        case 3:
          tela = 0;
          break;
        case 4:
          tela = 1;
          break;
        case 5:
          tela = 1;
          break;
        case 9:
          tela = 0;
          break;
      }
    }  
  }
}

function preplay() {
  background(img);
  fill('#35A101');
  rect(10, 60, 380, 230); 
  
  if(mouseX >= 170 && mouseX <= 220 && mouseY >=  350 && mouseY <= 380){
    if(mouseIsPressed){
      //play
      tela = 4;
      randomNumber();
      btnSnd.play();
    }
    fill("#087E00");
  }else {
    fill('#11D421');
  }
  
  rect(170, 350, 50, 30, 30);
  //01
  if(mouseX >= 20 && mouseX <= 260 && mouseY >= 175 && mouseY <= 205){
    if(mouseIsPressed){
      tela = 5;
      telaEnsino = 0;
      btnSnd.play();
    }
    fill("#087E00");
  }else {
    fill("#11D421");
  }
  
  rect(20, 175, 240, 30); 
  //02
  if(mouseX >= 20 && mouseX <= 260 && mouseY >=  210 && mouseY <= 240){
    if(mouseIsPressed){
      tela = 5;
      telaEnsino = 1;
      btnSnd.play();
    }
    fill("#087E00");
  }else {
    fill("#11D421");
  }
  rect(20, 210, 240, 30); 
  
  textSize(15);
  fill('#35A101');
  rect(10, 10, 50, 30);
  fill('white');
  text('Voltar', 17, 30);
  text("play", 180, 368);
  //bloco de texto
  text("Regras de acentuação das oxítonas", 20, 80);
  text("acento agudo ( ´ )", 20, 110);
  text(" | acento círcunflexo ( ^ )", 140, 110);
  text("Uso da acentuação em palavras oxítonas terminadas \nem:", 20 ,140);
  text("monossílabas tônicas: a, e, o", 25, 193);
  text("terminadas em: a(s), e(s), o(s)", 25, 228);
}

//play -- (da pra ser otimizado)

function play1(){
  background(img);
  textSize(15);
  fill('#35A101');
  rect(10, 10, 50, 30);
  rect(167, 15, 55, 20);
  fill('white');
  text('Voltar', 17, 30);
  image(img3, 15, 50, 370, 200); //quadro 
  rect(30, 260, 340, 50); //caixa de pergunta 
  
  //alternativas  
  text("Fase 1", 170, 30);
  text(alt_erradas[alt_e1], 65, 93);
  text(alt_erradas[alt_e2], 65, 193);
  text(alt_erradas[alt_e3], 245, 93); 
  text(mT[alt_c], 245, 193); //certa
  
  //bloco de instrução simples
  fill('black');
  text("Escolha a palavra acentuada de forma correta", 35, 275);
  
  //bloco de escolha
  if(mouseX >= 60 && mouseX <= 120 && mouseY >= 80 && mouseY <= 100){
    if(mouseIsPressed){
      sound2.play();
      
    }
  }else if(mouseX >= 60 && mouseX <= 120 && mouseY >= 180 && mouseY <= 200 ){
    if(mouseIsPressed){
      sound2.play();
      
    }
  }else if(mouseX >= 240 && mouseX <= 300 && mouseY >= 80 && mouseY <= 100 ){
    if(mouseIsPressed){
      sound2.play();
      
    }
  }else if(mouseX >= 240 && mouseX <= 300 && mouseY >= 180 && mouseY <= 200 ){
    if(mouseIsPressed) {
      sound1.play();
      tela = 6;
      randomNumber();
      
    }
  }
}

function play2(){
  background(img);
  textSize(15);
  fill('#35A101');
  rect(167, 15, 55, 20);
  fill('white');
  image(img3, 15, 50, 370, 200); //quadro 
  rect(30, 260, 340, 50); //caixa de pergunta 
  
   //alternativas  
  text("Fase 2", 170, 30);
  text(alt_erradas[alt_e1], 65, 93);
  text(alt_erradas[alt_e2], 65, 193);
  text(oT[alt_c], 245, 93); //certa
  text(alt_erradas[alt_e3], 245, 193);

  //bloco de instrução simples
  fill('black');
  text("Escolha a palavra acentuada de forma correta", 35, 275);
  
  //bloco de escolha
  if(mouseX >= 60 && mouseX <= 120 && mouseY >= 80 && mouseY <= 100){
    if(mouseIsPressed){
      sound2.play();
      
    }
  }else if(mouseX >= 60 && mouseX <= 120 && mouseY >= 180 && mouseY <= 200 ){
    if(mouseIsPressed){
       sound2.play();
      
    }
  }else if(mouseX >= 240 && mouseX <= 300 && mouseY >= 80 && mouseY <= 100 ){
    if(mouseIsPressed){
      sound1.play();
      tela = 7;
      
    }
  }else if(mouseX >= 240 && mouseX <= 300 && mouseY >= 180 && mouseY <= 200 ){
    
    if(mouseIsPressed) {
      sound2.play();
    }
  
  }
}

function play3(){
  background(img);
  textSize(15);
  fill('#35A101');
  rect(167, 15, 55, 20);
  fill('white');
  image(img3, 15, 50, 370, 200); //quadro 
  rect(30, 260, 340, 50); //caixa de pergunta 
  
  //alternativas 
  text("Fase 3", 170, 30);
  text(mT[alt_c], 65, 93); //certa
  text(alt_erradas[alt_e1], 65, 193);
  text(alt_erradas[alt_e2], 245, 93); 
  text(alt_erradas[alt_e3], 245, 193);
  
  //bloco de instrução simples
  fill('black');
  text("Escolha a palavra acentuada de forma correta", 35, 275);
  
  //bloco de escolha
  if(mouseX >= 60 && mouseX <= 120 && mouseY >= 80 && mouseY <= 100){
    if(mouseIsPressed){
      tela = 8;
      randomNumber();
      sound1.play();
      
    }
  }else if(mouseX >= 60 && mouseX <= 120 && mouseY >= 180 && mouseY <= 200 ){
    if(mouseIsPressed){
       sound2.play(); 
        
    }
  }else if(mouseX >= 240 && mouseX <= 300 && mouseY >= 80 && mouseY <= 100 ){
    if(mouseIsPressed){
      sound2.play();
      
    }
  }else if(mouseX >= 240 && mouseX <= 300 && mouseY >= 180 && mouseY <= 200 ){
    if(mouseIsPressed) {
     // sound2.play();
      
    }
  }
}

function play4(){
  background(img);
  textSize(15);
  fill('#35A101');
  rect(167, 15, 55, 20);
  fill('white');
  image(img3, 15, 50, 370, 200); //quadro 
  rect(30, 260, 340, 50); //caixa de pergunta 
  
  //alterantivas 
  text("Fase 4", 170, 30); 
  text(alt_erradas[alt_e1], 65, 93);
  text(oT[alt_c], 65, 193); //certa
  text(alt_erradas[alt_e2], 245, 93); 
  text(alt_erradas[alt_e3], 245, 193);

  //bloco de instrução simples
  fill('black');
  text("Escolha a palavra acentuada de forma correta", 35, 275);
  
  //bloco de escolha
  if(mouseX >= 60 && mouseX <= 120 && mouseY >= 80 && mouseY <= 100){
    if(mouseIsPressed){
      sound2.play();
     
    }
  }else if(mouseX >= 60 && mouseX <= 120 && mouseY >= 180 && mouseY <= 200 ){
    if(mouseIsPressed){
      //sound1.play();
      tela = 9; 
      
    }
  }else if(mouseX >= 240 && mouseX <= 300 && mouseY >= 80 && mouseY <= 100 ){
    if(mouseIsPressed){
     sound2.play();
      
    }
  }else if(mouseX >= 240 && mouseX <= 300 && mouseY >= 180 && mouseY <= 200 ){
    if(mouseIsPressed) {
      sound2.play();
      
    }
  }
}

function end() {
  background(img);
  image(img3, 15, 50, 370, 300); //quadro 
  fill("white")
  textSize(20);
  text("PARABÉNS, você concluiu o jogo", 50, 150);
}


//instruções
function instrucoes(){
  //esc
  background(img);
  textSize(15);
  fill('#35A101');
  rect(10, 10, 50, 30);
  fill('white');
  text('Voltar', 17, 30);
  
  //bloco de instrução
  fill('#35A101') 
  rect(10, 60, 380, 220);
  fill('0');
  text("O objetivo do jogo é reforçar o uso dos acentos gráficos,\nagudos e circinflexos em palavras oxitonas, de acordo\n com suas respectivas regras de acentuação.", 15, 80)
  text("Escolha,dentre as opções que aparecerem em um \nquadro, a alternativa acentuados corretamente.", 20, 160);
}
//créditos
function creditos(){
  background(img);
  textSize(15);
  
  //ESC
  fill('#35A101');
  rect(10, 10, 50, 30);
  fill('white');
  text('Voltar', 17, 30);
  
  //bloco do dev
  image(img1, 10, 50, 75, 75);
  fill('#35A101'); 
  rect(100, 50, 270, 100);
  fill('white');
  text(
    "Programador: João Victor Alves\nGraduando em Ciências e Tecnologia\nTurma: 01 - 2021.1", 110, 70
  );
  
}
