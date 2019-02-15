/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  }

  if (e.keyCode == 37) {
    leftPressed = true;
  }

  if (e.keyCode == 38) {
    upPressed = true;
  }

  if (e.keyCode == 40) {
    downPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  }

  if (e.keyCode == 37) {
    leftPressed = false;
  }

  if (e.keyCode == 38) {
    upPressed = false;
  }

  if (e.keyCode == 40) {
    downPressed = false;
  }
}

var obstacles = new Obstacle();
var game = new Game(); // let dolphin = new Image();
// dolphin.src = "assets/dolphin.png";
// const dolphin8 = new Object(dolphin, 0, 0, 170, 70, 450, 620, 157, 30, 3);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.gameOver();
  obstacles.winner();

  if (play) {
    game.lives();
    dolphin1.drawObject();
    dolphin2.drawObject();
    polarBear1.drawObject();
    polarBear2.drawObject();
    whale1.drawWhale();
    whale2.drawWhale();
    humpbackwhale1.drawObject();
    humpbackwhale2.drawObject();
    dolphin3.drawObject();
    dolphin4.drawObject();
    polarBear3.drawObject();
    polarBear4.drawObject();
    iceberg1.drawIceberg(ctx);
    iceberg2.drawIceberg(ctx);
    iceberg3.drawIceberg(ctx);
    obstacles.oniceberg();
    penguin.penguin();
    obstacles.float();
    game.timer();
  }

  requestAnimationFrame(draw);
}

window.addEventListener("keyup", function (e) {
  if (e.keyCode === 13 && play === false) {
    play = true;
    document.getElementById("game").classList.remove("off");
    document.getElementById("game").classList.add("on");
    document.getElementById("gameScreen").classList.remove("on");
    document.getElementById("gameScreen").classList.add("off");
    draw();
  }
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map