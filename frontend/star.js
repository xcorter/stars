function Star(id, xCenter, yCenter) {

    function generateAngle () {
        return Math.random() * 360;
    }

    this.id = id;
    this.angle = generateAngle();
    this.x = xCenter;
    this.y = yCenter;

    this.size = Math.floor((Math.random()*2)+1);
}

Star.prototype.move = function() {
    this.x = this.x + Math.cos(this.angle);
    this.y = this.y + Math.sin(this.angle);
};

Star.prototype.getX = function() {
    return this.x;
};

Star.prototype.getY = function() {
    return this.y;
};

Star.prototype.getSize = function() {
    return this.size;
};