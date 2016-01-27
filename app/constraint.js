import { distance } from './utils';

class Constraint {
    constructor({p0, p1, hidden = false}) {
        this.p0 = p0;
        this.p1 = p1;
        this.length = distance(p0, p1);
        this.hidden = hidden;
    }

    resolve() {
        let dx = this.p1.x - this.p0.x;
        let dy = this.p1.y - this.p0.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let difference = this.length - distance;
        let percent = difference / distance / 2;
        let offsetX = dx * percent;
        let offsetY = dy * percent;

        this.p0.x -= offsetX;
        this.p0.y -= offsetY;
        this.p1.x += offsetX;
        this.p1.y += offsetY;
    }

    draw(ctx) {
        if (!this.hidden) {
            ctx.moveTo(this.p0.x, this.p0.y);
            ctx.lineTo(this.p1.x, this.p1.y);
        }
    }
}

export default Constraint;