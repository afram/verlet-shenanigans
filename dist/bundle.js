/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _stage = __webpack_require__(2);

	var _stage2 = _interopRequireDefault(_stage);

	var _square = __webpack_require__(3);

	var _square2 = _interopRequireDefault(_square);

	var _chain = __webpack_require__(9);

	var _chain2 = _interopRequireDefault(_chain);

	var _horizontalEngine = __webpack_require__(10);

	var _horizontalEngine2 = _interopRequireDefault(_horizontalEngine);

	var _verticalEngine = __webpack_require__(12);

	var _verticalEngine2 = _interopRequireDefault(_verticalEngine);

	var _circularEngine = __webpack_require__(13);

	var _circularEngine2 = _interopRequireDefault(_circularEngine);

	var _wreckingBall = __webpack_require__(14);

	var _wreckingBall2 = _interopRequireDefault(_wreckingBall);

	var _tire = __webpack_require__(15);

	var _tire2 = _interopRequireDefault(_tire);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canvas = document.createElement('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var stage = new _stage2.default(canvas);

	stage.add(new _square2.default(500, 650, 50)).add(new _square2.default(600, 550, 50)).add(new _square2.default(700, 450, 50)).add(new _square2.default(800, 350, 50)).add(new _square2.default(900, 250, 50)).add(new _square2.default(980, 150, 50));

	stage.add(new _horizontalEngine2.default({ x: 300, y: 300, range: 150 }));
	stage.add(new _verticalEngine2.default({ x: 300, y: 300, range: 150 }));
	stage.add(new _circularEngine2.default({ x: 300, y: 300, range: 150 }));

	stage.add(new _wreckingBall2.default(800, 300));

	stage.add(new _tire2.default({ spokes: 5, radius: 20, x: 100, y: 400, pin: false, hideSpokes: false }));
	stage.add(new _tire2.default({ spokes: 6, radius: 30, x: 1300, y: 700, pin: false, hideSpokes: false }));
	stage.add(new _tire2.default({ spokes: 7, radius: 40, x: 300, y: 600, pin: false, hideSpokes: false }));
	stage.add(new _tire2.default({ spokes: 8, radius: 50, x: 400, y: 650, pin: false, hideSpokes: false }));
	stage.add(new _tire2.default({ spokes: 9, radius: 60, x: 1200, y: 600, pin: false, hideSpokes: false }));

	function render() {
	    stage.update();
	    stage.draw();
	    requestAnimationFrame(render);
	}

	window.addEventListener('load', function () {
	    document.body.appendChild(canvas);
	    render();
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Stage = function () {
	    function Stage(canvas) {
	        _classCallCheck(this, Stage);

	        this.c = canvas;
	        this.w = canvas.width;
	        this.h = canvas.height;
	        this.ctx = canvas.getContext('2d');
	        this.shapes = [];
	    }

	    _createClass(Stage, [{
	        key: 'add',
	        value: function add(shape) {
	            this.shapes.push(shape);
	            return this;
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            var _this = this;

	            this.shapes.forEach(function (s) {
	                return s.update(_this.c);
	            });
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {
	            var _this2 = this;

	            this.ctx.clearRect(0, 0, this.w, this.h);
	            this.shapes.forEach(function (s) {
	                return s.draw(_this2.ctx);
	            });
	        }
	    }]);

	    return Stage;
	}();

	exports.default = Stage;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _shape = __webpack_require__(4);

	var _shape2 = _interopRequireDefault(_shape);

	var _point = __webpack_require__(6);

	var _point2 = _interopRequireDefault(_point);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Square = function (_Shape) {
	    _inherits(Square, _Shape);

	    function Square(x, y, l) {
	        var friction = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	        _classCallCheck(this, Square);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Square).call(this));

	        _this.p0 = new _point2.default({ x: x, y: y, hidden: true, friction: friction });
	        _this.p1 = new _point2.default({ x: x + l, y: y, hidden: true, friction: friction });
	        _this.p2 = new _point2.default({ x: x + l, y: y + l, hidden: true, friction: friction });
	        _this.p3 = new _point2.default({ x: x, y: y + l, hidden: true, friction: friction });

	        _this.points = [];
	        _this.points.push(_this.p0, _this.p1, _this.p2, _this.p3);

	        _this.p0.chain(_this.p1).chain(_this.p2).chain(_this.p3).chain(_this.p0).chain(_this.p2, true); // hidden true
	        return _this;
	    }

	    return Square;
	}(_shape2.default);

	exports.default = Square;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _consts = __webpack_require__(5);

	var _consts2 = _interopRequireDefault(_consts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Shape = function () {
	    function Shape() {
	        _classCallCheck(this, Shape);
	    }

	    _createClass(Shape, [{
	        key: 'beginning',
	        value: function beginning() {
	            return this.points[0];
	        }
	    }, {
	        key: 'update',
	        value: function update(canvas) {
	            this.points.forEach(function (p) {
	                return p.update();
	            });
	            var i = _consts2.default.PHYSICS_ACCURACY;
	            while (i--) {
	                this.points.forEach(function (p) {
	                    return p.resolveConstraints(canvas);
	                });
	            }
	        }
	    }, {
	        key: 'draw',
	        value: function draw(ctx) {
	            this.points.forEach(function (p) {
	                return p.draw(ctx);
	            });
	        }
	    }]);

	    return Shape;
	}();

	exports.default = Shape;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var GRAVITY = 0.5;
	var FRICTION = 0.990;
	var BOUNCE = 0.9;
	var PHYSICS_ACCURACY = 3;

	exports.default = { GRAVITY: GRAVITY, FRICTION: FRICTION, BOUNCE: BOUNCE, PHYSICS_ACCURACY: PHYSICS_ACCURACY };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _consts = __webpack_require__(5);

	var _consts2 = _interopRequireDefault(_consts);

	var _constraint = __webpack_require__(7);

	var _constraint2 = _interopRequireDefault(_constraint);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Point = function () {
	    function Point(_ref) {
	        var x = _ref.x;
	        var y = _ref.y;
	        var _ref$hidden = _ref.hidden;
	        var hidden = _ref$hidden === undefined ? false : _ref$hidden;
	        var _ref$pin = _ref.pin;
	        var pin = _ref$pin === undefined ? false : _ref$pin;
	        var _ref$radius = _ref.radius;
	        var radius = _ref$radius === undefined ? 2 : _ref$radius;
	        var _ref$friction = _ref.friction;
	        var friction = _ref$friction === undefined ? false : _ref$friction;

	        _classCallCheck(this, Point);

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

	        this.friction = friction || _consts2.default.FRICTION;
	    }

	    _createClass(Point, [{
	        key: 'update',
	        value: function update() {
	            this.vx = (this.x - this.oldX) * this.friction;
	            this.vy = (this.y - this.oldY) * this.friction;

	            this.oldX = this.x;
	            this.oldY = this.y;

	            this.x += this.vx;
	            this.y += this.vy + _consts2.default.GRAVITY;
	        }
	    }, {
	        key: 'attach',
	        value: function attach(point) {
	            var hidden = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	            this.constraints.push(new _constraint2.default({ p0: this, p1: point, hidden: hidden }));
	        }
	    }, {
	        key: 'chain',
	        value: function chain(point) {
	            var hidden = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	            this.attach(point, hidden);
	            return point;
	        }
	    }, {
	        key: 'draw',
	        value: function draw(ctx) {
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
	            this.constraints.forEach(function (c) {
	                return c.draw(ctx);
	            });
	            ctx.stroke();
	            ctx.restore();
	        }
	    }, {
	        key: 'resolveConstraints',
	        value: function resolveConstraints(canvas) {
	            if (this.pinX != null && this.pinY != null) {

	                this.x = this.pinX;
	                this.y = this.pinY;
	            }

	            this.constraints.forEach(function (c) {
	                return c.resolve();
	            });

	            if (this.x > canvas.width) {
	                this.x = canvas.width;
	                this.oldX = this.x + this.vx * _consts2.default.BOUNCE;
	            } else if (this.x < 0) {
	                this.x = 0;
	                this.oldX = this.x + this.vx * _consts2.default.BOUNCE;
	            }

	            if (this.y > canvas.height) {
	                this.y = canvas.height;
	                this.oldY = this.y + this.vy * _consts2.default.BOUNCE;
	            } else if (this.y < 0) {
	                this.y = 0;
	                this.oldY = this.y + this.vy * _consts2.default.BOUNCE;
	            }
	        }
	    }]);

	    return Point;
	}();

	exports.default = Point;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(8);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Constraint = function () {
	    function Constraint(_ref) {
	        var p0 = _ref.p0;
	        var p1 = _ref.p1;
	        var _ref$hidden = _ref.hidden;
	        var hidden = _ref$hidden === undefined ? false : _ref$hidden;

	        _classCallCheck(this, Constraint);

	        this.p0 = p0;
	        this.p1 = p1;
	        this.length = (0, _utils.distance)(p0, p1);
	        this.hidden = hidden;
	    }

	    _createClass(Constraint, [{
	        key: 'resolve',
	        value: function resolve() {
	            var dx = this.p1.x - this.p0.x;
	            var dy = this.p1.y - this.p0.y;
	            var distance = Math.sqrt(dx * dx + dy * dy);
	            var difference = this.length - distance;
	            var percent = difference / distance / 2;
	            var offsetX = dx * percent;
	            var offsetY = dy * percent;

	            this.p0.x -= offsetX;
	            this.p0.y -= offsetY;
	            this.p1.x += offsetX;
	            this.p1.y += offsetY;
	        }
	    }, {
	        key: 'draw',
	        value: function draw(ctx) {
	            if (!this.hidden) {
	                ctx.moveTo(this.p0.x, this.p0.y);
	                ctx.lineTo(this.p1.x, this.p1.y);
	            }
	        }
	    }]);

	    return Constraint;
	}();

	exports.default = Constraint;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.distance = distance;
	function distance(p0, p1) {
	    var dx = p1.x - p0.x,
	        dy = p1.y - p0.y;
	    return Math.sqrt(dx * dx + dy * dy);
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _shape = __webpack_require__(4);

	var _shape2 = _interopRequireDefault(_shape);

	var _point = __webpack_require__(6);

	var _point2 = _interopRequireDefault(_point);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chain = function (_Shape) {
	    _inherits(Chain, _Shape);

	    function Chain(_ref) {
	        var x = _ref.x;
	        var y = _ref.y;
	        var segments = _ref.segments;
	        var _ref$segmentLength = _ref.segmentLength;
	        var segmentLength = _ref$segmentLength === undefined ? 40 : _ref$segmentLength;
	        var _ref$friction = _ref.friction;
	        var friction = _ref$friction === undefined ? false : _ref$friction;
	        var _ref$pin = _ref.pin;
	        var pin = _ref$pin === undefined ? false : _ref$pin;

	        _classCallCheck(this, Chain);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chain).call(this));

	        _this.points = [];
	        _this.points.push(new _point2.default({ x: x, y: y, hidden: false, pin: pin, friction: friction }));

	        for (var i = 1; i <= segments; i++) {
	            var p = new _point2.default({ x: x, y: y + i * segmentLength, hidden: false, friction: friction });
	            _this.points[i - 1].attach(p);
	            _this.points.push(p);
	        }
	        return _this;
	    }

	    _createClass(Chain, [{
	        key: 'attach',
	        value: function attach(point) {
	            this.points[this.points.length - 1].attach(point);
	        }
	    }]);

	    return Chain;
	}(_shape2.default);

	exports.default = Chain;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _engine = __webpack_require__(11);

	var _engine2 = _interopRequireDefault(_engine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HorizontalEngine = function (_Engine) {
	    _inherits(HorizontalEngine, _Engine);

	    function HorizontalEngine() {
	        _classCallCheck(this, HorizontalEngine);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(HorizontalEngine).apply(this, arguments));
	    }

	    _createClass(HorizontalEngine, [{
	        key: 'update',
	        value: function update() {
	            this.x = this.pinX = this.baseX + Math.cos(this.angle) * this.range;
	            this.angle += this.speed;
	            this.y = this.pinY = this.baseY;
	        }
	    }]);

	    return HorizontalEngine;
	}(_engine2.default);

	exports.default = HorizontalEngine;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _point = __webpack_require__(6);

	var _point2 = _interopRequireDefault(_point);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Engine = function (_Point) {
	    _inherits(Engine, _Point);

	    function Engine(_ref) {
	        var x = _ref.x;
	        var y = _ref.y;
	        var _ref$hidden = _ref.hidden;
	        var hidden = _ref$hidden === undefined ? false : _ref$hidden;
	        var _ref$pin = _ref.pin;
	        var pin = _ref$pin === undefined ? false : _ref$pin;
	        var _ref$radius = _ref.radius;
	        var radius = _ref$radius === undefined ? 5 : _ref$radius;
	        var _ref$range = _ref.range;
	        var range = _ref$range === undefined ? 100 : _ref$range;
	        var _ref$angle = _ref.angle;
	        var angle = _ref$angle === undefined ? 0 : _ref$angle;
	        var _ref$speed = _ref.speed;
	        var speed = _ref$speed === undefined ? 0.05 : _ref$speed;
	        var _ref$baseX = _ref.baseX;
	        var baseX = _ref$baseX === undefined ? null : _ref$baseX;
	        var _ref$baseY = _ref.baseY;
	        var baseY = _ref$baseY === undefined ? null : _ref$baseY;
	        var _ref$gravity = _ref.gravity;
	        var gravity = _ref$gravity === undefined ? 0 : _ref$gravity;

	        _classCallCheck(this, Engine);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Engine).call(this, { x: x, y: y, hidden: hidden, pin: pin, radius: radius }));

	        _this.range = range;
	        _this.angle = angle;
	        _this.speed = speed;

	        _this.baseX = baseX || x;
	        _this.baseY = baseY || y;

	        return _this;
	    }

	    return Engine;
	}(_point2.default);

	exports.default = Engine;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _engine = __webpack_require__(11);

	var _engine2 = _interopRequireDefault(_engine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VerticalEngine = function (_Engine) {
	    _inherits(VerticalEngine, _Engine);

	    function VerticalEngine() {
	        _classCallCheck(this, VerticalEngine);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(VerticalEngine).apply(this, arguments));
	    }

	    _createClass(VerticalEngine, [{
	        key: 'update',
	        value: function update() {
	            this.y = this.pinY = this.baseY + Math.sin(this.angle) * this.range;
	            this.angle += this.speed;
	            this.x = this.baseX;
	        }
	    }]);

	    return VerticalEngine;
	}(_engine2.default);

	exports.default = VerticalEngine;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _engine = __webpack_require__(11);

	var _engine2 = _interopRequireDefault(_engine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CircularEngine = function (_Engine) {
	    _inherits(CircularEngine, _Engine);

	    function CircularEngine() {
	        _classCallCheck(this, CircularEngine);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CircularEngine).apply(this, arguments));
	    }

	    _createClass(CircularEngine, [{
	        key: 'update',
	        value: function update() {
	            this.pinX = this.x = this.baseX + Math.cos(this.angle) * this.range;
	            this.pinY = this.y = this.baseY + Math.sin(this.angle) * this.range;
	            this.angle += this.speed;
	        }
	    }]);

	    return CircularEngine;
	}(_engine2.default);

	exports.default = CircularEngine;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _shape = __webpack_require__(4);

	var _shape2 = _interopRequireDefault(_shape);

	var _point = __webpack_require__(6);

	var _point2 = _interopRequireDefault(_point);

	var _horizontalEngine = __webpack_require__(10);

	var _horizontalEngine2 = _interopRequireDefault(_horizontalEngine);

	var _tire = __webpack_require__(15);

	var _tire2 = _interopRequireDefault(_tire);

	var _chain = __webpack_require__(9);

	var _chain2 = _interopRequireDefault(_chain);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WreckingBall = function (_Shape) {
	    _inherits(WreckingBall, _Shape);

	    function WreckingBall(x, y) {
	        var pin = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	        _classCallCheck(this, WreckingBall);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WreckingBall).call(this));

	        _this.points = [];
	        _this.x = x;
	        _this.y = y;

	        _this.ball = new _tire2.default({ spokes: 8, radius: 40, x: x, y: y + 40 * 4, pin: pin });
	        _this.chain = new _chain2.default({ x: x, y: y + 40, segments: 3, segmentLength: 40 });

	        _this.p0 = new _horizontalEngine2.default({ x: x, y: y, range: 200, speed: 0.05 });
	        _this.p0.attach(_this.chain.beginning());
	        _this.chain.attach(_this.ball.beginning());

	        _this.points = [_this.p0].concat(_toConsumableArray(_this.chain.points), _toConsumableArray(_this.ball.points));
	        return _this;
	    }

	    return WreckingBall;
	}(_shape2.default);

	exports.default = WreckingBall;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _shape = __webpack_require__(4);

	var _shape2 = _interopRequireDefault(_shape);

	var _point = __webpack_require__(6);

	var _point2 = _interopRequireDefault(_point);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tire = function (_Shape) {
	    _inherits(Tire, _Shape);

	    function Tire(_ref) {
	        var _ref$spokes = _ref.spokes;
	        var spokes = _ref$spokes === undefined ? 6 : _ref$spokes;
	        var radius = _ref.radius;
	        var x = _ref.x;
	        var y = _ref.y;
	        var _ref$friction = _ref.friction;
	        var friction = _ref$friction === undefined ? false : _ref$friction;
	        var _ref$pin = _ref.pin;
	        var pin = _ref$pin === undefined ? true : _ref$pin;
	        var _ref$hideSpokes = _ref.hideSpokes;
	        var hideSpokes = _ref$hideSpokes === undefined ? true : _ref$hideSpokes;

	        _classCallCheck(this, Tire);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tire).call(this));

	        _this.points = [];
	        _this.angle = 2 * Math.PI / spokes;
	        _this.x = x;
	        _this.y = y;

	        _this.pc = new _point2.default({ x: x, y: y, hidden: true, friction: friction }); // center

	        var nextX = function nextX(segment) {
	            return x + radius * Math.cos(_this.angle * segment);
	        };

	        var nextY = function nextY(segment) {
	            return y + radius * Math.sin(_this.angle * segment);
	        };

	        for (var i = 0; i < spokes; i++) {
	            var p = new _point2.default({ x: nextX(i), y: nextY(i), hidden: true, friction: friction, pin: pin });
	            _this.pc.chain(p, hideSpokes);
	            if (_this.points.length > 0) _this.points[_this.points.length - 1].chain(p);
	            _this.points.push(p);
	        }

	        _this.points[_this.points.length - 1].chain(_this.points[0]);
	        _this.points.push(_this.pc);
	        return _this;
	    }

	    _createClass(Tire, [{
	        key: 'attach',
	        value: function attach(pin) {
	            pin.attach(this.points[0]);
	        }
	    }]);

	    return Tire;
	}(_shape2.default);

	exports.default = Tire;

/***/ }
/******/ ]);