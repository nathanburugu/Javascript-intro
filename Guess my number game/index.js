"use strict";

/*
console.log(document.querySelector(".message").textContent); // reading the content
document.querySelector(".message").textContent = "Correct Number💃🎉🎈"; // changong the content
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
document.querySelector(".check").addEventListener("click", function () {
  const guess = parseInt(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
});
