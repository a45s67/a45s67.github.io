var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;

var ballrad = 10;

function if_collision(){
    
    if(y+dy<0+ballrad||y+dy>canvas.height-ballrad){
        dy=-dy;
    }
    
    if(x+dx<0+ballrad||x+dx>canvas.width-ballrad){
        dx=-dx;
    }
}

function drawball(){
    ctx.beginPath();
    ctx.arc(x,y,ballrad,0,Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw(){
    ctx.clearRect(0,0, canvas.width,canvas.height)
    drawball();
    if_collision();
    x+=dx;
    y+=dy;
}

setInterval(draw,10);

ctx.beginPath();
ctx.rect(20,40,50,50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240,160,20,0, Math.PI*2,false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160,10,100,40);
ctx.strokeStyle = "rgba(0,0,255,0.5)";
ctx.stroke();
ctx.closePath();