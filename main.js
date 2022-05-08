
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

D = 0;
A = 0;
vx = 0;
x=200;



document.addEventListener("keyup", CalcularVx);

function CalcularVx(){

    if (event.keyCode === 65) {
       // alert(' A');
        A = 1

    }
    else{
        A= 0
        vx= 0
    }

     if (event.keyCode === 68) {
        //alert('D');
        D = 1;
    }
    else{
        D=0;
        vx=0
        
    }

    vx = (D - A) * 20


    console.log(vx)
    
    return vx;

    
}

function animateQuadrado(){

requestAnimationFrame(animateQuadrado)

c.clearRect(0,0,innerWidth,innerHeight)

c.fillStyle = "#d22200";
c.fillRect(x,200,200,200)

x = x+vx;

}

animateQuadrado();