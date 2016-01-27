import Shape from './shape';
import Point from './../point';

class Square extends Shape {
    constructor(x, y, l, friction = false) {
        super();
        this.p0 = new Point({x, y, hidden: true, friction});
        this.p1 = new Point({x: x + l, y, hidden: true, friction});
        this.p2 = new Point({x: x + l, y: y + l, hidden: true, friction});
        this.p3 = new Point({x, y: y + l, hidden: true, friction});

        this.points = [];
        this.points.push(this.p0, this.p1, this.p2, this.p3);

        this.p0
            .chain(this.p1)
            .chain(this.p2)
            .chain(this.p3)
            .chain(this.p0)
            .chain(this.p2, true); // hidden true
    }
}

export default Square;