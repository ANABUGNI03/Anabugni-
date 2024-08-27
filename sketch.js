let posicaoXbolinha//LISTAS DA POSICAO X DAS BOLINHAS
let posicaoYbolinha//LISTAS DA POSICAO Y DAS BOLINHAS
let diametro // LISTA DOS DIAMETROS
let cor2// cor da bolinha


function setup() {
  createCanvas(600, 600);
  background(220,20,60);
  cor=color(random(0,255,),random(0,255),random(0,255))
  cor2=color(random(0,255,),random(0,255),random(0,255))
  posicaoXbolinha=[300,200]
  posicaoYbolinha=[300,200]
  diametro=[20,20]
}

function draw() {
  fill(cor)
  circle(posicaoXbolinha[0],posicaoYbolinha[0],diametro[0])
  fill(cor2)
  circle(posicaoXbolinha[1],posicaoYbolinha[1],diametro[1])
 // posicaoXbolinha=posicaoXbolinha+1
  //posicaoYbolinha=posicaoYbolinha+1
 diametro[0]=diametro[0]+1
 diametro[1]=diametro[1]+1
  
  if(mouseIsPressed){
    cor=color(random(0,255,),random(0,255),random(0,255))
    cor2=color(random(0,255,),random(0,255),random(0,255))
  diametro[0]=0
  diametro[1]=0  
}
}