
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var deltaX = 0;
var deltaY = 0;
x = 200
y =200
var context = canvas.getContext('2d');

window.addEventListener("keydown", moveSomething, false);
  
function moveSomething(e) {
    switch(e.keyCode) {
        case 65:
          deltaX -= 50;
          break;
        case 87:
          deltaY -= 50;
          break;
        case 68:
          deltaX += 50;
          break;
        case 83:
          deltaY += 50;
          break;  
    }   
    animateQuadrado();
}       

function animateQuadrado(){

  requestAnimationFrame(animateQuadrado)
  
  context.clearRect(0,0,window.innerWidth,window.innerHeight)
  
  context.fillStyle = "#d22200";
  context.fillRect(x+deltaX,y+deltaY,200,200)
  
  
  }
  
  animateQuadrado();



