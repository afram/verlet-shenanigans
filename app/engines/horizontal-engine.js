import Engine from './engine';

class HorizontalEngine extends Engine {
    update() {
        this.x = this.pinX = this.baseX + Math.cos(this.angle) * this.range;
        this.angle += this.speed;
        this.y = this.pinY = this.baseY;
    }
}

export default HorizontalEngine;