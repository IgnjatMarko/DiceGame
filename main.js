let btnRoll = document.querySelector(".rolldice");
let btnStop = document.querySelector(".stop");
let btnNewGame = document.querySelector(".newgame");

let dice1 = document.querySelector(".dice1");
let dice2 = document.querySelector(".dice2");

let scoreP1 = document.querySelector(".score1");
let scoreP2 = document.querySelector(".score2");

let outlineP1 = document.querySelector(".player1");
let outlineP2 = document.querySelector(".player2");
outlineP1.classList.add("active");

let currentPlayer = 1;
let playerScores = [0, 0];

btnRoll.addEventListener("click", function () {
  let diceRoll1 = Math.floor(Math.random() * 6) + 1;
  let diceRoll2 = Math.floor(Math.random() * 6) + 1;

  dice1.textContent = diceRoll1;
  dice2.textContent = diceRoll2;

  let totalScore = diceRoll1 + diceRoll2;

  if (diceRoll1 === 1 || diceRoll2 === 1) {
    playerScores[currentPlayer - 1] = 0;
    alert("Dice rolled a 1. Player score reset to 0.");
    currentPlayer = currentPlayer === 1 ? 2 : 1; // Player switch
  } else if (diceRoll1 === 6 || diceRoll2 === 6) {
    alert("Dice rolled a 6. Switching players.");
    playerScores[currentPlayer - 1] += totalScore;
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  } else {
    playerScores[currentPlayer - 1] += totalScore;
  }

  if (playerScores[currentPlayer - 1] >= 101) {
    alert(
      `Player ${currentPlayer} wins with ${
        playerScores[currentPlayer - 1]
      } points! Starting a new game.`
    );

    jsConfetti.addConfetti();

    playerScores = [0, 0];
    scoreP1.textContent = 0;
    scoreP2.textContent = 0;
    currentPlayer = 1;
  }

  // Displayed results
  scoreP1.textContent = playerScores[0];
  scoreP2.textContent = playerScores[1];

  outlineP1.classList.toggle("active", currentPlayer === 1);
  outlineP2.classList.toggle("active", currentPlayer === 2);
});

btnStop.addEventListener("click", function () {
  alert("Switching players.");
  currentPlayer = currentPlayer === 1 ? 2 : 1;

  outlineP1.classList.toggle("active", currentPlayer === 1);
  outlineP2.classList.toggle("active", currentPlayer === 2);
});

btnNewGame.addEventListener("click", function () {
  playerScores = [0, 0];
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;

  dice1.textContent = 0;
  dice2.textContent = 0;

  currentPlayer = 1;
  outlineP1.classList.add("active");
  outlineP2.classList.remove("active");

  alert("New game started.");
});

const canvas = document.getElementById("custom_canvas");
const button = document.getElementById("button");

const jsConfetti = new JSConfetti({ canvas });

setTimeout(() => {
  jsConfetti.addConfetti();
}, 500);

button.addEventListener("click", () => {
  jsConfetti.addConfetti();
});

