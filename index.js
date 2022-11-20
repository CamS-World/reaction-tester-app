const startBtn = document.getElementById("red-button");
const shapeContainer = document.getElementById("shape-container");
startBtn.addEventListener("click", () => {
  shape.style.display = "none";
  countdown();
  setTimeout(initialShape, 4500);
  setTimeout(startGame, 4500);
});

function initialShape() {
  let top = Math.random() * 36.6;
  let left = Math.random() * 75.3;
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

function countdown() {
  setTimeout(showThree, 1000);
  setTimeout(hideThree, 1300);
  setTimeout(showTwo, 2000);
  setTimeout(hideTwo, 2300);
  setTimeout(showOne, 3000);
  setTimeout(hideOne, 3300);
  setTimeout(showStart, 4000);
  setTimeout(hideStart, 4300);
}

const startDiv = document.getElementById("start-sign");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");

function showThree() {
  three.style.display = "block";
  playAudio(soundThree);
}

function hideThree() {
  three.style.display = "none";
}

function showTwo() {
  two.style.display = "block";
  playAudio(soundTwo);
}

function hideTwo() {
  two.style.display = "none";
}

function showOne() {
  one.style.display = "block";
  playAudio(soundOne);
}

function hideOne() {
  one.style.display = "none";
}

function showStart() {
  startDiv.style.display = "block";
  playAudio(raceSound);
}

function hideStart() {
  startDiv.style.display = "none";
}

function startGame() {
  let start = new Date().getTime();

  const shape = document.getElementById("shape");
  shape.addEventListener("click", () => {
    shape.style.display = "none";
    let end = new Date().getTime();
    let timeTaken = (end - start) / 1000;
    playAudio(sound);
    document.getElementById("time").innerText = timeTaken + "s";
    appearAfterDelay();
  });

  function makeShapeAppear() {
    let top = Math.random() * 36.6;
    let left = Math.random() * 75.3;
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
    start = new Date().getTime();
  }

  function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() + 1000);
  }
}

const raceSound = document.getElementById("raceSound");
var sound = document.getElementById("whoosh");
var soundOne = document.getElementById("oneSound");
var soundTwo = document.getElementById("twoSound");
var soundThree = document.getElementById("threeSound");
function playAudio(sound) {
  sound.play();
}

// randomize color
const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
let randomColor = () => {
  let hex = "#";
  for (var i = 0; i < 6; i++) {
    let randomIndex = Math.floor(hexValues.length * Math.random());
    let randomValue = hexValues[randomIndex];
    hex = hex + randomValue;

    if (hex == "#cdc5c2") {
      hex = "#1f2025";
    }
  }
  return hex;
};
randomColor();
console.log(randomColor());

shape.style.backgroundColor = randomColor();

// Randomize Size
let randomSize = () => {
  let shapeSize = "px";
  let shapeWidth = Math.floor(Math.random() * 350);
  shapeSize = shapeWidth + shapeSize;
  return shapeSize;
};
console.log(randomSize());

shape.style.height = randomSize();
shape.style.width = shape.style.height;

//Randomize Shape
let randomizeShape = () => {
  let random = Math.floor(Math.random() * 2);
  let borderRadius = 0;
  let appendPercent = "%";
  if (random == 1) {
    borderRadius = 50;
  } else {
    borderRadius = 0;
  }
  borderRadius = borderRadius + appendPercent;
  return borderRadius;
};
shape.style.borderRadius = randomizeShape();
