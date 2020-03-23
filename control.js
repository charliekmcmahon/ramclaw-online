var fired = false;

document.onkeydown = function(event) {
    if(!fired) {
        fired = true;
          if (event.keyCode == 38){
            up();
          }
          else if (event.keyCode == 40){
            down();
          }
          else if (event.keyCode == 37){
            left();
          }
          else if (event.keyCode == 39){
            right();
          }
          else if (event.keyCode == 32){
            drop();
          }
          else if (event.keyCode == 83){
            swicherydoo();
          }
    }
};

document.onkeyup = function(event) {
    fired = false;
      stop();
};