const diceSVGs = {
  
  "0" : `<svg fill="#378321" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#378321"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M422.19 109.95L256.21 9.07c-19.91-12.1-44.52-12.1-64.43 0L25.81 109.95c-5.32 3.23-5.29 11.27.06 14.46L224 242.55l198.14-118.14c5.35-3.19 5.38-11.22.05-14.46zm13.84 44.63L240 271.46v223.82c0 12.88 13.39 20.91 24.05 14.43l152.16-92.48c19.68-11.96 31.79-33.94 31.79-57.7v-197.7c0-6.41-6.64-10.43-11.97-7.25zM0 161.83v197.7c0 23.77 12.11 45.74 31.79 57.7l152.16 92.47c10.67 6.48 24.05-1.54 24.05-14.43V271.46L11.97 154.58C6.64 151.4 0 155.42 0 161.83z"></path></g></svg>`,
  
  "1" : `<svg viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-dice-1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>1172</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M14.763,0 L3.178,0 C1.998,0 1.043,0.966 1.043,2.155 L1.043,13.845 C1.043,15.034 1.998,15.999 3.178,15.999 L14.763,15.999 C15.944,15.999 16.899,15.034 16.899,13.845 L16.899,2.155 C16.898,0.966 15.943,0 14.763,0 L14.763,0 Z M9.017,11.155 C7.321,11.155 5.948,9.749 5.948,8.015 C5.948,6.281 7.321,4.875 9.017,4.875 C10.711,4.875 12.086,6.281 12.086,8.015 C12.086,9.749 10.711,11.155 9.017,11.155 L9.017,11.155 Z" fill="#378321" class="si-glyph-fill"> </path> </g> </g></svg>`,

  "2" : `<svg viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-dice-2" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>1173</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M14.763,0 L3.178,0 C1.998,0 1.043,0.966 1.043,2.155 L1.043,13.845 C1.043,15.034 1.998,15.999 3.178,15.999 L14.763,15.999 C15.944,15.999 16.899,15.034 16.899,13.845 L16.899,2.155 C16.898,0.966 15.943,0 14.763,0 L14.763,0 Z M6.002,10.153 C4.856,10.153 3.927,9.202 3.927,8.03 C3.927,6.858 4.856,5.907 6.002,5.907 C7.148,5.907 8.078,6.858 8.078,8.03 C8.078,9.202 7.148,10.153 6.002,10.153 L6.002,10.153 Z M12.002,10.153 C10.856,10.153 9.927,9.202 9.927,8.03 C9.927,6.858 10.856,5.907 12.002,5.907 C13.148,5.907 14.078,6.858 14.078,8.03 C14.078,9.202 13.148,10.153 12.002,10.153 L12.002,10.153 Z" fill="#378321" class="si-glyph-fill"> </path> </g> </g></svg>`,

  "3" : `<svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-dice-3" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>1174</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M13.763,0 L2.178,0 C0.998,0 0.0430000001,0.966 0.0430000001,2.155 L0.0430000001,13.845 C0.0430000001,15.034 0.998,15.999 2.178,15.999 L13.763,15.999 C14.944,15.999 15.899,15.034 15.899,13.845 L15.899,2.155 C15.898,0.966 14.943,0 13.763,0 L13.763,0 Z M4.002,6.153 C2.856,6.153 1.927,5.202 1.927,4.03 C1.927,2.858 2.856,1.907 4.002,1.907 C5.148,1.907 6.078,2.858 6.078,4.03 C6.078,5.202 5.148,6.153 4.002,6.153 L4.002,6.153 Z M12.002,14.153 C10.856,14.153 9.927,13.202 9.927,12.03 C9.927,10.858 10.856,9.907 12.002,9.907 C13.148,9.907 14.078,10.858 14.078,12.03 C14.078,13.202 13.148,14.153 12.002,14.153 L12.002,14.153 Z M8.002,10.153 C6.856,10.153 5.927,9.202 5.927,8.03 C5.927,6.858 6.856,5.907 8.002,5.907 C9.148,5.907 10.078,6.858 10.078,8.03 C10.078,9.202 9.148,10.153 8.002,10.153 L8.002,10.153 Z" fill="#378321" class="si-glyph-fill"> </path> </g> </g></svg>`,

  "4" : `<svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-dice-6" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>1118</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M14.763,0 L3.178,0 C1.998,0 1.043,0.966 1.043,2.155 L1.043,13.845 C1.043,15.034 1.998,15.999 3.178,15.999 L14.763,15.999 C15.944,15.999 16.899,15.034 16.899,13.845 L16.899,2.155 C16.898,0.966 15.943,0 14.763,0 L14.763,0 Z M6.002,7.153 C4.856,7.153 3.927,6.202 3.927,5.03 C3.927,3.858 4.856,2.907 6.002,2.907 C7.148,2.907 8.078,3.858 8.078,5.03 C8.078,6.202 7.148,7.153 6.002,7.153 L6.002,7.153 Z M12.002,7.153 C10.856,7.153 9.927,6.202 9.927,5.03 C9.927,3.858 10.856,2.907 12.002,2.907 C13.148,2.907 14.078,3.858 14.078,5.03 C14.078,6.202 13.148,7.153 12.002,7.153 L12.002,7.153 Z M12.002,13.153 C10.856,13.153 9.927,12.202 9.927,11.03 C9.927,9.858 10.856,8.907 12.002,8.907 C13.148,8.907 14.078,9.858 14.078,11.03 C14.078,12.202 13.148,13.153 12.002,13.153 L12.002,13.153 Z M6.002,13.153 C4.856,13.153 3.927,12.202 3.927,11.03 C3.927,9.858 4.856,8.907 6.002,8.907 C7.148,8.907 8.078,9.858 8.078,11.03 C8.078,12.202 7.148,13.153 6.002,13.153 L6.002,13.153 Z" fill="#378321" class="si-glyph-fill"> </path> </g> </g></svg>`,
  
  "5" : `<svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-dice-5" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>1119</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M14.763,0 L3.178,0 C1.998,0 1.043,0.966 1.043,2.155 L1.043,13.845 C1.043,15.034 1.998,15.999 3.178,15.999 L14.763,15.999 C15.944,15.999 16.899,15.034 16.899,13.845 L16.899,2.155 C16.898,0.966 15.943,0 14.763,0 L14.763,0 Z M5.002,6.153 C3.856,6.153 2.927,5.202 2.927,4.03 C2.927,2.858 3.856,1.907 5.002,1.907 C6.148,1.907 7.078,2.858 7.078,4.03 C7.078,5.202 6.148,6.153 5.002,6.153 L5.002,6.153 Z M13.002,6.153 C11.856,6.153 10.927,5.202 10.927,4.03 C10.927,2.858 11.856,1.907 13.002,1.907 C14.148,1.907 15.078,2.858 15.078,4.03 C15.078,5.202 14.148,6.153 13.002,6.153 L13.002,6.153 Z M13.002,14.153 C11.856,14.153 10.927,13.202 10.927,12.03 C10.927,10.858 11.856,9.907 13.002,9.907 C14.148,9.907 15.078,10.858 15.078,12.03 C15.078,13.202 14.148,14.153 13.002,14.153 L13.002,14.153 Z M9.002,10.153 C7.856,10.153 6.927,9.202 6.927,8.03 C6.927,6.858 7.856,5.907 9.002,5.907 C10.148,5.907 11.078,6.858 11.078,8.03 C11.078,9.202 10.148,10.153 9.002,10.153 L9.002,10.153 Z M5.002,14.153 C3.856,14.153 2.927,13.202 2.927,12.03 C2.927,10.858 3.856,9.907 5.002,9.907 C6.148,9.907 7.078,10.858 7.078,12.03 C7.078,13.202 6.148,14.153 5.002,14.153 L5.002,14.153 Z" fill="#378321" class="si-glyph-fill"> </path> </g> </g></svg>`,
 
  "6" : `<svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-dice-6-" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>1121</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M14.763,0 L3.178,0 C1.998,0 1.043,0.966 1.043,2.155 L1.043,13.845 C1.043,15.034 1.998,15.999 3.178,15.999 L14.763,15.999 C15.944,15.999 16.899,15.034 16.899,13.845 L16.899,2.155 C16.898,0.966 15.943,0 14.763,0 L14.763,0 Z M4.002,7.153 C2.856,7.153 1.927,6.202 1.927,5.03 C1.927,3.858 2.856,2.907 4.002,2.907 C5.148,2.907 6.078,3.858 6.078,5.03 C6.078,6.202 5.148,7.153 4.002,7.153 L4.002,7.153 Z M14.002,7.153 C12.856,7.153 11.927,6.202 11.927,5.03 C11.927,3.858 12.856,2.907 14.002,2.907 C15.148,2.907 16.078,3.858 16.078,5.03 C16.078,6.202 15.148,7.153 14.002,7.153 L14.002,7.153 Z M9.002,13.153 C7.856,13.153 6.927,12.202 6.927,11.03 C6.927,9.858 7.856,8.907 9.002,8.907 C10.148,8.907 11.078,9.858 11.078,11.03 C11.078,12.202 10.148,13.153 9.002,13.153 L9.002,13.153 Z M14.002,13.153 C12.856,13.153 11.927,12.202 11.927,11.03 C11.927,9.858 12.856,8.907 14.002,8.907 C15.148,8.907 16.078,9.858 16.078,11.03 C16.078,12.202 15.148,13.153 14.002,13.153 L14.002,13.153 Z M9.002,7.153 C7.856,7.153 6.927,6.202 6.927,5.03 C6.927,3.858 7.856,2.907 9.002,2.907 C10.148,2.907 11.078,3.858 11.078,5.03 C11.078,6.202 10.148,7.153 9.002,7.153 L9.002,7.153 Z M4.002,13.153 C2.856,13.153 1.927,12.202 1.927,11.03 C1.927,9.858 2.856,8.907 4.002,8.907 C5.148,8.907 6.078,9.858 6.078,11.03 C6.078,12.202 5.148,13.153 4.002,13.153 L4.002,13.153 Z" fill="#378321" class="si-glyph-fill"> </path> </g> </g></svg>`

}

function updateDice () {
  const dice1Value = dice1.textContent;
  
  if (diceSVGs.hasOwnProperty(dice1Value)) {
    dice1.innerHTML = diceSVGs[dice1Value];
  }

  const dice2Value = dice2.textContent;
  if (diceSVGs.hasOwnProperty(dice2Value)) {
    dice2.innerHTML = diceSVGs[dice2Value];
  }

}

setInterval(updateDice, 100);
