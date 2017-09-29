 //Modificado por: Rodrigo Sánchez
 //Este ejercicio lo tomé de los ejemplos incluídos en la página del editor p5js.org.
 
 //En este ejercicio experimenté con la modificación de formas, transformación de colores y movimiento además de aplicar variables y condicionales.
 
// Estas variables se crearon para modificar el color, ela movimiento y la posición del objeto
var persiana;
var columna;
var circuloGY;
var circuloGX;
var circuloPY;
var circuloPX;

//ajuste canvas para mejorar la visualización de la interacción 
function setup() {
  createCanvas(600, 600);
}

//definición de la transformación de la formas de las figuras a partir del movimiento de mouse en X y Y.
// Asignación de valores a las variables creadas.
function draw() {
  persiana = map(mouseY,0, height, 0, 40);
  columna = map(mouseX,0, width, 0, 40);
  circuloGY = 25;
  circuloGX = 25;
  circuloPY = 10;
  circuloPX = 10;
  // Definición de colores y valores 
  background(0,120,0);
  noStroke();
  for (var i = 0; i < width; i += 25) {
    fill(130, 210, 15);
    rect(0, i, width, persiana);
    fill(255);
    rect(i, 0, columna, height);
  
  // definición del movimiento de los circulos y el desplazamiento de los mismos en el lienzo.
  fill(0,80,0);
  ellipse(mouseX,mouseX,circuloGX,circuloGY);
  
  fill(255);
  ellipse(mouseX,mouseX,circuloPX,circuloPY);
  
  fill(130, 210, 15);
  ellipse(mouseX,40,circuloGX,circuloGX);
  
  fill(255);
  ellipse(mouseX,40,circuloPX,circuloPX);
  
   fill(255);
  ellipse(40,mouseY,circuloGY,circuloGY);
  
  fill(130, 210, 15);
  ellipse(40,mouseY,circuloPY,circuloPY);
  
 // estas son las condicionales creadas para manipular el elmento de acuerdo al movimiento en Y del mouse

  if (mouseY>300){
    circuloGY=circuloGY+1;
  }else
  circuloGY=25;
  
  if (mouseX>300){
    circuloGX=circuloGX+1;
  }else
  circuloGX=25;
  
    if (mouseY>300){
    circuloPY=circuloPY+0.5;
  }else
  circuloPY=10;
  
  if (mouseX>300){
    circuloPX=circuloPX+0.5;
  }else
  circuloPX=10;
	}	
}