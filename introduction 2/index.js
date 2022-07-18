"use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive!");

//functions the fundamental bui;ding blocks of javascript very essential
function logger() {
  console.log("my Name is Nathan");
}
//calling running or invocking the function  is like using the function
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(4, 2);
console.log(appleOrangeJuice);
//testing my knowledge kiasi
function natesChains(gold, silver, bronze) {
  const chains = `Nate has ${gold} gold chains, ${silver} silver chains and ${bronze} bronze chains`;
  return chains;
}
const chainZaNate = natesChains(3, 4, 7);
console.log(chainZaNate);

// function to calculate age
function calcAge1(birthYear) {
  // const age = 2022 - birthYear;
  return 2022 - birthYear;
}
const yourAge = calcAge1(1991);
console.log(yourAge);

//function expression
const miaka = function (birthYear) {
  return 2022 - birthYear;
};
const miakaZako = miaka(1998);
console.log(miakaZako);

//arrow function => ES6 function hen e its new and it is faster and shorter
const calcMiaka = (birthYeah) => 2022 - birthYeah;
const miakaz = calcMiaka(1999);
console.log(miakaz);

//calculating the number of years one has until retirement
const yearsUntilRetirement = (birthYeah, fName) => {
  const age = 2022 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${fName} retires in ${retirement} years`;
};
const yearsLeft = yearsUntilRetirement(1998, "Nate");
console.log(yearsLeft);

//my try
const puchusChains = (gold, silver, copper) => {
  const chains = `puchu has ${gold} gold chains and ${silver} silver chains and ${copper} copper chains`;
  return chains;
};
const zaPuchu = puchusChains(3, 4, 9);
console.log(zaPuchu);
//Another Example
function cutFruitPieces(fruit) {
  const pieces = fruit * 2.5;
  return pieces;
}
function juiceMaker(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juiz = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juiz;
}
console.log(juiceMaker(3, 5));
// reviweing javascript
const calMiakaa = function (birthYeah) {
  return 2022 - birthYeah;
};

const miakaUntilRetirement = function (birthYeah, fName) {
  const age = calMiakaa(birthYeah);
  const retirement = 65 - age;
  // return retirement;
  // return `${fName} retires in ${retirement} years`
  if (retirement > 0) {
    return `${fName} retires in ${retirement} years`;
  } else {
    return `${fName}  retired already`;
  }
};
const miakaImebaki = miakaUntilRetirement(1943, "Cate");
console.log(miakaImebaki);
//Quiz one on functions my way
const calcAverage2 = (score1, score2, score3) => {
  const averageScore = (score1 + score2 + score3) / 3;
  return averageScore;
};
const dollAverage = calcAverage2(85, 54, 41);
const koalasAverage = calcAverage2(23, 34, 27);
console.log(dollAverage, koalasAverage);
function checkWinner(dollAverage, koalasAverage) {
  if (dollAverage > koalasAverage && dollAverage > koalasAverage * 2) {
    //the way i used the AND operator is a longer way of doing it there is actually a shorter and easier eay of doing it instead just say dollAverage => koalasAverage * 2
    return `Dolphines win (${dollAverage} vs ${koalasAverage})`;
  } else if (koalasAverage > dollAverage && koalasAverage > dollAverage * 2) {
    return `Koalas win (${dollAverage} vs ${koalasAverage})`;
  } else {
    return `Unluckily none won!`;
  }
}
const winner = checkWinner(dollAverage, koalasAverage);
console.log(winner);
//i got it right but the lecturers is shorter
const hesabuAverage = (a, b, c) => (a + b + c) / 3;
//test 1
let scoreFish = hesabuAverage(44, 23, 71);
let scoreSungura = hesabuAverage(65, 54, 49);
console.log(scoreFish, scoreSungura);
const checkwinner2 = function (avgDolphines, avgKoalas) {
  if (avgDolphines >= 2 * avgKoalas) {
    console.log(
      `Dolphines win the trophy🏆🏆 (${avgDolphines} vs ${avgKoalas})`
    );
  } else if (avgKoalas >= 2 * avgDolphines) {
    console.log(`Koalas win the trophy🏆🏆 (${avgDolphines} vs ${avgKoalas})`);
  } else {
    console.log(`Unluckily none won!`);
  }
};
const mshindi = checkwinner2(scoreFish, scoreSungura);
//score 2
scoreFish = hesabuAverage(85, 54, 41);
scoreSungura = hesabuAverage(23, 34, 27);
console.log(scoreFish, scoreSungura);
checkwinner2(scoreFish, scoreSungura);

//from 7pm to
const friend = ["nate", "sate", "kate", "date"];
console.log(friend);
const years = new Array(1999, 1998, 1997, 1996);
console.log(years);
console.log(friend[0]);
console.log(friend.length);
console.log(friend[friend.length - 1]);
friend[2] = "jay";
console.log(friend);

const nate = [
  "nate",
  "Burugu",
  "Nairobi",
  "Kenya",
  2022 - 1998,
  friend,
  "Developer",
];
console.log(nate);
console.log(`nate has ${nate.length} friends, his best friend is ${nate[0]}`);

//simple excercise
const hesabuMiaka = function (birthYeah) {
  return 2022 - birthYeah;
};
const yearz = [
  1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
  2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
  2016, 2017, 2018, 2019,
];
const when = hesabuMiaka(yearz[8]);
const when2 = hesabuMiaka(yearz[4]);
const when3 = hesabuMiaka(yearz[15]);

const whens = [when, when2, when3];
console.log(whens);
// BASIC ARRAY OPERATIONS (push, pop, shift, unshift, splice, slice, sort, reverse)
// push
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newLength = numbers.push(13);
console.log(numbers);
console.log(newLength);
// unshift
numbers.unshift("john");
console.log(numbers);
//pop
numbers.pop();
console.log(numbers);
// shift
numbers.shift();
console.log(numbers);

console.log(numbers.indexOf(3));
console.log(numbers.includes(5));

// coding challange 2 how i did it
function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * (15 / 100);
  } else {
    return bill * (20 / 100);
  }
}
const bills = [125, 555, 44];
const tipz = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tipz[0], bills[1] + tipz[1], bills[2] + tipz[2]];
const tip = calcTip(bills[0]);
const totalZ = bills[0] + tip;
console.log(tip);
console.log(totals, tipz);
//CLASS QUIZ

const toPay = prompt("Total Price");
if (toPay >= 7000) {
  const discount = toPay * (15 / 100);
  const total = toPay - discount;
  alert(`You have a discount of ${discount} you should pay ${total}`);
} else if (toPay >= 5000 && toPay <= 6999) {
  const discount = toPay * (10 / 100);
  const total = toPay - discount;
  alert(`You have a discount of ${discount} you should pay ${total}`);
} else if (toPay >= 3000 && toPay <= 4999) {
  const discount = toPay * (5 / 100);
  const total = toPay - discount;
  alert(`You have a discount of ${discount} you should pay ${total}`);
} else if (toPay >= 1000 && toPay <= 2999) {
  const discount = toPay * (2 / 100);
  const total = toPay - discount;
  alert(`You have a discount of ${discount} you should pay ${total}`);
} else if (toPay <= 999 && toPay > 0) {
  alert(`You have no discount pay ${toPay}`);
} else {
  alert("You have entered an invalid amount");
}

// how it was done in the lecture
const pangaChai = function (billYako) {
  return billYako >= 50 && billYako <= 300
    ? billYako * (15 / 100)
    : billYako * (20 / 100);
};
const natez = {
  fName: "Nathan",
  lName: "Burugu",
  birthYear: 1999,
  job: "Student",
  school: "KCA",
  hasDriversLicense: false,

  // calcAge : function(){
  // console.log(this)
  // return 2022 - this.birthYear
  // }
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.fName} is a ${this.calcAge()} year old  ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
  },
};
console.log(natez.calcAge());
console.log(
  `${natez.fName} is a ${natez.age} year old ${natez.job}, and he schools at ${
    natez.school
  }  and he has ${natez.hasDriversLicense ? "a" : "no"} drivers license`
);
console.log(natez.getSummary());
console.log(natez.age);
console.log(natez);
console.log(natez.lName);
console.log(natez["fName"]);

const nameKey = "Name";
console.log(natez["f" + nameKey]);
console.log(natez["l" + nameKey]);

const intrestedIn = prompt(
  "what do you need to know about natez? Choose between fName, lName, age, job and school"
);
if (natez[intrestedIn]) {
  alert(natez[intrestedIn]);
} else {
  prompt(
    "wrong!what do you need to know about natez? Choose between fName, lName, age, job and school"
  );
}
natez.location = "Nairobi";
natez["social"] = "nathanburugu23@gmail.com";
console.log(natez);

//challange 3 my way
const mark = {
  fullName: "Mark Kinuthia",
  mass: 78,
  height: 1.69,

  calcBmi: function () {
    const markBMI = this.mass / (this.height * this.height);
    return markBMI;
  },
};
const john = {
  fullName: "John Kaguna",
  mass: 92,
  height: 1.95,

  calcBmi: function () {
    const markBMI = this.mass / (this.height * this.height);
    return markBMI;
  },
};
if (`${mark.calcBmi()} > ${john.calcBmi()}`) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBmi()}) is higher than ${
      john.fullName
    }'s BMI (${john.calcBmi()})  `
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.calcBmi()}) is higher than ${
      mark.fullName
    }'s BMI (${mark.calcBmi()})  `
  );
}

