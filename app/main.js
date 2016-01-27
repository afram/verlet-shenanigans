import Stage from './stage';
import Square from './shapes/square';
import Chain from './shapes/chain';
import HorizontalEngine from './engines/horizontal-engine';
import VerticalEngine from './engines/vertical-engine';
import CircularEngine from './engines/circular-engine';
import WreckingBall from './shapes/wrecking-ball';
import Tire from './shapes/tire';


let canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stage = new Stage(canvas);

stage
    .add(new Square(500, 650, 50))
    .add(new Square(600, 550, 50))
    .add(new Square(700, 450, 50))
    .add(new Square(800, 350, 50))
    .add(new Square(900, 250, 50))
    .add(new Square(980, 150, 50));

stage.add(new HorizontalEngine({x: 300, y: 300, range: 150}));
stage.add(new VerticalEngine({x: 300, y: 300, range: 150}));
stage.add(new CircularEngine({x: 300, y: 300, range: 150}));

stage.add(new WreckingBall(800, 300));

stage.add(new Tire({spokes: 5, radius: 20, x: 100, y: 400, pin: false, hideSpokes: false}));
stage.add(new Tire({spokes: 6, radius: 30, x: 1300, y: 700, pin: false, hideSpokes: false}));
stage.add(new Tire({spokes: 7, radius: 40, x: 300, y: 600, pin: false, hideSpokes: false}));
stage.add(new Tire({spokes: 8, radius: 50, x: 400, y: 650, pin: false, hideSpokes: false}));
stage.add(new Tire({spokes: 9, radius: 60, x: 1200, y: 600, pin: false, hideSpokes: false}));

function render() {
    stage.update();
    stage.draw();
    requestAnimationFrame(render);
}

window.addEventListener('load', function() {
    document.body.appendChild(canvas);
    render();
});