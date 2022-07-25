"use strict";
//selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
// we set the cuurent score variable here
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//function for switching players
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // if the active player is 0 then we want the new active number to be one or else be zero
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
//rolling the dice functionality
btnRoll.addEventListener("click", function () {
  //1.Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.display the dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //3.check for a rolled one if true switch to next player
  if (dice !== 1) {
    if (playing) {
      // Add dice to the current score and i orde rto do that we need a way of saving the value of the dice somewhere, we need to define a variable for that, but not in here cause if we did that everytime we rolled a dice the score would be reset
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } // switch to the next player if the dice is one
    else {
      //switch to next player
      switchPlayer();
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0; // if the active player is 0 then we want the new active number to be one or else be zero
      // player0El.classList.toggle("player--active");
      // player1El.classList.toggle("player--active");
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    // Add current score to active players score
    scores[activePlayer] += currentScore; // if the player active is one the this would be scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      //finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //switch to next player
      switchPlayer();
    }
  }
  //finish the game
});
