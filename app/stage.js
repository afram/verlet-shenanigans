class Stage {
    constructor(canvas) {
        this.c = canvas;
        this.w = canvas.width;
        this.h = canvas.height;
        this.ctx = canvas.getContext('2d');
        this.shapes = [];
    }

    add(shape) {
        this.shapes.push(shape);
        return this;
    }

    update() {
        this.shapes.forEach(s => s.update(this.c));
    }

    draw() {
        this.ctx.clearRect(0, 0, this.w, this.h);
        this.shapes.forEach(s => s.draw(this.ctx));
    }
}

export default Stage;