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


