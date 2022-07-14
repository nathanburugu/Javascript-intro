"use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("i can drive!");

//functions the fundamental bui;ding blocks of javascript very essential
function logger() {
    console.log('my Name is Nathan')
}
//calling running or invocking the function  is like using the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
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
};
const chainZaNate = natesChains(3, 4, 7);
console.log(chainZaNate);

// function to calculate age
function calcAge1(birthYear){
    // const age = 2022 - birthYear;
    return 2022- birthYear;
}
const yourAge = calcAge1(1991)
console.log(yourAge)

//function expression
const miaka = function (birthYear) {
    return 2022 - birthYear
}
const miakaZako = miaka(1998);
console.log(miakaZako);

//arrow function => ES6 function hen e its new and it is faster and shorter
const calcMiaka = birthYeah => 2022 - birthYeah;
const miakaz = calcMiaka(1999);
console.log(miakaz);

//calculating the number of years one has until retirement
const yearsUntilRetirement = (birthYeah, fName) => {
    const age = 2022 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${fName} retires in ${retirement} years`
}
const yearsLeft = yearsUntilRetirement(1998, "Nate");
console.log(yearsLeft)

//my try 
const puchusChains = (gold, silver, copper) => {
    const chains = `puchu has ${gold} gold chains and ${silver} silver chains and ${copper} copper chains`;
    return chains;
}
const zaPuchu = puchusChains(3, 4, 9);
console.log(zaPuchu);
//Another Example
function cutFruitPieces(fruit){
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
}

const miakaUntilRetirement = function (birthYeah, fName) {
    const age = calMiakaa(birthYeah);
    const retirement = 65 - age;
    // return retirement;
    // return `${fName} retires in ${retirement} years`
    if(retirement > 0){
        return `${fName} retires in ${retirement} years`
    } else {
        return `${fName}  retired already`
    }
}
const miakaImebaki = miakaUntilRetirement(1943, "Cate");
console.log(miakaImebaki);
//Quiz one on functions my way 
const calcAverage2 = (score1, score2, score3) => {
    const averageScore = (score1 + score2 + score3) / 3;
    return averageScore;
}
const dollAverage = calcAverage2(85, 54, 41);
const koalasAverage = calcAverage2(23, 34, 27);
console.log(dollAverage, koalasAverage);
function checkWinner(dollAverage, koalasAverage) {
    if(dollAverage > koalasAverage && dollAverage > (koalasAverage * 2)){//the way i used the AND operator is a longer way of doing it there is actually a shorter and easier eay of doing it instead just say dollAverage => koalasAverage * 2
        return `Dolphines win (${dollAverage} vs ${koalasAverage})`
    }else if (koalasAverage > dollAverage && koalasAverage > (dollAverage * 2)){
        return `Koalas win (${dollAverage} vs ${koalasAverage})`
    } else {
        return `Unluckily none won!`
    }
}
const winner = checkWinner(dollAverage, koalasAverage);
console.log(winner);
//i got it right but the lecturers is shorter
const hesabuAverage = (a, b, c) =>  (a + b + c) / 3;
//test 1
let scoreFish = hesabuAverage(44, 23, 71);
let scoreSungura = hesabuAverage(65,54,49);
console.log(scoreFish, scoreSungura);
const checkwinner2 = function(avgDolphines, avgKoalas) {
    if(avgDolphines >= 2 * avgKoalas){
        console.log(`Dolphines win the trophy🏆🏆 (${avgDolphines} vs ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphines){
        console.log(`Koalas win the trophy🏆🏆 (${avgDolphines} vs ${avgKoalas})`)
    } else {
        console.log(`Unluckily none won!`)
    }
}
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
 console.log(friend[friend.length - 1 ]);
 friend[2] = "jay";
 console.log(friend);

 const nate = ["nate", "Burugu", "Nairobi", "Kenya", 2022 - 1998, friend, "Developer"];
 console.log(nate);
 console.log(`nate has ${nate.length} friends, his best friend is ${nate[0]}`);

 //simple excercise
 const hesabuMiaka = function(birthYeah) {
    return 2022 - birthYeah;
 }
 const yearz = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
 const when = hesabuMiaka(yearz[8]);
 const when2= hesabuMiaka(yearz[4]);
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
numbers.unshift('john');
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
    if (bill >= 50 && bill <= 300){
        return bill * (15 / 100);
    }else {
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

// how it was done in the lecture
const pangaChai = function(billYako){
    return billYako >= 50 && billYako <= 300 ? billYako * (15 / 100) : billYako * (20 / 100);
}
const natez = {
    fName: 'Nathan',
    lName: "Burugu",
    birthYear: 1999,
    job: "Student",
    school: "KCA",
    hasDriversLicence: true,

    calcAge : function(birthYear){
    return 2022 - birthYear
    }
};
console.log(natez.calcAge(1912));
console.log(natez);
console.log(natez.lName);
console.log(natez["fName"]);

const nameKey = "Name";
console.log(natez['f' + nameKey]);
console.log(natez['l' + nameKey]);

const intrestedIn = prompt("what do you need to know about natez? Choose between fName, lName, age, job and school");
if(natez[intrestedIn]){
    alert(natez[intrestedIn]);
} else {
    prompt("wrong!what do you need to know about natez? Choose between fName, lName, age, job and school")
}
natez.location = "Nairobi";
natez["social"] = "nathanburugu23@gmail.com"
console.log(natez)