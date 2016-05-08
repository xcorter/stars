function Canvas(id) {
    this.node = document.getElementById(id);

    this.ctx = this.node.getContext('2d');
    this.xMax = this.node.width = window.screen.width;
    this.yMax = this.node.height = window.screen.height;

    /**
     * @type {{stars: Star}}
     */
    this.starKeeper = {
        stars: []
    };
    this.starKeeper.addStar = function(star) {
        this.stars.push(star);
    };
    this.starKeeper.deleteStar = function(id) {
        delete this.stars[id];
        this.stars.splice(id, 1);
    }
}

Canvas.prototype.updateSize = function() {
    this.xMax = this.node.width = window.screen.width;
    this.yMax = this.node.height = window.screen.height;
};

Canvas.prototype.createStars = function(limit) {
    var star;
    for(var i = 0; i <= limit; i++) {
        star = new Star(i, this.xMax/2, this.yMax/2);
        this.starKeeper.addStar(star);
    }
};

Canvas.prototype.getContext = function() {
    return this.ctx;
};

Canvas.prototype.draw = function() {
    this.ctx.clearRect(0, 0, this.xMax, this.yMax);
    var star;
    for (var i = 0; i < this.starKeeper.stars.length; i++) {
        star = this.starKeeper.stars[i];
        this.ctx.shadowBlur = Math.floor((Math.random()*15)+5);
        this.ctx.shadowColor = "white";
        var randomOpacityOne = Math.floor((Math.random()*9)+1);
        var randomOpacityTwo = Math.floor((Math.random()*9)+1);
        var randomHue = Math.floor((Math.random()*360)+1);
        this.ctx.fillStyle = "hsla("+randomHue+", 30%, 80%, ."+randomOpacityOne+randomOpacityTwo+")";
        this.ctx.fillRect(star.getX(), star.getY(), star.getSize(), star.getSize());
    }
};

Canvas.prototype.moveStars = function() {
    for (var i = this.starKeeper.stars.length - 1; i >= 0; i--) {
        star = this.starKeeper.stars[i];
        if (
            star.getX() <= 0 || star.getX() >= this.xMax ||
            star.getY() <= 0 || star.getY() >= this.yMax
        ) {
            this.starKeeper.deleteStar(i);
        } else {
            star.move();
        }
    }
};