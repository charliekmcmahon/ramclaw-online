var currentVid = "http://ramcraft.ddns.net:8081/video";
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
function swicherydoo(){
    document.getElementById("stream").src="currentVid";
    if (currentVid.text = "http://ramcraft.ddns.net:8082/video"){
      currentVid.text = "http://ramcraft.ddns.net:8081/video";
    }
    else {
      currentVid.text = "http://ramcraft.ddns.net:8082/video";
    }
}
function drop() {
    var drop = new XMLHttpRequest();
    drop.open("GET","http://ramcraft.ddns.net:8080/drop");
    drop.send();
}

console.log("JavaScript is loaded!");
