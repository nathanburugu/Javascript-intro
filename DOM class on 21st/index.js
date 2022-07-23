"use strict";

// function distanceCalc() {
//   var num1 = parseInt(document.getElementById("num1").value);
//   var num2 = parseInt(document.getElementById("num2").value);
//   document.getElementById("pay").value = kulipa();
// }
// var num1 = parseInt(document.querySelector("#num1").value);
// var num2 = parseInt(document.querySelector("#num2").value);
// // document.querySelector("#answer").value = num1 + num2;
// document.querySelector("button").addEventListener("click", function () {
//   document.querySelector("#answer").value = num1 + num2;
// });
/*
function kulipa() {
  if (distance >= 1 && distance <= 10) {
    console.log(100);
  } else if (distance >= 11 && distance <= 50) {
    console.log(300);
  } else if (distance >= 51 && distance <= 100) {
    console.log(500);
  } else if (distance >= 101 && distance <= 200) {
    console.log(1000);
  } else if (distance >= 201 && distance <= 300) {
    console.log(1200);
  } else if (distance >= 301 && distance <= 400) {
    console.log(1500);
  } else if (distance >= 401) {
    console.log("distance to long");
  }
}
*/
// let noOfPassengers = 0;
// document.querySelector(".pass").addEventListener("click", function () {
//   document.querySelector(".toPay").reset;
//   document.querySelector(".distance").reset;
// });
document.querySelector(".pay").addEventListener("click", function () {
  let fares = [];
  for (let i = 0; i < 14; i++) {
    let distance = parseInt(document.querySelector(".distance").value);
    if (distance >= 1 && distance <= 10) {
      document.querySelector(".toPay").value = 1 * 100;
      fares.push(distance);
      seats--;
    } else if (distance >= 11 && distance <= 50) {
      document.querySelector(".toPay").value = 1 * 300;
      fares.push(distance);
      seats--;
    } else if (distance >= 51 && distance <= 100) {
      document.querySelector(".toPay").value = 1 * 500;
      fares.push(distance);
      seats--;
    } else if (distance >= 101 && distance <= 200) {
      document.querySelector(".toPay").value = 1 * 1000;
      fares.push(distance);
      seats--;
    } else if (distance >= 201 && distance <= 300) {
      document.querySelector(".toPay").value = 1 * 1200;
      fares.push(distance);
      seats--;
    } else if (distance >= 301 && distance <= 400) {
      document.querySelector(".toPay").value = 1 * 1500;
      fares.push(distance);
      seats--;
    } else if (distance >= 401) {
      console.log("distance to long");
    }
  }
});

document.querySelector(".pass").addEventListener("click", function () {
  document.querySelector(".toPay").value = "";
  document.querySelector(".distance").value = "";
  document.querySelector(".new").textConent = seats;
});

/*
let distance = parseInt(document.querySelector(".distance").value);
document.querySelector(".pay").addEventListener("click", function () {
  if (distance >= 1 && distance <= 10) {
    document.querySelector(".toPay").value = 1 * 100;
  } else if (distance >= 11 && distance <= 50) {
    document.querySelector(".toPay").value = 1 * 300;
  } else if (distance >= 51 && distance <= 100) {
    document.querySelector(".toPay").value = 1 * 500;
  } else if (distance >= 101 && distance <= 200) {
    document.querySelector(".toPay").value = 1 * 1000;
  } else if (distance >= 201 && distance <= 300) {
    document.querySelector(".toPay").value = 1 * 1200;
  } else if (distance >= 301 && distance <= 400) {
    document.querySelector(".toPay").value = 1 * 1500;
  } else if (distance >= 401) {
    console.log("distance to long");
  }
});
document.querySelector(".pass").addEventListener("click", function () {});
*/
