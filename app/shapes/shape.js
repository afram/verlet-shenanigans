import consts from './../consts';

class Shape {
    beginning() {
        return this.points[0];
    }

    update(canvas) {
        this.points.forEach(p => p.update());
        let i = consts.PHYSICS_ACCURACY;
        while(i--) {
            this.points.forEach(p => p.resolveConstraints(canvas));
        }
    }

    draw(ctx) {
        this.points.forEach(p => p.draw(ctx));
    }
}

export default Shape;