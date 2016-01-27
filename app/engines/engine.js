import Point from './../point';

class Engine extends Point {
    constructor({
        x,
        y,
        hidden = false,
        pin = false,
        radius = 5,

        range = 100,
        angle = 0,
        speed = 0.05,
        baseX = null,
        baseY = null,
        gravity = 0
    }) {
        super({x, y, hidden, pin, radius});

        this.range = range;
        this.angle = angle;
        this.speed = speed;

        this.baseX = baseX || x;
        this.baseY = baseY || y;


    }
}

export default Engine;