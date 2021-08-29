canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

colour = "black";
line_width = 2;

width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if (width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

var last_x;
var last_y;
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    colour = document.getElementById("colour").value;
    line_width = document.getElementById("line-width").value;

    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
}


canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
   current_x = e.touches[0].clientX - canvas.offsetLeft;
   current_y = e.touches[0].clientY - canvas.offsetTop;

   ctx.beginPath();
   ctx.strokeStyle = colour;
   ctx.lineWidth = line_width;

   ctx.moveTo(last_x, last_y);
   ctx.lineTo(current_x, current_y);
   ctx.stroke();

   last_x = current_x;
   last_y = current_y;
}

function remove(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}