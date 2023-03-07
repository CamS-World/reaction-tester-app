import redBtnImg from '../assets/red-button-edit.png'

export default function gamePage(){
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reaction Tester</title>
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
  </head>

  <body>
    <div id="page-container">
      <h1 id="title">
        Reaction Tester <span class="material-symbols-outlined"> Timer </span> 
      </h1>

    
     <h2>Click on the boxes and circles as quickly as possible.</h2>
      <p>
        <strong id="average-tag">Average:</strong
        ><span id="avg-secs">0.00s</span>
      </p>
      <span id="time">0.00s</span>
      <p><strong id="time-tag">Best time:</strong></p>

      <br />
      <br />
      <div id="shape-container">
        <div id="three">3</div>
        <div id="two">2</div>
        <div id="one">1</div>
        <div id="start-sign">Start!</div>
        <div id="shape"></div>
      </div>

      <span id="start-btn-text">Press button to start.</span>
      

      <button id="startBtn" ><img
        src="${redBtnImg}"
        alt="red-button"
        id="startBtn"
      /></button> 
      <button id="music-player">Music</button>

      <audio id="whoosh">
        <source src="/assets/video-game-beep.mp3" type="audio/mpeg" />
      </audio>
      <audio id="oneSound">
        <source src="/assets/oneSound.mp4" type="audio/mpeg" />
      </audio>
      <audio id="twoSound">
        <source src="/assets/twoSound.mp4" type="audio/mpeg" />
      </audio>
      <audio id="threeSound">
        <source src="/assets/threeSound.mp4" type="audio/mpeg" />
      </audio>
      <audio id="raceSound">
        <source src="/assets/mario-kart-race-sound.mp4" type="audio/mpeg" />
      </audio>
      <audio id="theme-music">
        <source
          src="/assets/Jeremy_Blake_-_Powerup_NO_COPYRIGHT_8-bit_Music.mp3"
          type="audio/mpeg"
        />
      </audio> 
       <script type="text/javascript" src="index.js"></script>
      
    </div>
  </body>
</html>
    `;
}
