import Shape from './shape';
import Point from './../point';

class Chain extends Shape {
    constructor({x, y, segments, segmentLength = 40, friction = false, pin = false}) {
        super();
        this.points = [];
        this.points.push(
            new Point({x, y, hidden: false, pin: pin, friction})
        );

        for (let i = 1; i <= segments; i++) {
            let p = new Point({x, y: y + (i * segmentLength), hidden: false, friction});
            this.points[i-1].attach(p);
            this.points.push(p);
        }
    }

    attach(point) {
        this.points[this.points.length - 1].attach(point);
    }
}

export default Chain;