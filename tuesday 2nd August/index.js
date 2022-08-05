// document.querySelctor(".num1").value = number1;
// document.querySelctor(".num2").value = number2;
// document.querySelector(".matokeo").textContent = results;
document.querySelector(".multiply").addEventListener("click", function () {
  const number1 = parseInt(document.querySelector(".num1").value);
  const number2 = parseInt(document.querySelector(".num2").value);
  const displayResult = function (result) {
    document.querySelector(".matokeo").textContent = result;
  };
  //   let result = document.querySelector(".matokeo").textContent;
  //   console.log(result);

  let results = number1 * number2;
  console.log(results);
  w;
  displayResult(`the answer is ${results}`);
  //   document.querySelector(".matokea").textContent = results;
  //   let results = number1 * number2;
  //   //   return results;
  //   console.log(results);
});
document.querySelector(".divide").addEventListener("click", function () {
  const number1 = parseInt(document.querySelector(".num1").value);
  const number2 = parseInt(document.querySelector(".num2").value);
  const displayResult = function (result) {
    document.querySelector(".matokeo").textContent = result;
  };

  let results = number1 / number2;
  console.log(results);
  displayResult(`the answer is ${results}`);
});
document.querySelector(".add").addEventListener("click", function () {
  const number1 = parseInt(document.querySelector(".num1").value);
  const number2 = parseInt(document.querySelector(".num2").value);
  const displayResult = function (result) {
    document.querySelector(".matokeo").textContent = result;
  };

  let results = number1 + number2;
  console.log(results);
  displayResult(`the answer is ${results}`);
});
document.querySelector(".subtract").addEventListener("click", function () {
  const number1 = parseInt(document.querySelector(".num1").value);
  const number2 = parseInt(document.querySelector(".num2").value);
  const displayResult = function (result) {
    document.querySelector(".matokeo").textContent = result;
  };
  let results = number1 - number2;
  console.log(results);
  displayResult(`the answer is ${results}`);
});
