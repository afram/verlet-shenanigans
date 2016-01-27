import Shape from './shape';
import Point from '../point';

class Tire extends Shape {
    constructor({spokes = 6, radius, x, y, friction = false, pin = true, hideSpokes = true}) {
        super();
        this.points = [];
        this.angle = 2*Math.PI/spokes;
        this.x = x;
        this.y = y;

        this.pc = new Point({x, y, hidden: true, friction}); // center

        let nextX = segment => {
            return x + radius * Math.cos(this.angle * segment);
        };

        let nextY = segment => {
            return y + radius * Math.sin(this.angle * segment)
        };

        for (let i = 0; i < spokes; i++) {
            let p = new Point({x: nextX(i), y: nextY(i), hidden: true, friction, pin: pin});
            this.pc.chain(p, hideSpokes);
            if (this.points.length > 0) this.points[this.points.length - 1].chain(p);
            this.points.push(p);
        }

        this.points[this.points.length - 1].chain(this.points[0]);
        this.points.push(this.pc);
    }

    attach(pin) {
        pin.attach(this.points[0]);
    }
}

export default Tire;