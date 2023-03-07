// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/red-button-edit.png":[function(require,module,exports) {
module.exports = "/red-button-edit.39f12031.png";
},{}],"modules/test.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gamePage;
var _redButtonEdit = _interopRequireDefault(require("../assets/red-button-edit.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function gamePage() {
  return "\n    <!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"style.css\" />\n    <link\n      rel=\"stylesheet\"\n      href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\"\n    />\n  </head>\n\n  <body>\n    <div id=\"page-container\">\n      <h1 id=\"title\">\n        Reaction Blaster <span class=\"material-symbols-outlined\"> Timer </span> \n      </h1>\n\n    \n     <h2>Click on the boxes and circles as quickly as possible.</h2>\n      <p>\n        <strong id=\"average-tag\">Average:</strong\n        ><span id=\"avg-secs\">0.00s</span>\n      </p>\n      <span id=\"time\">0.00s</span>\n      <p><strong id=\"time-tag\">Best time:</strong></p>\n\n      <br />\n      <br />\n      <div id=\"shape-container\">\n        <div id=\"three\">3</div>\n        <div id=\"two\">2</div>\n        <div id=\"one\">1</div>\n        <div id=\"start-sign\">Start!</div>\n        <div id=\"shape\"></div>\n      </div>\n\n      <span id=\"start-btn-text\">Press button to start.</span>\n      \n\n      <button id=\"startBtn\" ><img\n        src=\"".concat(_redButtonEdit.default, "\"\n        alt=\"red-button\"\n        id=\"startBtn\"\n      /></button> \n      <button id=\"music-player\">Music</button>\n\n      <audio id=\"whoosh\">\n        <source src=\"/assets/video-game-beep.mp3\" type=\"audio/mpeg\" />\n      </audio>\n      <audio id=\"oneSound\">\n        <source src=\"/assets/oneSound.mp4\" type=\"audio/mpeg\" />\n      </audio>\n      <audio id=\"twoSound\">\n        <source src=\"/assets/twoSound.mp4\" type=\"audio/mpeg\" />\n      </audio>\n      <audio id=\"threeSound\">\n        <source src=\"/assets/threeSound.mp4\" type=\"audio/mpeg\" />\n      </audio>\n      <audio id=\"raceSound\">\n        <source src=\"/assets/mario-kart-race-sound.mp4\" type=\"audio/mpeg\" />\n      </audio>\n      <audio id=\"theme-music\">\n        <source\n          src=\"/assets/Jeremy_Blake_-_Powerup_NO_COPYRIGHT_8-bit_Music.mp3\"\n          type=\"audio/mpeg\"\n        />\n      </audio> \n       <script type=\"text/javascript\" src=\"index.js\"></script>\n      \n    </div>\n  </body>\n</html>\n    ");
}
},{"../assets/red-button-edit.png":"assets/red-button-edit.png"}],"index.js":[function(require,module,exports) {
"use strict";

var _test = _interopRequireDefault(require("./modules/test"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// music player block

getGame();
function getGame() {
  var getGameBtn = document.querySelector('#goToGame');
  getGameBtn.addEventListener('click', function () {
    var app = document.querySelector('#page-container');
    app.innerHTML = (0, _test.default)();
  });
}
var themeMusic = document.getElementById("theme-music");
document.getElementById("theme-music").loop = true;
document.getElementById("theme-music").volume = 0.5;
var musicBtn = document.getElementById("music-player");
playMusic();

// play music function
function playMusic() {
  musicBtn.addEventListener("click", function () {
    themeMusic.play();
    musicBtn.innerText = "pause";
    pauseMusic();
  });
}

// pause music function
function pauseMusic() {
  musicBtn.addEventListener("click", function () {
    themeMusic.pause();
    musicBtn.innerText = "play";
    playMusic();
  });
}

// music player block ends

// Start sequence
var startBtn = document.getElementById("startBtn");
var shape = document.getElementById("shape");
startBtn.addEventListener("click", function () {
  startBtn.disabled = true;
  countdown();
  setTimeout(initialShape, 4500);
  setTimeout(startGame, 4700);
});

// Countdown functionality
function countdown() {
  setTimeout(showThree, 1000);
  setTimeout(showTwo, 2000);
  setTimeout(showOne, 3000);
  setTimeout(showStart, 4000);
}

// TODO: merge those show and hides

var startDiv = document.getElementById("start-sign");
var three = document.getElementById("three");
var two = document.getElementById("two");
var one = document.getElementById("one");
function showThree() {
  three.style.display = "block";
  playAudio(soundThree);
  setTimeout(hideThree, 300);
}
function showTwo() {
  two.style.display = "block";
  playAudio(soundTwo);
  setTimeout(hideTwo, 300);
}
function showOne() {
  one.style.display = "block";
  playAudio(soundOne);
  setTimeout(hideOne, 300);
}
function hideThree() {
  three.style.display = "none";
}
function hideTwo() {
  two.style.display = "none";
}
function hideOne() {
  one.style.display = "none";
}
function showStart() {
  startDiv.style.display = "block";
  playAudio(raceSound);
  setTimeout(hideStart, 300);
}
function hideStart() {
  startDiv.style.display = "none";
}
// end of countdown sequence

// shows initial shape

function initialShape() {
  var top = Math.random() * 36.6;
  var left = Math.random() * 75.3;
  shape.style.top = top + "%";
  shape.style.left = left + "%";
  shape.style.backgroundColor = randomColor();
  shape.style.height = randomSize();
  shape.style.minHeight = 30 + "px";
  shape.style.maxHeight = 63.4 + "%";
  shape.style.width = shape.style.height;
  shape.style.minWidth = shape.style.minHeight;
  shape.style.maxWidth = shape.style.maxWidth;
  shape.style.borderRadius = randomizeShape();
  shape.style.display = "block";
}
function getTime() {
  return new Date().getTime();
}
var average = document.getElementById("avg-secs");
function startGame() {
  var attempts = 0;
  var start = 0;
  start = getTime();

  // shape onClick
  shape.addEventListener("click", function () {
    shape.style.display = "none";
    playAudio(sound);
    if (attempts < 3) {
      var end = getTime();
      console.log("end: " + end);
      console.log("attempts pre increment: " + attempts);
      attempts++;
      console.log("attempts post increment: " + attempts);
      var timeTaken = (end - start) / 1000;
      // console.log("start: " + start);
      recordedTimes.push(timeTaken);
      console.log("time added: " + timeTaken);
      document.getElementById("time").innerText = timeTaken + "s";
      appearAfterDelay();
    }
  });
  //end of shape onClick

  function makeShapeAppear() {
    if (attempts < 3) {
      var top = Math.random() * 36.6;
      var left = Math.random() * 75.3;
      shape.style.top = top + "%";
      shape.style.left = left + "%";
      shape.style.backgroundColor = randomColor();
      shape.style.height = randomSize();
      shape.style.minHeight = 30 + "px";
      shape.style.maxHeight = 63.4 + "%";
      shape.style.width = shape.style.height;
      shape.style.minWidth = shape.style.minHeight;
      shape.style.maxWidth = shape.style.maxWidth;
      shape.style.borderRadius = randomizeShape();
      shape.style.display = "block";
      start = getTime();
      console.log("make shape appear start: " + start);
    } else {
      average.innerHTML = findAvgTime(recordedTimes);
      resetGame();
      console.log("We have reached 3 attempts. It's over.");
    }
  }
  function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() + 1000);
  }
  function resetGame() {
    attempts = 0;
    recordedTimes.length = 0;
    start = 0;
    startBtn.disabled = false;
    setTimeout(resetAvgClock, 2000);
    console.log("cleared");
  }
}
function resetAvgClock() {
  average.innerHTML = Number.parseFloat(0).toFixed(2) + "s";
}

// The sounds
var raceSound = document.getElementById("raceSound");
var sound = document.getElementById("whoosh");
var soundOne = document.getElementById("oneSound");
var soundTwo = document.getElementById("twoSound");
var soundThree = document.getElementById("threeSound");
function playAudio(sound) {
  sound.play();
}

// randomize color
var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
var randomColor = function randomColor() {
  var hex = "#";
  for (var i = 0; i < 6; i++) {
    var randomIndex = Math.floor(hexValues.length * Math.random());
    var randomValue = hexValues[randomIndex];
    hex = hex + randomValue;
    if (hex == "#cdc5c2") {
      hex = "#1f2025";
    }
  }
  return hex;
};

// Randomize Size
var randomSize = function randomSize() {
  var shapeSize = "px";
  var shapeWidth = Math.floor(Math.random() * 350);
  shapeSize = shapeWidth + shapeSize;
  return shapeSize;
};
shape.style.height = randomSize();
shape.style.width = shape.style.height;

//Randomize Shape
var randomizeShape = function randomizeShape() {
  var random = Math.floor(Math.random() * 2);
  var borderRadius = 0;
  var appendPercent = "%";
  if (random == 1) {
    borderRadius = 50;
  } else {
    borderRadius = 0;
  }
  borderRadius = borderRadius + appendPercent;
  return borderRadius;
};
var recordedTimes = [];
function findAvgTime(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  var avg = sum / arr.length;
  console.log(arr);
  console.log("the sum " + sum);
  console.log(sum + "/" + arr.length + "=" + avg);
  return threeDecimal(avg) + "s";
}
function threeDecimal(num) {
  return Number.parseFloat(num).toFixed(3);
}
},{"./modules/test":"modules/test.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57738" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/reaction-tester.e31bb0bc.js.map