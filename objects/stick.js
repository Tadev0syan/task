class Stick {
    constructor (position) {
        this.position = position;
        this.rotation = 0;
    }

    // update method is called every frame (see detailed description in the dock) 
    update (delta) {

        this.position.x = delta.x;
        this.position.y = delta.y - 10;
        let alfa = 0;

        if(Mouse.position.x - this.position.x != 0){
            alfa = Math.abs((Mouse.position.y - this.position.y) / (Mouse.position.x - this.position.x));
        }


            if(Mouse.position.x > this.position.x){
                if(Mouse.position.y > this.position.y){
                    this.rotation = alfa;
                } else if (Mouse.position.y < this.position.y) {
                    this.rotation = 2 * Math.PI - alfa;
                }
                // else {
                //     this.rotation = 0;
                // }
            } else if (Mouse.position.x < this.position.x) {
                if(Mouse.position.y > this.position.y){
                    this.rotation = Math.PI - alfa;
                } else if (Mouse.position.y < this.position.y) {
                    this.rotation = Math.PI + alfa;
                }
                // else {
                //     this.rotation = Math.PI;
                // }
            }
            // else {
            //     if(Mouse.position.y > this.position.y){
            //         this.rotation = Math.PI / 2;
            //     }else if (Mouse.position.y < this.position.y){
            //         this.rotation = 3 * Math.PI / 2;
            //     }
            // }




    }

    // draws sprite every frame
    draw () {
        Canvas.drawImage(sprites.stick, this.position, this.origin, this.rotation);
    }
}
