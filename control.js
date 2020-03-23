document.onkeydown = checkKey;
abc = 1;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        up();
        checkKeyUp();
    }
    else if (e.keyCode == '40') {
        down();
        checkKeyUp();
    }
    else if (e.keyCode == '37') {
       left();
       checkKeyUp();
    }
    else if (e.keyCode == '39') {
       right();
       checkKeyUp();
    }
    else if (e.keyCode == '32') {
       drop();
       checkKeyUp();
    }
    else if (e.keyCode == '83') {
       swicherydoo();
       checkKeyUp();
    }

}
document.onkeyup = checkKeyUp;

function checkKeyUp(a) {

    a = a || window.event;

    if (a.keyCode == '38') {
        stop();

    }
    else if (a.keyCode == '40') {
        stop();

    }
    else if (a.keyCode == '37') {
       stop();

    }
    else if (a.keyCode == '39') {
       stop();

    }
    else if (a.keyCode == '83') {
       stop();
    }
    else if (a.keyCode == '32') {
       stop();
    }
    else if (a.keyCode == '83') {
        stop();
    }

}

while (abc = 1) {

    checkKey();
    checkKeyUp();

}
