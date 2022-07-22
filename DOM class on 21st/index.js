"use strict";
function AddNumbers() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("answer").value = num1 + num2;
}
// var num1 = parseInt(document.querySelector("#num1").value);
// var num2 = parseInt(document.querySelector("#num2").value);
// // document.querySelector("#answer").value = num1 + num2;
// document.querySelector("button").addEventListener("click", function () {
//   document.querySelector("#answer").value = num1 + num2;
// });
