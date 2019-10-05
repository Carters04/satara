var states = {
    'playing': true,
    'start-screen': false,
    'death-screen': false
}

var ship;
var touches = []

function setup() {
    createCanvas(innerWidth, innerHeight);
    ship = new Ship();
}

function draw() {
    image(imgs[0], 0, 0, width, height);
    background('rgba(0,0,0, 0.5)');
    
    if (states.playing == true) {
        ship.update();
        ship.move();
    }
}

function touchStarted(click) {
    touches.push(click);
}

function touchEnded() {
    
}