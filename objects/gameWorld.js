const DELTA = 1/177;
let ballDelta = {x:0, y:0};
let ballPos = {x: -1, y: -1}
let stickDelta = {x: -1, y: -1, rotation:0};

class GameWorld {
    constructor () {
        // create the ball
        this.ball = new Ball(new Vector2(413, 413), Color.white);

        // create the stick
        this.stick = new Stick(new Vector2(20, 850)); 

        // create the table
        this.table = new Table();
    }

    // update method is called every frame (see detailed description in the dock) 
    update () {
        // example code for mouse inputs usage (can be removed)
        // mouse down example
        if (Mouse.left.down) {
            console.log("mouse down");
        } else {
            console.log("mouse up");
            stickDelta.x0 = -1;
            stickDelta.y0 = -1;
        }


        // press and mouse position example
        if (Mouse.left.pressed) {
           console.log("mouse pressed:", Mouse.position);
        }

        // updating objects created in the constructor
        this.table.update(DELTA);
        this.ball.update(ballDelta);
        this.stick.update(stickDelta);
    }

    // draws sprite every frame
    draw () {
        // updating objects created in the constructor
        this.table.draw();
        this.ball.draw();
        this.stick.draw();
    }
}
