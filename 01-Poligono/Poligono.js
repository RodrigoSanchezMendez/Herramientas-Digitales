/*
 * @name Triangle Strip
 * @description Example by Ira Greenberg. Generate a closed ring using the 
 * vertex() function and beginShape(TRIANGLE_STRIP) mode. The outsideRadius 
 * and insideRadius variables control ring's radii respectively.
 */
 //Modificado por: Rodrigo Sánchez
 //Este ejercicio lo tomé de los ejemplos incluídos en processing.
 
 //En este ejercicio experimenté con la modificación de formas, transformación de colores y movimiento además de aplicar variables y condicionales.
 
 //Acá modifique los radios para poder tener una mejor visualización del cambio de tamaño en la figura.
 //Inserté dos variables para poder experimentar dos cambios de color
var x;
var y;
var outsideRadius = 100;
var insideRadius = 50;
var fondo;
var aro;

//modifiqué el canvas para mejorar la visualización.
//Asigné valores a las variables creadas.
function setup() {
  createCanvas(600, 600);
  fondo=255;
  aro=100;
  x = width/2;
  y = height/2;
}
//en el draw modifiqué el color del background para poder experimentar cambios
//Entendí cómo se desarrolla la interación cambiando el número de puntos cuando la forma toma el mayor y el meno número de lados.
// Se modificó el movimiento del mouse.
function draw() {
  background(0,fondo,150);
  
  var numPoints = int(map(mouseY, 0, width, 2, 20));
  var angle = 0;
  var angleStep = 180.0/numPoints;
 // a la forma le adicioné color de relleno y contorno    
  beginShape(TRIANGLE_STRIP); 
  fill(aro,0,240);
  stroke(0,fondo,150);
  for (var i = 0; i <= numPoints; i++) {
    var px = x + cos(radians(angle)) * outsideRadius;
    var py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py); 
    angle += angleStep;
  }
  
  //añadí las siguientes condicionales para cambiar tamaños y colores al mover el mouse
    if(mouseY>120){
    fondo=255;
  }else
  fondo=0;
  
   if(mouseY>240){
    insideRadius=80;
  }else
  insideRadius=50;
  
    if(mouseY>360){
    outsideRadius=225;
  }else
  outsideRadius=100;
  
  if(mouseY>480){
    aro=200;
  }else
  aro=0;
  
  endShape();
}