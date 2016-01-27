import Engine from './engine';

class VerticalEngine extends Engine {
    update() {
        this.y = this.pinY = this.baseY + Math.sin(this.angle) * this.range;
        this.angle += this.speed;
        this.x = this.baseX;
    }
}

export default VerticalEngine;