window.addEventListener("deviceorientation", on_device_orientation);
function on_device_orientation(evt){
    var alpha = evt.alpha;
    var beta = evt.beta;
    var gamma = evt.gamma;
    document.getElementById("a").innerHTML = "alpha = " + alpha;
    document.getElementById("b").innerHTML = "beta =" + beta;
    document.getElementById("c").innerHTML = "gamma =" + gamma;

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var center = {x:canvas.width / 2, y: canvas.height / 2}
    var square_side = 50;

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0,0,canvas.width, canvas.height);
    context.translate(center.x/2, center.y/2);
    context.rotate(alpha*Math.PI/180);
    context.beginPath();
    context.rect(-square_side/2,-square_side/2,square_side, square_side);
    context.stroke();
}