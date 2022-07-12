const BALL_ORIGIN = new Vector2(25, 25);
const BALL_DIAMETER = 38;
const BALL_RADIUS = BALL_DIAMETER / 2;
const HOLE_RADIUS = 46;

class Ball {
    constructor (position, color) {
        this.position = position;

        // get ball sprite by its color
        this.sprite = getBallSpriteByColor(color);
    }

    // update method is called every frame (see detailed description in the dock) 
    update (delta) {
        this.position.x += delta.x;
        this.position.y += delta.y;

        stickDelta.x = this.position.x;
        stickDelta.y = this.position.y;

        if(this.position.x >= 1430 || this.position.x <= 65){
            ballDelta.x *= -1;
        }
        if(this.position.y >= 750 || this.position.y <= 65){
            ballDelta.y *= -1;
        }

        if(Mouse.left.pressed){
            if(Mouse.position.x <= this.position.x + BALL_RADIUS && Mouse.position.x >= this.position.x - BALL_RADIUS){
                if(Mouse.position.y <= this.position.y + BALL_RADIUS && Mouse.position.y >= this.position.y - BALL_RADIUS){
                    // ballDelta.x = random(1,6);
                    // ballDelta.y = random(1,6);
                }
            }
        }



    }

    // draws sprite every frame
    draw () {
        Canvas.drawImage(this.sprite, this.position, BALL_ORIGIN);
    }
}

// function random(a,b){
//     return Math.floor((b-a+1)*Math.random())
// }