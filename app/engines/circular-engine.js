import Engine from './engine';

class CircularEngine extends Engine {
    update() {
        this.pinX = this.x = this.baseX + Math.cos(this.angle) * this.range;
        this.pinY = this.y = this.baseY + Math.sin(this.angle) * this.range;
        this.angle += this.speed;
    }
}

export default CircularEngine;