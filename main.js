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
    alert(`Player ${currentPlayer} wins with ${playerScores[currentPlayer - 1]} points! Starting a new game.`);

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

btnStop.addEventListener("click", function(){
    alert("Switching players.");
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    
    outlineP1.classList.toggle("active", currentPlayer === 1);
    outlineP2.classList.toggle("active", currentPlayer === 2);

});

btnNewGame.addEventListener("click", function () {

    playerScores = [0, 0];
    scoreP1.textContent = 0;
    scoreP2.textContent = 0;
  
    currentPlayer = 1;
    outlineP1.classList.add("active");
    outlineP2.classList.remove("active");
  
    alert("New game started.");
  });
