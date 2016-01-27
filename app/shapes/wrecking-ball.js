import Shape from './shape';
import Point from '../point';
import HorizontalEngine from '../engines/horizontal-engine';
import Tire from './tire';
import Chain from './chain';

class WreckingBall extends Shape {
    constructor(x, y, pin = false) {
        super();
        this.points = [];
        this.x = x;
        this.y = y;

        this.ball = new Tire({spokes: 8, radius: 40, x: x, y: y + (40*4), pin: pin});
        this.chain = new Chain({x, y: y + 40, segments: 3, segmentLength: 40});

        this.p0 = new HorizontalEngine({x, y, range: 200, speed: 0.05});
        this.p0.attach(this.chain.beginning());
        this.chain.attach(this.ball.beginning());

        this.points = [this.p0, ...this.chain.points, ...this.ball.points];
    }
}

export default WreckingBall;