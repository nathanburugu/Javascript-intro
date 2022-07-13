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




