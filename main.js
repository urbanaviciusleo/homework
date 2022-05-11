
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var deltaX = 0;
var deltaY = 0;
x = 200
y = 200
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
    animateMoita();
    animateInimigo();
    console.log( " | vx = " + (x + deltaX) + " | vy = " + (y + deltaY) )




}       

function animateQuadrado(){

  requestAnimationFrame(animateQuadrado)
  
  context.clearRect(0,0,window.innerWidth,window.innerHeight)
  xfinal = x+deltaX
  yfinal = y + deltaY
  context.fillStyle = "#808080";
  if ((xfinal)>=800&&(yfinal)>=100){
    xfinal = xfinal - deltaX;
    yfinal = yfinal - deltaY;
    
  }


  context.fillRect(xfinal,yfinal,200,200)

 
  }

 function animateMoita(){

    requestAnimationFrame(animateMoita)
    
    
    context.fillStyle = "#008000";
    context.fillRect(300,300,300,200)
    
    
    }

  function animateInimigo(){

    requestAnimationFrame(animateInimigo)
    
    
    context.fillStyle = "#d22200";
    context.fillRect(800,100,100,100)
    
    
    }

   

    



  

  
  animateQuadrado();
  animateMoita();
  animateInimigo();


  
  



