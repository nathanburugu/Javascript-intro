var interValid;
//getCurrentDateTime()

// function startTime() {
//   interValid = setInterval(getCurrentDateTime, 1000);
// }
// function stopTime() {
//   clearInterval(interValid);
// }
function getCurrentDateTime() {
  document.querySelector(".time").innerHTML = new Date();
}
document.querySelector(".start").addEventListener("click", function () {
  interValid = setInterval(getCurrentDateTime, 1000);
});
document.querySelector(".stop").addEventListener("click", function () {
  clearInterval(interValid);
});
