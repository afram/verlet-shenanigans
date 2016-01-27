import consts from './consts';
import Constraint from './constraint';

class Point {
    constructor({x, y, hidden = false, pin = false, radius = 2, friction = false}) {
        this.x = x;
        this.y = y;
        this.oldX = x;
        this.oldY = y;

        this.vx = 0;
        this.vy = 0;

        this.pinX = pin ? this.x : null;
        this.pinY = pin ? this.y : null;

        this.hidden = hidden;

        this.r = radius;
        this.constraints = [];

        this.friction = friction || consts.FRICTION;
    }

    update() {
        this.vx = (this.x - this.oldX) * this.friction;
        this.vy = (this.y - this.oldY) * this.friction;

        this.oldX = this.x;
        this.oldY = this.y;

        this.x += this.vx;
        this.y += this.vy + consts.GRAVITY;
    }

    attach(point, hidden = false) {
        this.constraints.push(new Constraint({p0: this, p1: point, hidden}));
    }

    chain(point, hidden = false) {
        this.attach(point, hidden);
        return point;
    }

    draw(ctx) {
        if (!this.hidden) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            ctx.fillStyle = 'green';
            ctx.fill();
            ctx.restore();
        }

        ctx.save();
        ctx.beginPath();
        this.constraints.forEach(c => c.draw(ctx));
        ctx.stroke();
        ctx.restore();
    }

    resolveConstraints(canvas) {
        if (this.pinX != null && this.pinY != null) {

            this.x = this.pinX;
            this.y = this.pinY;
        }

        this.constraints.forEach(c => c.resolve());

        if (this.x > canvas.width) {
            this.x = canvas.width;
            this.oldX = this.x + this.vx * consts.BOUNCE;
        }

        else if (this.x < 0) {
            this.x = 0;
            this.oldX = this.x + this.vx * consts.BOUNCE;
        }

        if (this.y > canvas.height) {
            this.y = canvas.height;
            this.oldY = this.y + this.vy * consts.BOUNCE;
        }

        else if (this.y < 0) {
            this.y = 0;
            this.oldY = this.y + this.vy * consts.BOUNCE;
        }
    }
}

export default Point;