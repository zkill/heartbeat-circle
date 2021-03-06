//-----------------------------------
// Program: circle.js
// Programer: zhou jia hao
// Site: zjhou.com
// Email: z@zjhou.com
// Date: 2014-12-13
// Update: 2014-12-13
//-----------------------------------

var start = ms();
function ms(){return new Date().getTime();}
function breathLevel(x, //number of seconds that have elapsed
		     min, max//level range
		    ){
    var a = 1/Math.E;
    var b = Math.E - a;
    return (Math.exp(Math.sin(x)) - a) * (max-min) / b + min;
}

function breath_circle(x, vari, opac){
    
    x.save();
    x.beginPath();
    x.arc(250, 250, vari,
	  0, 2*Math.PI, false);
    x.fillStyle = "rgba(0, 176, 80," + opac + ")";
    x.fill()
    x.restore();
}

function breath_inner_circle(x, vari, opac){
    x.save();
    x.beginPath();
    x.arc(250, 250, 160-vari,
	  0, 2*Math.PI, false);
    x.fillStyle = "rgba(255, 255, 255," + opac + ")";
    x.fill()
    x.restore();
}

function breath_inner_circle1(x, vari){
    x.save();
    x.beginPath();
    x.arc(250, 250, 180-vari,
	  0, 2*Math.PI, false);
    x.fillStyle = "#fff"
    x.fill()
    x.restore();
}


function breath(){
    var canvas = document.getElementById('circle');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 500, 500);
    
    var size = breathLevel(((ms() - start))/1000*(Math.PI*3), 100, 120);
    var opac = breathLevel(((ms() - start))/1000*(Math.PI*3), 0.5, 0.7);
    
    breath_circle(ctx, size, 1);
    breath_inner_circle(ctx, size, opac);
}

setInterval(breath, 10)
breath();
