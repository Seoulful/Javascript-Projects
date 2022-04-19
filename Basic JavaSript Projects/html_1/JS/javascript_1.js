function hello_world_function() {
    var x = document.getElementsByClassName("click");
    x[0].innerHTML = "The text has changed!";
}

function circle_function() {
    var c = document.getElementById("canvas_name");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2*Math.PI);
    ctx.stroke();
}

function gradient_function() {
    var c = document.getElementById("canvas_name");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "green");
    grd.addColorStop(1, "violet");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}