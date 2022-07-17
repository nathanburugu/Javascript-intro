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
