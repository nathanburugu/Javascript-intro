"use strict";

/*
console.log(document.querySelector(".message").textContent); // reading the content
document.querySelector(".message").textContent = "Correct Number💃🎉🎈"; // changong the content
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 11;
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = parseInt(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No Number";
    displayMessage("⛔ No Number");
  } // when the player wins
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number💃🎉🎈";
    displayMessage("Correct Number💃🎉🎈");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
  }
  //shorter code
  else if (guess !== secretNumber) {
    //the if checks if the number guessed is greater than one so that the answer is not infinate
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber
      //     ? "Your guess is too High📈"
      //     : "Your Guess is too low📉";
      displayMessage(
        guess > secretNumber
          ? "Your guess is too High📈"
          : "Your Guess is too low📉"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } // this will be the output once someone has guessed to many times and they cant get it right hence they loose
    else {
      // document.querySelector(".message").textContent =
      displayMessage("Game is over Looser😭😭");
      document.querySelector(".score").textContent = 0;
    }
  }
  //shorter code
  /*
  // when the number guessed is greater than the secret number
  else if (guess > secretNumber) {
    //the if checks if the number guessed is greater than one so that the answer is not infinate
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Your guess is too High📈";
      score--;
      document.querySelector(".score").textContent = score;
    } // this will be the output once someone has guessed to many times and they cant get it right hence they loose
    else {
      document.querySelector(".message").textContent =
        "Game is over Looser😭😭";
      document.querySelector(".score").textContent = 0;
    } 
  } // when the guess is too low
  else if (guess < secretNumber) {
    //the if checks if the number guessed is greater than one so that the answer is not infinate
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Your Guess is too low📉";
      score--;
      document.querySelector(".score").textContent = score;
    }
    // this will be the output once someone has guessed to many times and they cant get it right hence they loose
    else {
      document.querySelector(".message").textContent =
        "Game is over Looser😭😭";
      document.querySelector(".score").textContent = 0;
    }
  }
  */
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
