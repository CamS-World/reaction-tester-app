const startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", () => {
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
  startGame();
});

function startGame() {
  let start = new Date().getTime();

  const shape = document.getElementById("shape");
  shape.addEventListener("click", () => {
    shape.style.display = "none";
    let end = new Date().getTime();
    let timeTaken = (end - start) / 1000;
    playAudio();
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

var sound = document.getElementById("whoosh");
function playAudio() {
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
