"use strict";
//selecting elements
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
let currentScore = 0;
//rolling the dice functionality
btnRoll.addEventListener("click", function () {
  //1.Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.display the dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //3.check for a rolled one if true switch to next player
  if (dice !== 1) {
    // Add dice to the current score and i orde rto do that we need a way of saving the value of the dice somewhere, we need to define a variable for that, but not in here cause if we did that everytime we rolled a dice the score would be reset
    currentScore += dice;
    current0El.textContent = currentScore; // change later
  } // switch to the next player if the dice is one
  else {
    currentScore = 0;
  }
});
