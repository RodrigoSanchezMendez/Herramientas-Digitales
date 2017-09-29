
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

 //Modificado por: Rodrigo Sánchez
 // Este ejercicio lo tomé de GitHub en los ejemplos desarrollados por Daniel Shiffman y que explica en los tutoriales de Coding Train.
 //En este ejercicio experimenté con la modificación de formas, transformación de colores, movimiento, dibujo, rotación y aceleración además de aplicar variables y condicionales.
 

var stars = [];
// Estas variables se crearon para modificar el color, la rotacion y la posición del objeto
var speed;
var velocidad;//la uso para modificar la transición de color del fondo
var espacio;//la uso para modificar el color del fondo
var cambio;//la uso para modificar el color de la nave
var aceleracion;//la uso para modificar las revoluciones de la nave

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

//agregué valores para velocidad y aceleración para incrementar gradualmente el color y la velocidad

function draw() {
  speed = map(mouseY, 0, width, 0, 40);
  velocidad = map(mouseY, 0, width, 0, 70);
  aceleracion = map(mouseY, 0, width, 0, 20);
  background(espacio,espacio,espacio);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  
  // la nave la dejo como una figura independiente para que no afecte el comportamiento del fondo
  push(); 
  rotate(aceleracion); //esta función me permite rotar la nave mientras se mueve el cursor aumentando la velocidad mientras se baja.
  fill(0,cambio,255); 
  noStroke(); 
  ellipse(0,40,50,20); 
   
  fill(80,80,80); 
  noStroke(); 
  ellipse(0,30,20,17); 
   
  fill(255); 
  noStroke(); 
  ellipse(-3,30,6,4); 
  
   
  pop(); 

// estas son las condicionales creadas para manipular el elmento de acuerdo al movimiento en Y del mouse

  if(mouseY>50){ 
    espacio=velocidad; 
  }else{ 
    espacio=0; 
  } 
   
   if(mouseY>50){ 
    aceleracion=aceleracion+1; 
  }else{ 
    aceleracion=0; 
  } 
   if(mouseY>10){ 
    nave++; 
  }else{ 
    nave=0; 
  } 
   
 if(mouseY>300){ 
    cambio=250; 
  }else{ 
    cambio=0; 
  }
  
}