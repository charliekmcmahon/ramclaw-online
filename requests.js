var mainCamera = "http://ramcraft.ddns.net:8081/video"
var sideCamera = "http://ramcraft.ddns.net:8082/video"

window.onload = function() {
  var right = new XMLHttpRequest();
    right.open("GET","https://maker.ifttt.com/trigger/button_pressed/with/key/cEr-utoyFd_P-q_mfixved");
    right.send();
}

function up() {
    var up = new XMLHttpRequest();
    up.open("GET","http://ramcraft.ddns.net:8080/up");
    up.send();
}
function down() {
    var down = new XMLHttpRequest();
    down.open("GET","http://ramcraft.ddns.net:8080/down");
    down.send();
}
function left() {
    var left = new XMLHttpRequest();
    left.open("GET","http://ramcraft.ddns.net:8080/left");
    left.send();
}
function right() {
    var right = new XMLHttpRequest();
    right.open("GET","http://ramcraft.ddns.net:8080/right");
    right.send();
}
function stop() {
    var stop = new XMLHttpRequest();
    console.log('Stopping');
    stop.open("GET","http://ramcraft.ddns.net:8080/stop");
    stop.send();
    stopfailsafe();
}
function stopfailsafe() {
    console.log("stopped");
}

function swicherydoo(){

    console.log(currentVid);

    document.getElementById("stream").src = currentVid;

    if (currentVid == mainCamera){
      currentVid = sideCamera;
      console.log("if");
    }
    else {
      currentVid = mainCamera;
      console.log("else");
    }

}
function drop() {
    var drop = new XMLHttpRequest();
    drop.open("GET","http://ramcraft.ddns.net:8080/drop");
    drop.send();
}

console.log("JavaScript is loaded!");
var currentVid = "http://ramcraft.ddns.net:8082/video";
