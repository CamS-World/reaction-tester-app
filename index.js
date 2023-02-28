// music player block

var themeMusic = document.getElementById("theme-music");
document.getElementById("theme-music").loop = true;
document.getElementById("theme-music").volume = 0.5;

var musicBtn = document.getElementById("music-player");

playMusic()

// play music function
function playMusic(){
  musicBtn.addEventListener("click", () => {
    themeMusic.play();
    musicBtn.innerText = "pause";
    pauseMusic()
  });
}

// pause music function
function pauseMusic(){
  
    musicBtn.addEventListener("click", () => {
    themeMusic.pause();
    musicBtn.innerText = "play";
    playMusic()
  });
 }
 
 // music player block ends
 
 // Start sequence
const startBtn = document.getElementById("startBtn");

const shape = document.getElementById("shape");

startBtn.addEventListener("click", () => {
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

const startDiv = document.getElementById("start-sign");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");

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
  setTimeout(hideStart, 300)
}

function hideStart() {
  startDiv.style.display = "none";
}
// end of countdown sequence

// shows initial shape

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

function getTime() {
  return new Date().getTime();
}

const average = document.getElementById("avg-secs")

function startGame() {
  
  let attempts = 0;

  let start = 0;
  start = getTime()


  // shape onClick
  shape.addEventListener("click", () => {
    shape.style.display = "none";

    playAudio(sound);

    if (attempts < 3) {
      let end = getTime()
      console.log("end: " + end);
      console.log("attempts pre increment: " + attempts)
      attempts++;
      console.log("attempts post increment: " + attempts)
      let timeTaken = (end - start) / 1000;
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
    
    start = getTime();
    console.log("make shape appear start: " + start);
    }
    else {
      average.innerHTML = findAvgTime(
        recordedTimes
      );
      resetGame()
      console.log("We have reached 3 attempts. It's over.")
    }
  }

  function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() + 1000);
  }
}

function resetGame(){
      attempts = 0;
      recordedTimes.length = 0;
      start = 0;
      startBtn.disabled = false;
      setTimeout(resetAvgClock,2000);
      console.log("cleared");
}

function resetAvgClock() {average.innerHTML = Number.parseFloat(0).toFixed(2) + "s";}

// The sounds
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

// Randomize Size
let randomSize = () => {
  let shapeSize = "px";
  let shapeWidth = Math.floor(Math.random() * 350);
  shapeSize = shapeWidth + shapeSize;
  return shapeSize;
};

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

let recordedTimes = [];

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
