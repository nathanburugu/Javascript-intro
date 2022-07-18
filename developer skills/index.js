// remember, we're gonna use strict mode in all scripts now
"use strict";
// PROBLEM
// WE WORK FOR A COMPANY BUILDING A SMART HOME THERMOMETER. OUR MOST RECENT TAST IS THIS: 'GIVEN AN ARRAY OF TEMPERATURES OF ONE DAY, CALCULATE THE TEMPERATURE AMPLITUDE. KEEP IN MIND THAT SOMETIMES THERE MIGHT BE A SENSOR ERROR
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
//understanding the problem is the first step
//-what is amplitude? it si the difference between the highest and the lowest
//-how to compute max and min temperature
//-what is a sensor error and what do we do

// breaking it into sub probelems
//-ignore the sensor errors and work with the rest of the data
//find the max value in the temo array
//find the min value in the temo array
//subtract min from max (amplitude)and then return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitude([2, 7, 5]);
//before we start the loop the max is 2
// after the first loop in goes to the second and checks if the second is bigger than max and if it is then it becoems the new max
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//problem 2
//function should now recieve two arrays of temps
//1 understanding the problem
// - with 2 arrays, should we implement functionality twice? NO! just merge two arrays
// 2 breaking up into sub-problems
//-how to merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2); // to add two arrays together
  let max = temps[0];
  let min = temps[0];
  console.log(temps);
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    // value: parseInt(prompt("degrees celcius")),
    value: 10,
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
// using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2); // to add two arrays together
  let max = temps[0];
  let min = temps[0];
  console.log(temps);
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

//challange
const dayz1 = [17, 21, 23];
const dayz2 = [12, 5, -5, 0, 4];
const siku = [];
const printForecast = function (arr) {
  let temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const curTemp = arr[i];
    const curDay = i + 1;
    console.log(`it is ${curTemp} degress celcius in day ${curDay}`);
  }
};
// printForecast([2, 7, 5]);
const degrees = printForecast(dayz1);
const degrees2 = printForecast(dayz2);
console.log(degrees);
//i wasnt able to complete it my problem was adding the number of days which i was overthinking the correct way to add the number of days in an incrementig way is to just add one to the interartion
//1UNDERSTANDING THE PROBLEM
//- Array transformed to string seperated by 3 dots
//-wjat is the X days?Answer index plus one
//2 BREAKING UP INTO SUB PROBLEMS
//-transform array into a string
//-transorm each elemnt to string with degres celcius
//-strings need to contain day(index+1)
//- add ... between elements and start and end of string
//-log string to console
const data1 = [17, 21, 23];
const data2 = [22, 5, -5, 0, 4];
//if the array was as short as test data 1 we would hardcode it like this
console.log(
  `${data1[0]} degress celcius ...${data1[1]} degress celcius... ${data1[2]} degress celcius`
); // but we need a more dynamic way to do this
const printiForcast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}c in ${i + 1} day(s) ... `; // str += is the same as str = str + ....
  }
  console.log("..." + str);
};
printiForcast(data1);
