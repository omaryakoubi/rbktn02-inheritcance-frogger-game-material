// Enemies our player must avoid
var Enemy = function(posX,posY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = posX;
    this.y = posY;
    // speed will control the update method
    this.speed = 2;
    // direction needed to guide the bug when moving through the canvas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    this.isGoingRight = true;
};

// Flip the enemy's direction
Enemy.prototype.flip = function() {
    this.isGoingRight = !this.isGoingRight;
    this.speed *= -1;
    if (this.sprite === 'images/enemy-bug.png') {
        this.sprite = 'images/left-enemy-bug.png';
    } else {
        this.sprite = 'images/enemy-bug.png';
    }
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += dt * this.speed;
    if (this.x > 390 || this.x < 10) {
        this.flip();
    }
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function() {
    this.sprite = 'images/char-boy.png';  
    this.x      = 2 * 101;
    this.y      = 6 * 63;
}
// This class requires an update(), render() and
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// a handleInput() method.
Player.prototype.handleInput = function (pressedKey) {
    switch(pressedKey) {
        case 'up':
            this.move(0,-1);
            break;
        case 'down':
            this.move(0,1);
            break;
        case 'right' :
            this.move(1,0);
            break;
        case 'left' :
            this.move(-1,0);
            break;
    }
}

// Moves player acoss s
Player.prototype.move = function(deltaX, deltaY) {
    var dX = deltaX * 101;
    var dY = deltaY * 83;
    if ((this.x + dX > -10) && (this.x + dX < 405)) {
        this.x += dX;
    }
    if ((this.y + dY > -70) && (this.y + dY < 388)) {
        this.y += dY;
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
allEnemies.push(new Enemy(0 * 101 + 10, 1 * 63));
allEnemies.push(new Enemy(1 * 101     , 2 * 63 + 20));
allEnemies.push(new Enemy(2 * 101     , 3 * 63 + 40));


// Place the player object in a variable called player
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