// lecturers way
const x = {
  fullNames: "ule x",
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const y = {
  fullNames: "ule y",
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
y.calcBmi();
x.calcBmi();
console.log(y.bmi);
if (x.bmi > y.bmi) {
  console.log(
    `${x.fullNames} BMI (${x.bmi}) is higher than ${y.fullNames} BMI (${y.bmi})`
  );
} else {
  console.log(
    `${y.fullNames} BMI (${y.bmi}) is higher than ${x.fullNames} BMI (${x.bmi})`
  );
}

//for loop keeps running when condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep}`);
}

const natesArray = [
  "nathan",
  "burugu",
  2022 - 1999,
  "teacher",
  ["nate", "ate", "bate"],
];
const types = [];
for (let i = 0; i >= 0 && i <= 4 && i < natesArray.length; i++) {
  //reading from natesArray
  console.log(natesArray[i], typeof natesArray[i]);
  //filing types array
  // types[i] = typeof natesArray[i];
  types.push(typeof natesArray[i]);
}
console.log(types);

const miakaYe = [1992, 1993, 1996, 1993];
const ages = [];
for (let i = 0; i < miakaYe.length; i++) {
  ages.push(2022 - miakaYe[i]);
}
console.log(ages);
//continue and break
console.log(`----only strings---`);
for (let i = 0; i < natesArray.length; i++) {
  if (typeof natesArray[i] !== "string") continue;
  console.log(natesArray[i], typeof natesArray[i]);
}
//break
console.log(`----break with number ---`);
for (let i = 0; i < natesArray.length; i++) {
  if (typeof natesArray[i] === "number") break;
  console.log(natesArray[i], typeof natesArray[i]);
}
//looping backwards and loops in loops
const boyz = ["kiki", "buba", 2022 - 1999, "student", ["nate", "ate", "bate"]];
for (let i = boyz.length - 1; i >= 0; i--) {
  console.log(boyz[i]);
}

for (let excercise = 1; excercise < 10; excercise++) {
  console.log(`----------------starting excercise ${excercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Excercise ${excercise} lifting weight repetition${rep}`);
  }
}
// while loops
let rep = 1;

while (rep <= 10) {
  console.log(` while loop lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`loop is about to end ....`);
}
//coding challange
const billz = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
for (let i = 0; i < billz.length; i++) {
  const bill = billz[i];
  if (bill >= 50 && bill <= 300) {
    tips.push(bill * (15 / 100));
    total.push(bill + bill * (20 / 100));
  } else {
    tips.push(bill * (20 / 100));
    total.push(bill + bill * (15 / 100));
  }
  console.log(total);
  // console.log(billz[i])
  // console.log(tips[i])
  // console.log(total[i])
  console.log(
    `Your Bill was ${billz[i]} but you got a discount of ${tips[i]} now you get to pay ${total[i]}`
  );
}
//how the lec did it
const pangaChaiz = function (billYako) {
  return billYako >= 50 && billYako <= 300
    ? billYako * (15 / 100)
    : billYako * (20 / 100);
};
const billz2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const total2 = [];
for (let i = 0; i < billz2.length; i++) {
  const tip = pangaChaiz(billz2[i]);
  tips2.push(tip);
  total2.push(tip + billz2[i]);
}
console.log(tips2, total2);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i]
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(total2));
