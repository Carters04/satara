function Ship() {
    this.s = height/5;
    this.pos = createVector(width/2, height-this.s/2);
    this.v = 7.5;

    this.update = function() {
        imageMode(CENTER);
        image(imgs[1], this.pos.x, this.pos.y, this.s, this.s);
        imageMode(CORNER);
    }

    this.move = function() {
        // for (var i = touches.length-1; i >= 0; i--) {
            if (mouseIsPressed) {
                if (mouseX < width/2) {
                    this.pos.x -= this.v;
                } else if (mouseX > width/2) {
                    this.pos.x += this.v;
                }
            }
        // }
    }
}